import React,{useReducer} from 'react';
import counterReducer from './counterReducer';
import Child from './Child';

const Child2 = () => {

    let [state, dispatch] = useReducer(counterReducer,1)

    console.log(state)
    return(
        <div>
            <h2>This is Second CHild Using CounterReducer</h2>
            <h3>Value of reducer is: {state}</h3>
          <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    )
}
export default Child2;