import "./App.css";
export const Task=(props)=>{
    return(
    <div className='task' style={{backgroundColor:props.completed?"green":"white"}}><h1 className='task-name' style={{color:!props.completed?"green":"black"}}>{props.name}</h1>
    {/* whenever  u need to pass parameters to function inside on click then u need to create an anonnymous functions that will call the functions with parameters */}
    <button className="com-btn"style={{color:!props.completed?"green":"white"}}onClick={()=>props.completeTask(props.id)}>complete</button>
    <button className="upd-btn"onClick={()=>props.updateTask(props.id)}>update</button>
    <button className="del-btn"onClick={()=>props.deleteTask(props.id)}>X</button>
    </div>  );
};