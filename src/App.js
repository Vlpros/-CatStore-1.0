import logo from './logo.svg';
import './App.css';
import Main from './Main/Main';
import Header from './Header/Header';

function App(props) {
  return (
    <div className='c'>
      <div className='container'>
      
      <Main state={props.state}/>
    </div>
    </div>
    
  );
}

export default App;
