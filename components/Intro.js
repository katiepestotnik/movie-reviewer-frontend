import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import {Container, colors} from '../styles/appStyles'

function Intro({navigation}) {
    return (
        <Container style={styles.container}>
            <TouchableHighlight underlayColor={colors.main} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.text}>Start Reviewing!</Text>
            </TouchableHighlight>
        </Container> 
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        color: colors.light
    }
})
export default Intro;