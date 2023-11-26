import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';
import { useSelector,useDispatch } from 'react-redux';

import { calculateTotal } from './control/cartSlice';

function App() {
  const dispatch=useDispatch();

  const { cartItems } = useSelector((store) => store.cart);

  useEffect(()=>{
    dispatch(calculateTotal());
  },[cartItems]);

  return (
    <div className="App">
      <Navbar />
      <CourseList />
     
    </div>
  );
}

export default App;
