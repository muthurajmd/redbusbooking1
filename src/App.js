import { Provider } from 'react-redux';
import './App.css';
import Routing from './Routing/Routing';
import { Store } from './Redux/Store';
// import icons from "../public/icons/available.jpg"
import ic from './icons/available.jpg'

function App() {
  return (
    <>
     <Provider store={Store}>
      <Routing/>    
    </Provider>
    </>
  );
}

export default App;
