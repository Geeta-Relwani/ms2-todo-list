import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import './App.css';

function App() {

const [todoList, setTodoList] = React.useState([]);
const [todo,setTodo] = React.useState('');

function handleSubmit(e){
  e.preventDefault();
  console.log(todo)
  const newTodo ={
    id : new Date().getTime(),
    text : todo,
    isCompleted : false,
  }

  setTodoList([...todoList].concat(newTodo));
  setTodo('');
}

function deleteTodo(deleteTodo){
 const updatedTodoList = [...todoList].filter(todo => todo.id !== deleteTodo.id)
  setTodoList(updatedTodoList);
}

function toggleTodo(id){
  const updatedTodoList = [...todoList].map((todo) => {
    if(todo.id === id){
       todo.isCompleted = !todo.isCompleted;
    }
     return todo
  })

  setTodoList(updatedTodoList)
}


  return (
    <div className="App">
      <form className="input-field" >
        <input className="input-text" type="text" placeholder="Add new Task"  onChange={(e) => setTodo(e.target.value)} value={todo}/>
        {/* <span onClick={handleSubmit}><FaPlus/></span> */}
        <button className="add-btn" onClick={handleSubmit} type="submit">Add Todo</button>
      </form>


      {/* <div className="status-div">
            Pending Tasks - {todoList.length? }
      </div> */}

      {todoList.map((todo,index)=>{
        return (



        <div className="main-div" key={todo.id}>

        <input className="checkbox" type="checkbox" onChange={()=>toggleTodo(todo.id)} checked={todo.isCompleted}/>  
        
        <span className="item-number">{index + 1}</span>
       
       <span className="todo-text">{todo.text}</span>
        <span className="delete-icon" onClick={()=>deleteTodo(todo)}><MdDelete/></span>
        </div>
          
          
          )
      })}

    </div>
  );
}

export default App;
