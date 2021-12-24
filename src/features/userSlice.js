import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
    name: 'user',
    initialState: {
        user: {
            photoUrl: ''
        }
    },

    reducers: {
        login: (state, action) => {
            return {...state, user: action.payload}
        },
        loggout: (state) => {
            return {...state, user: {photoUrl: ''}}
        }
    }
})

export const {  login, loggout } = slice.actions

export const selectUser = (state) => state.user.user

export default slice.reducer