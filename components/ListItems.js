import { SwipeListView } from 'react-native-swipe-list-view';
import { Text, ImageBackground, View,Image, StyleSheet, ActivityIndicator} from 'react-native';
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
    colors
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
    //stars  setup and images came from this resource: https://aboutreact.com/react-native-custom-star-rating-bar/
    const filledStar = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png'
    const emptyStar = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

    //1-5 star rating with map
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

        if (!reviewApi) {
            return <SpinnerComponent/>
        } else {
            return (
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
                                  <View style={styles.customRatingBarStyle}>
                                        {maxRating.map((item) => {
                                            return (
                                                <Image
                                                  key={item}
                                                  style={styles.starImageStyle}
                                                  source={
                                                    item <= data.item.movieRating
                                                      ? {uri: filledStar}
                                                      : {uri: emptyStar}
                                                  }
                                                />
        
        
                                            )
                                    })}
                                  </View>
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
                    //hard coded
                    previewRowKey={'61f1e2be3efbe8a369d678ab'}
                    previewOpenValue={70}
                    previewOpenDelay={1500}
                    disableLeftSwipe={true}
                    showsVerticalScrollIndicator={false}
                    onRowOpen={(rowKey) => {
                        setSwipedRow(rowKey)
                    }}
                    onRowClose={() => {
                        setSwipedRow(null)
                    }}
                />
            );
        }



};
const styles = StyleSheet.create({
    customRatingBarStyle: {
        flexDirection: 'row',
    },
    starImageStyle: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
    },
    buttonStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        padding: 15,
        backgroundColor: '#8ad24e',
      },
      buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
      },
})

export default ListItems;