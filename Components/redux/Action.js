import { ADD_TO_CART,REMOVE_FROM_CART, USER_LIST } from "./Constant";


export function addToCart (item) {
    return{
        type: ADD_TO_CART,
        data : item
    }
}
export function removefromCart (item) {
    return{
        type: REMOVE_FROM_CART,
        data : item
    }
}
export default function getUserlist(){
    return{
        type:USER_LIST
    }
}