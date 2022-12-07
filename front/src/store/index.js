import { configureStore } from '@reduxjs/toolkit'
import userLogin from './slices/userLogin.slice'
import getShipping from './slices/shipping.slice'


export default configureStore({
  reducer: {
    userLogin,
    getShipping

}})