import styled from "styled-components";
import {
  Platform
} from "react-native";
import Constants from "expo-constants";

//colors
export const colors = {
    main: "#1529df",
    middle: "#7985f2",
    light: "#d7dafb",
    black: "#000",
    warning: '#ffd7d9',
    invalid: '#aa0500'
  };

  //style variables
//no longer need
const statusBarHeight = Constants.statusBarHeight;
const fontStyle = Platform.OS === "android"? "Roboto": 'Futura-MediumItalic'

//intro
export const IntroContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.main};
  padding-bottom: 90px;
`
export const IntroImage = styled.ImageBackground`
  width: 300px;
  height: 350px;
  
`
//main page styles
export const Container = styled.SafeAreaView`
  background-color: ${colors.main};
  flex: 1;
  padding-top: ${statusBarHeight}px;
`;

// Header
export const HeaderContainer = styled.View`
  background-color: ${colors.main}; 
  padding-vertical: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: ${colors.light};
  letter-spacing: 3px;
  fontFamily: ${fontStyle}
`;

//listItems
export const List = styled.TouchableHighlight`
  background-color: ${colors.middle};
  flex: 1;
  width: 100%;
  padding: 15px;
  justify-content: space-around;
  margin-bottom: 15px;
  border-top-right-radius: 40px;border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 40px;
`;
export const ReviewTitle = styled.Text`
  font-size: 20px;
  font-weight: 900;
  font-family: ${fontStyle};
  padding-bottom: 5px;
  color: ${colors.main};
`
export const ReviewText = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  color: ${colors.main};
  padding: 5px;
  font-weight: bold;
`;
export const ListHidden = styled.View`
  background-color: ${colors.warning};
  flex: 1;
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
  border-top-right-radius: 40px;border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 40px;
`;
export const ButtonHidden = styled.TouchableOpacity`
  width: 55px;
  align-items: center;
`;
export const SwipedReviewTitle = styled(ReviewTitle)`
  color: red;
  font-style: italic;
  text-decoration: line-through;
`;

// Modal
export const ModalButton = styled.TouchableOpacity`
width: 60px;
height: 60px;
background-color: ${colors.light};
border-radius: 30px;
justify-content: center;
align-items: center;
align-self: center;
bottom: 10px;
`;

export const ButtonContainer = styled.View`
background-color: ${colors.main}
`

export const ModalContainer = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${colors.main};
`;

export const ModalView = styled.View`
  background-color: ${colors.middle};
  width: 100%;
  padding: 5px;
`;

export const StyledInput = styled.TextInput`
  width: 100%;
  height: 60px;
  background-color: ${colors.light};
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  color: ${colors.main};
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

export const ModalTouchable = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${colors.light};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ModalInputButton = styled.View`
  flex-direction: row;
  margin: 20px;
  justify-content: space-evenly
  
`;

export const ModalIcon = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;
//required field warning
export const TextWarning = styled.Text`
  color: ${colors.invalid};
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 3px;
`
//spinner
export const Spinner = styled.View`
  background-color: ${colors.main};
  flex: 1;  
  justify-content: center;
  align-items: center;
  height: 300px;
  padding-bottom: 200px
`
//stars
export const StarView = styled.View`
  flex-direction: row;
`
export const StarImage = styled.Image`
  width: 25px;
  height: 25px;
`
