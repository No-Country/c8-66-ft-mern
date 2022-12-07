import { configureStore } from '@reduxjs/toolkit'
import userLogin from './slices/userLogin.slice'


export default configureStore({
  reducer: {
    userLogin

}})