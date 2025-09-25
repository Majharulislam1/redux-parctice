 import { useDispatch } from 'react-redux'
import './App.css'
import { decrements, increments } from './redux/features/counter/counter';
import { useAppDispatch, useAppSelector } from './redux/hooks';

function App() {
   
  const dispatch = useAppDispatch();
  const {count}= useAppSelector((state) => state.counter)
  
  

  const handleIncrements = (amount:number)=>{
      dispatch(increments(amount));
  }

  const handleDecrements = ()=>{
   dispatch(decrements());
  }

  return (
    <>
      <div>
           <button onClick={()=>handleIncrements(1)}>increments</button>
           <button onClick={()=>handleIncrements(5)}>increments by 5</button>
            <h1>{count}</h1>
           <button onClick={handleDecrements}>decrements</button>
      </div>
    </>
  )
}

export default App
