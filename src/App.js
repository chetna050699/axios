import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './reduxContainer/Store';
import BookContainer from './reduxContainer/BookContainer';
import AxiosCode from './AxiosCode';
import AxiosPost from './AxiosPost';
import AxiosPutDelete from './AxiosPutDelete';

function App(){

  return (
    <>
    <div className='App'>axios projects</div>
    <AxiosPost/>
    </>
   
  )
      

}

export default App;
