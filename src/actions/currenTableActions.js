export const getTable = (table)=>{
    return {
        type: "GET_TABLE",
        payload: table,
    }
}

export const addOrder = (food) =>{
    return {
        type: "ADD_ORDER",
        payload: food,
    }
}

export const increaseOrder = (orderID)=>{
    return {
        type: "INCREASE_ORDER",
        payload:orderID,
    }
}

export const decreaseOrder = (orderID)=>{
    return {
        type: "DECREASE_ORDER",
        payload:  orderID,
    }
}

export const delOrder = (orderID) =>{
    return {
        type: "DELETE_ORDER",
        payload: orderID
    }
}

export const noteOrder = (data)=>{
    return {
        type: "NOTE_ORDER",
        payload: data,
    }
}
