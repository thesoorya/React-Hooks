import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type){
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'double':
            return {count: state.count * 2}
    }
}

const Reducer = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => dispatch({type: 'increment'})} >Increment</button><br />
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button><br />
            <button onClick={() => dispatch({type: 'double'})}>Double</button>
        </div>
    );
};

export default Reducer;
