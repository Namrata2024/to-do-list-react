
import './App.css';
import {useState} from "react";
import {Task} from "./Task";

function App() {
const[todoList,setToDoList]=useState([]);
const [newTask,setNewTask]=useState();

const handleChange=(event)=>{
  
setNewTask(event.target.value);
}

const addTask=()=>{
  const task={
    id:todoList.length===0 ?1:todoList[todoList.length-1].id+1,
    taskName:newTask,
   completed:false,
  }

// here three dots followed by a existing list or array an means that u want to use some old list or array and whatever is written after the "," is the new element that u want to add to the list
setToDoList(task.taskName !== "" ?[...todoList,task]:todoList);

}

const updateTask=(id)=>{
  setToDoList(
todoList.map((task)=>{
  if(task.id===id){
    return {...task,taskName:newTask};}
    else
    return task;
  
}));
};

const completeTask=(id)=>{
  setToDoList(
todoList.map((task)=>{
  if(task.id===id){
    return {...task,completed:true};}
    else
    return task;
  
}));
};

const deleteTask=(id)=>{
// const newToDoList=todoList.filter((taskName)=>{
//   if(task===taskName.id)
//   return false;
//   else
//   return true;
// })
// setToDoList(newToDoList);
//instead of doing the above method we can also it in a single line by only applying the condition which we want in this case we only want to add items whose id is not as same id we get as a input from this function
setToDoList(todoList.filter((task)=>task.id!==id));
}



  return (
    <div className="App">
      <h1 className='heading'>TO DO LIST</h1>
      <div className="addTask" >
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
{todoList.map((task)=>{
  return (
    <Task name={task.taskName} id={task.id} deleteTask={deleteTask} completeTask={completeTask}
    completed={task.completed} updateTask={updateTask}/>
  );})}
  </div>
    </div>
  );
}

export default App;
