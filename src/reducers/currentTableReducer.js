const currentTableReducer = (state={} ,action)=>{
    switch(action.type){
        case "GET_TABLE": {
            state = {...action.payload}
            return state;
        }

        case "ADD_ORDER": {
            let bill = {...state}
            let food = action.payload
            if(bill.hasOwnProperty('Orders')){
                let Orders = bill.Orders
                // check duplicate
                if(Orders.find(order=>order._id === food._id)){
                    let index = Orders.findIndex(order=>order._id === food._id)
                    Orders[index].quantity += 1
                    Orders[index].totalPrice = Orders[index].price * Orders[index].quantity;
                }else{
                    food.done = 0;
                    food.quantity = 1;
                    food.served = 0;
                    food.totalPrice = food.price;
                    food.note = "";
                    Orders.push(food)
                }
            }else{
                food.done = 0;
                food.quantity = 1;
                food.served = 0;
                food.totalPrice = food.price;
                food.note = "";
                bill.Orders= [food]
            }
            return bill
        }

        case "INCREASE_ORDER":{
            let Orders = [...state.Orders]
            let orderID = action.payload
            let index = Orders.findIndex(order=>order._id === orderID)
            Orders[index].quantity += 1
            Orders[index].totalPrice = Orders[index].price * Orders[index].quantity;
            return {
                ...state,
                Orders,
            }
        }

        case "DECREASE_ORDER":{
            let Orders = [...state.Orders]
            let orderID = action.payload
            let index = Orders.findIndex(order=>order._id === orderID)
            Orders[index].quantity -= 1
            Orders[index].totalPrice = Orders[index].price * Orders[index].quantity;
            return {
                ...state,
                Orders,
            }
        }

        case "DELETE_ORDER": {
            let Orders = [...state.Orders];
            let orderID = action.payload
            let filterOrders = Orders.filter(order=>order._id !== orderID)
            return{
                ...state,
                Orders:filterOrders
            }
        }

        case "NOTE_ORDER": {
            let Orders = [...state.Orders]
            let orderID = action.payload.orderId
            let index = Orders.findIndex(order=>order._id === orderID)
            if(index >= 0){
                Orders[index].note = action.payload.textNote
            }
            return {
                ...state,
                Orders
            }
        }
       
        default: {
            return state;
        }
           
    }
}

export default currentTableReducer;