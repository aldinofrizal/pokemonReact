import React, { useState } from 'react';
import { PanResponder, View } from 'react-native';
import TabNav from './src/TabNavigation'
import { Provider } from 'react-redux'
import store from './src/store/store'
import Header from './src/components/Header'

export default function App() {
  const [swiped, setSwiped] = useState(false)
  
  const responder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      if( gestureState.y0 - gestureState.moveY > 200 ) { 
          setSwiped(true)
      }
    }
  })


  if(!swiped){
    return (
        <View
          {...responder.panHandlers}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height : '100%' }}
        >
          <Header></Header>
        </View>
    )
  } else { 
    return (
      <>
        <Provider store={store}>
          <TabNav></TabNav>
        </Provider>
      </>
    );
  }

}


