import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, RefreshControl, LogBox } from 'react-native';
import {useState, useCallback, useEffect} from 'react'

//styled components
import {Container} from './styles/appStyles'

//components
import Home from './components/Home';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function App() {
  //remove virtualized error
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1500).then(() => setRefreshing(false));
  }, []);
  return (
    <>
      <Container>
      <StatusBar style="light" />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh} />}>
          <Home />
        </ScrollView>
      </Container>
    </>
  );
}


