import { useEffect, useState } from 'react';
//components
import Header from './Header';
import ListItems from './ListItems';
import InputModal from './InputModal';

function Home(props) {
    const [reviewApi, setReviewApi] = useState(null);
    const getReview = async () => {
        const response = await fetch("https://movie-reviewer-backend.herokuapp.com/review", {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        setReviewApi(data);
    }
    useEffect(() => getReview(), []);

    //add review
    const handleAddReview = async (review) => {
        fetch("https://movie-reviewer-backend.herokuapp.com/review", {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(review)
        }).then(response => response.json()).then(data => {
            getReview();
        })
    };
            //edit
        const handleEdit = async (item, rowKey) => {
            console.log(rowKey)
            fetch("https://movie-reviewer-backend.herokuapp.com/review/" + rowKey, {
                method: 'put',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item)
            }).then(response => response.json()).then(data => {
                getReview();
            });
        };
    //modal 
    const [modalV, setModalV] = useState(false)
    //input for the four fields
    const [inputTitle, setInputTitle] = useState();
    const [inputImage, setInputImage] = useState()
    const [inputDescription, setInputDescription] = useState();
    const [inputRating, setInputRating] = useState();


    const [reviewEdit, setReviewEdit] = useState(null);
    const handleTriggerEdit = (item) => {
        setReviewEdit(item);
        setModalV(true);
        //not working
        setInputTitle(item.movieName);
        setInputImage(item.movieImage);
        setInputDescription(item.movieReview);
        setInputRating(item.movieRating);
    }

    return (
        <>
            <Header />
            <InputModal
                modalV={modalV}
                setModalV={setModalV}
                setInputTitle={setInputTitle}
                setInputImage={setInputImage}
                setInputDescription={setInputDescription}
                setInputRating={setInputRating}
                handleAddReview={handleAddReview}
                handleEdit={handleEdit}
                reviewEdit={reviewEdit}
                setReviewEdit={reviewEdit}/>
            <ListItems
                reviewApi={reviewApi}
                setReviewApi={setReviewApi}
                getReview={getReview}
                setModalV={setModalV}
                handleEdit={handleEdit}
                handleTriggerEdit={handleTriggerEdit}
            />
        </>
    );
};
export default Home;