import React, { Component } from 'react';
import './App.css';

import {IFrameConnector, UserInfo} from './Components/BlackboardApi'

class App extends Component {
  render() {
    return (
      <IFrameConnector>
        <UserInfo></UserInfo>
      </IFrameConnector>
    );
  }
}

export default App;
