import { Modal } from 'react-native';
import { Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';

//styled components
import {
    ModalButton,
    ModalContainer,
    ModalView,
    ModalTouchable,
    ModalInputButton,
    ModalIcon,
    HeaderText,
    colors,
    StyledInput,
    TextWarning
} from '../styles/appStyles';

function InputModal({
    modalV, setModalV, setInputTitle, setInputImage, setInputDescription, setInputRating, handleAddReview, reviewEdit, handleEdit }) {
    //close  modal
    const handleClose = () => {
        setModalV(false);
        setInputRating(null);
        setInputImage(null);
        setInputDescription(null);
        setInputTitle(null);
    }
    //form
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            movieName: "",
            movieImage: "",
            movieReview: "",
            movieRating: "", 
        }
    });
    const onSubmit = (data, rowKey) => {
        if (!reviewEdit) {
            handleAddReview(data);
            setModalV(false);
            reset('');
        } else {
            handleEdit(data, reviewEdit._id);
            setModalV(false);
            reset('');
        }
    };
    return (
        <>
            <ModalButton onPress={()=>setModalV(true)}>
                <Entypo name="add-to-list" size={30}/>
            </ModalButton>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalV}
                onRequestClose={handleClose}>
                <ModalContainer>
                    <ModalView>
                        <ModalIcon>
                            <HeaderText>Review</HeaderText>
                            <MaterialCommunityIcons name="movie-edit" size={100} color={colors.light}/>
                        </ModalIcon>
                    <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <StyledInput
                                    placeholder='Movie Name'
                                    placeholderTextColor={colors.main}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    autoCapitalize='words'
                                />
                            )}
                            name="movieName"
                        />
                        {errors.movieName && <TextWarning>This is required</TextWarning>}
                        <Controller
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <StyledInput
                                    placeholderTextColor={colors.main}
                                    placeholder="Image URL"
                                    autoCapitalize="none"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="movieImage"
                        />
                        {errors.movieImage && <TextWarning>This is required</TextWarning>}
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <StyledInput
                                    placeholder="What did you think of the movie?"
                                    placeholderTextColor={colors.main}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    multiline={true}
                                />
                            )}
                            name="movieReview"
                        />
                        <Controller
                            control={control}
                            rules={{
                                maxLength: 1,
                                max: 5,
                                min: 1
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <StyledInput
                                    placeholder="Rate Movie 1-5"
                                    placeholderTextColor={colors.main}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="movieRating"
                        />
                        {errors.movieRating && <TextWarning>Must Be 1-5</TextWarning>}
                        <ModalInputButton>
                            <ModalTouchable onPress={handleClose}>
                                <AntDesign name="closecircle" size={40} color={colors.main }/>
                            </ModalTouchable>
                            <ModalTouchable onPress={handleSubmit(onSubmit)}>
                                <AntDesign name="checkcircle" size={40} color={colors.main }/>
                            </ModalTouchable>
                            {/* <ModalTouchable onPress={()=>console.log('edit')}>
                                <MaterialCommunityIcons name="database-edit" size={40} color={colors.main }/>
                            </ModalTouchable> */}
                        </ModalInputButton>
                    </ModalView>
                </ModalContainer>
            </Modal>
        </>
    );
};
export default InputModal;