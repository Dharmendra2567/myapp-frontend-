const initialData = {
    count:100
}

const CounterReducer= ((state=initialData, action) =>{
    switch(action.type)
    {
    case "INCREASE_COUNT":
    return {count:++state.count}
    case "DECREASE_COUNT":
        return {cont:--state.count}
    
    default:
    return state
    }
})
export default CounterReducer