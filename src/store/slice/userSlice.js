import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name : "userSlice",
    initialState : {
        vipUsers : []
    },
    reducers : {
        setVIPUser(state,action){
            if(state.vipUsers.indexOf(action.payload) == -1){
                state.vipUsers = [...state.vipUsers, action.payload]
            }
        },
        removeVIPUser(state,action){
            if(state.vipUsers.indexOf(action.payload) != -1){
                state.vipUsers = state.vipUsers.filter((i) => i != action.payload )
            }
        }
    }
});

export const { setVIPUser, removeVIPUser } = userSlice.actions;
export const userReducer = userSlice.reducer;


const contentInitState = {
    users : [],
    posts : [],
    comments : [],
    selectedPost : null
}

const contentSlice = createSlice({
    name : "contentSlice",
    initialState : contentInitState,
    reducers : {
        storeUsers(state,action){
            state.users = action.payload;
        },
        storePosts(state,action){
            state.posts = action.payload;
        },
        storeComments(state,action){
            state.comments = action.payload;
        },
        storePost(state,action){
            state.selectedPost = action.payload;
        },
        reset(){
            return contentInitState;
        }
    }
});

export const {reset, storeUsers , storePosts, storeComments, storePost  } = contentSlice.actions;

export const contentReducer = contentSlice.reducer;