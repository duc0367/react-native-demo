import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import Platform from './components/Platform';
 
const App = () => {
 return (
   <SafeAreaView>
     <StatusBar />
     <View>
       <Platform/>
     </View>
   </SafeAreaView>
 );
};
 
export default App;