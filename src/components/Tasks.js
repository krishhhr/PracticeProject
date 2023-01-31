import React, { useState , useEffect} from 'react'

const Tasks=()=>{
    const[count,setCount]=useState(0);  //count=0
    // useEffect(()=>{
    //     alert("Component Mounted");
    //     return()=>{
    //         alert("Component Unmounted")
    //     }
    // },[])
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    const zero=()=>{
        setCount(0)
    }
    return(
        <div>
            <p>Current count: {count}</p>
            <button className='mx-1' onClick={decrement}>Decrement</button>
            <button className='mx-1' onClick={zero}>Reset</button>
            <button className='mx-1' onClick={increment}>Increment</button>
        </div>
    )
}

export default Tasks