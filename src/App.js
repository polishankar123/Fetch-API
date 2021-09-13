import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useState } from 'react';

const App = () => {
  const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '420px',
    display: 'block'
  };
  const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
  };
  
  const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#3085d6',
    width: '100%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
  };
  const btStyle={
    padding: '5px',
    margin: '10px'
  }

  const [data,setData] = useState([]);

  const fetchUserData = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => setData(json))
   console.log(data);
  }
  return(
    <div>
      <Header />
      <center style={formStyle}>
       <button style={btStyle} onClick={fetchUserData}>Fetch</button>
      </center>
      {data.map(item=><li key={item.id}>{item.title}</li>)}
      <Footer />
    </div>
  )
}

export default App;
