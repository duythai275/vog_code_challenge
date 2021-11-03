import {
    FETCH_ALL_POSTS,
    ADD_A_POST,
    EDIT_A_POST,
    DELETE_A_POST,
    CHANGE_OPEN_EDITOR
} from "./type";

export const getAllPosts = posts => ({
    type: FETCH_ALL_POSTS,
    payload: posts
})

export const addPost = post => ({
    type: ADD_A_POST,
    payload: post
})

export const editPost = post => ({
    type: EDIT_A_POST,
    payload: post
})

export const deletePost = post => ({
    type: DELETE_A_POST,
    payload: post
})

export const changeOpenEditor = open => ({
    type: CHANGE_OPEN_EDITOR,
    payload: open
})