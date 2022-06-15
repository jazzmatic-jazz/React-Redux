import  { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
// import counterReducer from '../features/Counter/CounterSlice'

//counter
// export const store = configureStore({
//     reducer:{
//         counter : counterReducer,
//     },
// })

export const store = configureStore({
    reducer:{
        posts: postsReducer,
        users: usersReducer,
    },
})