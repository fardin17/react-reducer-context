import {configureStore} from '@reduxjs/toolkit'
import countSlice from './countSlice'

export const store2 = configureStore({reducer:{count:countSlice}})