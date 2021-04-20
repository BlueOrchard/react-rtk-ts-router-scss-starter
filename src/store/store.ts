import { configureStore } from '@reduxjs/toolkit'
import textReducer from './text/textSlice'

const store = configureStore({
    reducer: {
        text: textReducer
    }
})
export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {text: TextState}
export type AppDispatch = typeof store.dispatch