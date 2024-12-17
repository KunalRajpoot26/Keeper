import { useState } from 'react';
import './App.css'
import Listinput  from './Listinput';
import Listshow from './Listshow';

function App() {

  const backgroundStyle = {
    backgroundImage : "url('background-image.jpg')",
    height: "500px",
  };

  const[todos, setTodos] = useState([]);

  const addTodo = ({title, description}) => {
    setTodos((prevTodos) => [...prevTodos , {title, description}]);
  }

  return (
    <>      
      <div style={backgroundStyle}> 
      <Listinput addTodo={addTodo}/>
      <Listshow todos={todos}/>
      </div>
    </>
  );
}

export default App
