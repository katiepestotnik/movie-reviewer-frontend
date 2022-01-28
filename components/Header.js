import { MaterialCommunityIcons } from "@expo/vector-icons";
//styled components
import {
    HeaderContainer,
    HeaderText,
    colors,
} from '../styles/appStyles';

function Header(props) {
    return (
        <HeaderContainer>
            <HeaderText>Movie Reviewer</HeaderText>
            <MaterialCommunityIcons name="movie-open-outline" size={60} color={colors.light} />
        </HeaderContainer>
    );
};
export default Header;