/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { connect, Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

//Screens
import Splash from './src/pages/Splash';
import Welcome from './src/pages/Welcome';

import reducers from './src/store/reducers';
import Chat from './src/pages/Chat';

const RouterWithRedux = connect()(Router);

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <RouterWithRedux sceneStyle={{ backgroundColor: '#fff' }}>
        <Scene key="root" hideNavBar>
          <Scene key="splash" component={Splash} initial />
          <Scene key="welcome" component={Welcome} type="reset" />
          <Scene key="chat" component={Chat} type="reset" />
        </Scene>
      </RouterWithRedux>
    </Provider>
  );
};

export default App;
