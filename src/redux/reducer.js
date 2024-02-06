

import {createSlice} from '@reduxjs/toolkit';
const initialState = {

    Data:[],
    userInfo: null
}
const cartReducer = createSlice({

    name:'Cart',
    initialState,
    reducers:{

        ADD: (state,action)=>{
            
                const item = state.Data.find((d)=> d._id === action.payload._id)
                if(item)
                {
                    item.quantity += action.payload.quantity 
                }
                else
                {

                    state.Data.push(action.payload)
                }
    
        },

    REMOVE: (state,action)=>{

                state.Data  = state.Data.filter((data)=>{
                    return data._id !== action.payload
                })


            },
            
    RESET: (state)=>{

            state.Data = []
    },

    INCREMENT: (state,action)=>{

                const item = state.Data.find((data)=>{
                    return data._id === action.payload._id
                })

                if(item)
                {
                    item.quantity ++
                }
            },

    DECREMENT: (state,action)=>{
        const item = state.Data.find((data)=>{
            return data._id === action.payload._id
        })
        if(item.quantity == 1)
        {
            item.quantity = 1
        }
        else
        {
            item.quantity --
        }
    },

    ADDUSER: (state,action)=>{
        state.userInfo = action.payload
    },
    REMOVEUSER: (state)=>{

        state.userInfo = null

    }
    }
    
})

export default cartReducer.reducer
export const {ADD,REMOVE,RESET,INCREMENT,DECREMENT,ADDUSER,REMOVEUSER} =  cartReducer.actions