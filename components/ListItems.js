import { SwipeListView } from 'react-native-swipe-list-view';
import { Text, ImageBackground} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
//wasn't able to get this to work
import AnimatedLoader from 'react-native-animated-loader';
//components
import SpinnerComponent from './SpinnerComponent';

//styled components
import {
    List,
    ReviewText,
    ReviewTitle,
    ListHidden,
    ButtonHidden,
    SwipedReviewTitle,
    StarView,
    StarImage,
    colors,
    Container
} from '../styles/appStyles';

function ListItems({ reviewApi, getReview, handleTriggerEdit }) {
    //key of swiped row
    const [swipedRow, setSwipedRow] = useState(null);
    const handleDelete = async (rowMap, rowKey) => {
        fetch("https://movie-reviewer-backend.herokuapp.com/review/" + rowKey, {
            method: 'delete'

        }).then(response => response.json()).then(data => {
            getReview();
        });
    };
    const filledStar = 'https://www.outsystems.com/Forge_BL/rest/ComponentThumbnail/GetURL_ComponentThumbnail?ProjectImageId=34673'
    const emptyStar = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

    //1-5 star rating with map reference in readme
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

        if (!reviewApi) {
            return <SpinnerComponent/>
        } else {
            return (
                <Container>
                <SwipeListView
                    data={reviewApi}
                    keyExtractor={(item) => item._id.toString()
                    }
                    renderItem={(data) => {
                        //change text when swiped 
                        const RowText = data.item._id === swipedRow ? SwipedReviewTitle : ReviewTitle;
                        let images = data.item.movieImage
                        return (
                            <List
                                underlayColor={colors.light}
                                onPress={() => {
                                    handleTriggerEdit(data.item)
                                    }}>
                                <>
                                  <RowText>{data.item.movieName}</RowText>
                                  <Text>
                                    <ImageBackground source={{ uri: `${images}` }} resizeMode='cover' style={{height: 150, width: 150}} />
                                  </Text>
                                    <ReviewText>{data.item.movieReview}</ReviewText>
                                  <StarView>
                                        {maxRating.map((item) => {
                                            return (
                                                <StarImage
                                                  key={item}
                                                  source={
                                                    item <= data.item.movieRating
                                                      ? {uri: filledStar}
                                                      : {uri: emptyStar}
                                                  }
                                                />
                                            )
                                    })}
                                    </StarView>
                                </> 
                            </List>
                        )
                    }}
                    renderHiddenItem={(data, rowMap) => {
                        return(<ListHidden>
                            <ButtonHidden
                                onPress={()=>handleDelete(rowMap, data.item._id)}>
                                <MaterialCommunityIcons
                                    name="delete-circle" size={50}
                                    color="#ff1c27"/>
                            </ButtonHidden>
                        </ListHidden>)
                    }}
                    leftOpenValue={70}
                    previewOpenValue={70}
                    previewOpenDelay={1500}
                    disableLeftSwipe={true}
                    showsVerticalScrollIndicator={false}

                    previewRowKey={reviewApi[0]._id}
                    onRowClose={() => {
                        setSwipedRow(null)
                    }}
                    />
                    </Container>
            );
    };
};
export default ListItems;