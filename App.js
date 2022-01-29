import { StatusBar } from 'expo-status-bar';
import {ScrollView, LogBox } from 'react-native';
import { useEffect } from 'react'
//component manages navigation tree and state
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//styled components
import {colors, Container} from './styles/appStyles'

//components
import Home from './components/Home';
import Intro from './components/Intro';

//returns object of Screen and Navigator
const Stack = createNativeStackNavigator();

export default function App(props) {
  //remove virtualized error
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  return (
    <Container>
    <StatusBar style="light" />
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome"
            options={{
              headerStyle: {
                backgroundColor: colors.main
              },
              headerTintColor: colors.light,
              headerTitleAlign: "center"
          }}>{props => <Intro {...props} />}</Stack.Screen>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: {
                backgroundColor: colors.main
              },
              headerTintColor: colors.light,
              headerTitleAlign: 'center'
            }}
            />
        </Stack.Navigator>
      </NavigationContainer>
      </Container>



  );
};