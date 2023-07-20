import { combineReducers, configureStore } from "@reduxjs/toolkit"
import QuizSlice from "./slices/QuizSlice"

const reducer = combineReducers({
    quiz: QuizSlice
})

const store = configureStore({reducer})

export default store