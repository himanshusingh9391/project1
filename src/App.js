
import './App.css';
import InputContainer from './Components/InputContainer';
import ItemsComponent from './Components/ItemsComponent';
import Count from './Components/Count';
import {useState} from 'react';

export default function App() {
  const [todos,setTodos] = useState([]);

  const addNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (itemTobeDeleted) =>{
    const filteredTOdo = todos.filter((item) => item!==itemTobeDeleted);
    setTodos(filteredTOdo)
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      < Count itemsCount={todos.length}/>
      <InputContainer addNewTodo={addNewTodo}/>
      <ItemsComponent todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}


