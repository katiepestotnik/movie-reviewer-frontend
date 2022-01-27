import { ActivityIndicator } from 'react-native';
import { Spinner, colors } from '../styles/appStyles';

function SpinnerComponent(props) {
    return (
        <Spinner>
            <ActivityIndicator
                size='large'
                color={colors.light}
            />
        </Spinner>
    );
};
export default SpinnerComponent;