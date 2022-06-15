import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Jasmine Massey'},
    {id: '1', name: 'Lee Jong Suk'},
    {id: '2', name: 'User 3'},

]

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer