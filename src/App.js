import './App.css';
import Task from './compononets/Task';

function App() {

  const task =[
    {id:1,task:"Task 1"},
    {id:2,task:"Task 2"},
    {id:3,task:"Task 3"},
  ];

  return (
  <div className='app'> 
    <Task task={task[0].task}/>
    <Task task={task[1].task}/>
    <Task task={task[2].task}/>
  </div>
  );

}

export default App;
