export const ADD = (item)=>{

    return {
        type:'ADD_TO_CART',
        data: item
    }

}

export const REMOVE = (id)=>{

    return {
        type:'REMOVE_CART',
        data: id
    }

}

export const RESET = ()=>{

    return {
        type:'RESET_CART',
        
    }

}

export const INCREMENT = (qty)=>{

    return {
        type:'INCREMENT_QTY',
        data: qty
        
    }

}
// export const DECREMENT = (qty)=>{

//     return {
//         type:'DECREMENT_QTY',
//         data:qty
//     }

// }



