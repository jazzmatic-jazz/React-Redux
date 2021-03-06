import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from 'date-fns'
import axios from "axios"

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

//for async using thunk
const initialState={
    posts:[],
    status: 'idle', //'idle'| 'loading' |" succeeded"| 'failed'
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async()=>{
    try{
        const response = await axios.get(POST_URL)
        return[...response.data]
    }
    catch(err){
        return err.message
    }
})

//this is synchronous function 
// const initialState = [
//     {
//         id: '1',
//         title: 'Learning Redux Toolkit',
//         content: 'I\'ve heard good things',
//         date: sub(new Date(), { minutes: 10 }).toISOString(),
//         reactions : {
//             thumbsUp: 0,
//             wow: 0,
//             heart: 0,
//             rocket: 0,
//             coffee: 0,

//         }
//     },
//     {
//         id: '2', 
//         title: 'Slices,.....', 
//         content: 'The more I say slice, the more I want pizza.',
//         date: sub(new Date(), { minutes: 5 }).toISOString(),
//         reactions : {
//             thumbsUp: 0,
//             wow: 0,
//             heart: 0,
//             rocket: 0,
//             coffee: 0,

//         }
//     },
    
// ]


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.posts.push(action.payload)
            }, 
            //for every new prepare every oprtion should be written here
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions : {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                
                        }
                    }
                }
            }
        },
        // to catch the values of the rxns
        reactionAdded(state, action){
            const {postId, reaction} = action.payload
            const existingPost = state.posts.find(post=> post.id === postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts.posts
export const { postAdded, reactionAdded } = postsSlice.actions

export default postsSlice.reducer