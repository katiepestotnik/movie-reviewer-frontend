import { SwipeListView } from 'react-native-swipe-list-view';
import { Text, ImageBackground, Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
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
//components
import StarRating from '../StarRating/StarRating';

function ListItems({ reviewApi, getReview, handleTriggerEdit}) {
    //key of swiped row
    const [swipedRow, setSwipedRow] = useState(null);
    const handleDelete = async (rowMap, rowKey) => {
        fetch("https://movie-reviewer-backend.herokuapp.com/review/" + rowKey, {
            method: 'delete'

        }).then(response => response.json()).then(data => {
            getReview();
        });
    };

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
                            <StarRating/>
                          <ReviewText>Rating: {data.item.movieRating} stars</ReviewText>
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
};

export default ListItems;