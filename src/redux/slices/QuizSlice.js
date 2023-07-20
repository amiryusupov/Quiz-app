import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    loading: false,
    quizList: []
}
const QuizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {}
})

export default QuizSlice.reducer