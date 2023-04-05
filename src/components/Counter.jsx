import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterActions';



const Counter = () => {

    const countNo = useSelector(state => state.count)
    //console.log(countNo);
    const dispatch = useDispatch();

    const handleIncrement =()=>{
        dispatch(incrementCounter());

    };
    const handleDecrement =()=>{
        dispatch(decrementCounter());
    };
    const handleReset =()=>{
        dispatch(resetCounter());

    };
    return (
        <div>
            <h3>Count: {countNo}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Counter
