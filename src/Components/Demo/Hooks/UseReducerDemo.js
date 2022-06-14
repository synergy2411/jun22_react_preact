import React, { useReducer } from 'react';

const intiialState = {
    counter: 0,
    result : []
}

const reducerFn = (state, action) => {
    switch (action.type) {
        case "INCREMENT": return { ...state, counter : state.counter + 1}
        case "DECREMENT": return { ...state, counter : state.counter - 1}
        case "ADD_COUNTER" : return { ...state, counter : state.counter + action.payload}   
        case "SUBTRACT_COUNTER" : return { ...state, counter : state.counter - action.payload } 
        case "STORE_RESULT" : return {...state, result : [state.counter, ...state.result] }
        
        default: return state;
            
    }
}

const UseReducerDemo = () => {

    const [state, dispatchFn] = useReducer(reducerFn, intiialState)

    return (
        <React.Fragment>
            <p className='display-4 text-center'>Counter : {state.counter}</p>
            <div className='row'>
                <div className='col-8 offset-2 text-center'>
                    <button className='btn btn-primary'
                        onClick={() => dispatchFn({ type: "INCREMENT" })}>
                        Increment</button>

                    <button className='btn btn-info'
                        onClick={() => dispatchFn({type : "DECREMENT"})}>Decrement</button>
                    
                    <button className='btn btn-success'
                        onClick={() => dispatchFn({type : "ADD_COUNTER", payload : 10})}>Add 10</button>
                    
                    <button className='btn btn-warning'
                        onClick={() => dispatchFn({type : "SUBTRACT_COUNTER", payload : 5})}>Subtract 5</button>

                    <hr />
                    <div className='row'>
                        <div className='col-4 offset-4'>
                            <button className='btn btn-secondary'
                                onClick={() => dispatchFn({type : "STORE_RESULT"})}>Store Result</button>
                                <br/>
                                <ul className='list-group'>
                                    {state.result.map(res => <li className='list-group-item'>{res}</li>)}
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default UseReducerDemo;