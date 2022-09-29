import logo from './logo.svg';
import './App.css';
import Gyms from './Component/Gyms/Gyms';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="App">
       <Gyms></Gyms>
       
    </div>
  );
}

export default App;
