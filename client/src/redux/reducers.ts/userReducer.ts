import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    isUserLoggedIn: boolean;
    signupLoading: boolean;
    signin: {
        loading: boolean;
        error: string | null;
        token: string | undefined;
        userId: string | undefined;
    };
    getUserLoading: boolean;
    editUserLoading: boolean;
    deleteUserLoading: boolean;
};

const INITIAL_STATE = {
    isUserLoggedIn: localStorage.getItem('userId') ? true : false,
    signup_loading: false,
    signin: {
        loading: false,
        error: null,
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId'),
    },
    getUserLoading: false,
    editUserLoading: false,
    deleteUseLoading: false,
} as unknown as InitialState;

const user = createSlice({
    name: 'USER REDUCER',
    initialState: INITIAL_STATE,
    reducers: {
        user_logged_in: (state) => {
            state.isUserLoggedIn = true;
        },
        user_logged_out: (state) => {
            state.isUserLoggedIn = false;
        },

        signup_start: (state) => {
            state.signupLoading = true;
        },
        signup_stop: (state) => {
            state.signupLoading = false;
        },

        signin_request: (state) => {
            state.signin.loading = true;
            state.signin.error = null;
            state.signin.token = undefined;
            state.signin.userId = undefined;
        },
        signin_success: (state, action) => {
            state.signin.loading = false;
            state.signin.error = null;
            state.signin.token = action.payload.token;
            state.signin.userId = action.payload.userId;
        },
        signin_failure: (state, action) => {
            state.signin.loading = false;
            state.signin.error = action.payload.error;
            state.signin.token = undefined;
            state.signin.userId = undefined;
        },

        getUserLoading_start: (state) => {
            state.getUserLoading = true;
        },
        getUserLoading_stop: (state) => {
            state.getUserLoading = false;
        },

        editUserLoading_start: (state) => {
            state.editUserLoading = true;
        },
        editUserLoading_stop: (state) => {
            state.editUserLoading = false;
        },

        deleteUserLoading_start: (state) => {
            state.deleteUserLoading = true;
        },
        deleteuserLoading_stop: (state) => {
            state.deleteUserLoading = false;
        },
    },
});

export const {
    user_logged_in,
    user_logged_out,
    signup_start,
    signup_stop,
    signin_request,
    signin_success,
    signin_failure,
    getUserLoading_start,
    getUserLoading_stop,
    editUserLoading_start,
    editUserLoading_stop,
    deleteUserLoading_start,
    deleteuserLoading_stop,
} = user.actions;
export default user.reducer;
