import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { gamesState, initialState,Fibs } from "../../../models/model";


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login ( state, action: PayloadAction<boolean>): gamesState { 
            return {
                ...state,
                user: action.payload
            }
        },
        setError( state, action: PayloadAction<string>) {
            return {
                ...state,
                err: action.payload
            }
        },
        setNumber(state, action: PayloadAction<number>) {
            return { ...state, num: action.payload };
        },
        setFibo(state, action: PayloadAction<Fibs>) {
            return {
                ...state,
                computedFibs: [
                  ...state.computedFibs,
                  { id: action.payload.id, nth: action.payload.nth, loading: action.payload.loading },
                ],
              }
        },
        updateFibo(state, action: PayloadAction<Fibs>) {
            if(state.computedFibs.findIndex((item) => item.id === action.payload.id) > -1) { 
                return {
                    ...state,
                        computedFibs: state.computedFibs.map( el => {
                            if(el.id !== action.payload.id) {
                                return el;
                            } else {
                                return {
                                    ...el,
                                    ...action.payload
                                }
                            }
                        })
                };
            }
        }
    }
});

export const { 
    login,setError,setNumber,setFibo,updateFibo
} = authSlice.actions;

export default authSlice.reducer;