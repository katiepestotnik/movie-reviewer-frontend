import {TouchableHighlight, Text } from 'react-native';
import { IntroContainer, IntroImage, colors} from '../styles/appStyles';
import { useState } from 'react';

import Header from './Header';
import SpinnerComponent from './SpinnerComponent';


const image = {uri: 'https://m.media-amazon.com/images/M/MV5BNWUyZmRiNDItMjRhNC00NmU4LTlhZWUtNWUzM2U2NTQyOTZlXkEyXkFqcGdeQXVyOTE1MTk1MzY@._V1_.jpg'}

function Intro({ navigation }) {
    const [loading, setLoading]=useState(false)
    return (
        <>
            <Header/>
            <IntroContainer>
                <TouchableHighlight underlayColor={colors.main} onPress={() => navigation.navigate('Home')}>
                    <IntroImage
                        source={image}
                        onLoadStart={() => {
                            setLoading(true)
                        }}
                        onLoadEnd={() => {
                            setLoading(false)
                        }}
                    />
                </TouchableHighlight>{loading && <SpinnerComponent/>}
            </IntroContainer> 
        </>
    );
};
export default Intro;