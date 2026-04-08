import axios from "axios";

const instance = axios.create({
    baseURL : 'https://fakestoreapi.com'
})


export const productsApi = {
    async getAllProducts(dispatch){
       const response = await instance.get('/products')
       
       dispatch({type : 'get-all', payload : response.data})
    }
}

