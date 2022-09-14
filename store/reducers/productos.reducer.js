import { PRODUCTOS } from '../../data/productos';
import {SELECT_PRODUCT, FILTERED_PRODUCT} from '../actions/product.action'


const initialState ={
    productos: PRODUCTOS,
    filteredProduct: [],
    selected: null
}

const ProductosReducer = (state= initialState, action)=>{
        switch (action.type) {
            case SELECT_PRODUCT:
                return {
                    ...state, selected: state.productos.find(el=>el.id === action.productID)
                }
            case FILTERED_PRODUCT:
                return {
                    ...state, filteredProduct: state.productos.filter(el=>el.category === action.categoryID)
                }            
            default:
                return state
        
    }
}

export default ProductosReducer;