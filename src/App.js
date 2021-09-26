import './App.css';
import { uuid } from "uuidv4"
import {useDispatch, useSelector} from 'react-redux';
import TodoList from './Components/ListTask';
import AddTask from './Components/AddTask';
import { filterTodo } from './Redux/actions/Action';
import { Button } from 'react-bootstrap';


function App() {
  const todos = useSelector(state=>state.todos);
  const filter = useSelector(state=>state.filter);
  const dispatch = useDispatch()
  
  return (

    <div className="App">
      <Button style={{width:'100px',marginLeft:'10px', marginRight:'10px'}} onClick={()=>dispatch(filterTodo('All'))} className="btn btn-primary">All</Button>
      <Button style={{width:'100px',marginLeft:'10px', marginRight:'10px'}} onClick={()=>dispatch(filterTodo(true))}  className="btn btn-primary">Done</Button>
      <Button style={{width:'100px',marginLeft:'10px', marginRight:'10px'}} onClick={()=>dispatch(filterTodo(false))}  className="btn btn-primary">UnDone</Button><br/><br/>
      <TodoList todos={filter==='All'? todos : todos.filter((elm)=> elm.isDone===filter)}/>
      <hr></hr>
      <br></br>
      <span> Ajouter une nouvelle tache </span>
      <br></br>
      <AddTask/>
    </div>
  );

}

export default App;
