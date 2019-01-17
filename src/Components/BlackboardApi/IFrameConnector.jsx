import { Component } from 'react';
import { Backend, BBIframeBackend } from 'blackboardlib';
import PropTypes from 'prop-types';

class App extends Component {

    static propTypes = {
        children: PropTypes.element
    }

    render() {
        try {
            Backend.setBackend(new BBIframeBackend())
        } catch(e) {
            console.log(e)
        }
        return this.props.children
    }
  }
  
  export default App;
  