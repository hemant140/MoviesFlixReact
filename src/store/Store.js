import { configureStore } from '@reduxjs/toolkit'
import HomeSlice from './Homeslice'
export const store = configureStore({
    reducer: {
        home: HomeSlice
    },
})