 import { useDispatch } from 'react-redux'
import './App.css'
import { decrements, increments } from './redux/features/counter/counter';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { Button } from './components/ui/button';
import { Outlet } from 'react-router';
import Navbar from './components/layout/Navbar';

function App() {
   
  const dispatch = useAppDispatch();
  // const {count}= useAppSelector((state) => state.counter)
  
  

  const handleIncrements = (amount:number)=>{
      dispatch(increments(amount));
  }

  const handleDecrements = ()=>{
   dispatch(decrements());
  }

  return (
    <>
      <div>
           <Navbar></Navbar>
           <div className='w-4/5 mx-auto py-20'>
                 <Outlet></Outlet>
           </div>
          
      </div>
    </>
  )
}

export default App
