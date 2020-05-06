import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import LoginForm from './LoginScreen';
import RegForm from './RegScreen';

const FirstRoute = () => (
    <LoginForm />
  );
  
  const SecondRoute = () => (
    <RegForm />
  );
  
  const initialLayout = { width: Dimensions.get('window').width };
  
  export default function TabViewExample() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Accedi' },
      { key: 'second', title: 'Registrati' },
    ]);
  
    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
    });

    const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'white' }}
          style={{ backgroundColor: '#342ecd' }}
        />
      );
  
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        style={{marginTop:30}} 
      />
    );
  }
  
  const styles = StyleSheet.create({
    TabBar: {
      flex: 1,
      backgroundColor:'red'
    },
  });