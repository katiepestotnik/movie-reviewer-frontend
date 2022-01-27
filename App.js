import { StatusBar } from 'expo-status-bar';
import {ScrollView, LogBox } from 'react-native';
import {useEffect} from 'react'

//styled components
import {Container} from './styles/appStyles'

//components
import Home from './components/Home';

export default function App() {
  //remove virtualized error
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  return (
    <>
      <Container>
      <StatusBar style="light" />
        <ScrollView>
          <Home />
        </ScrollView>
      </Container>
    </>
  );
};