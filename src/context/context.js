import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState =  JSON.parse(localStorage.getItem('transactions')) || [{ amount: 500, category: 'Salary', type: 'Income', date: '2022-01-16', id: '44c68123-5b86-4cc8-b915-bb9e16cebe6a' }, { amount: 500, category: 'Travel', type: 'Expense', date: '2022-01-13', id: '365a4ebd-9892-4471-ad55-36077e4121a9' }];
export const TripExpenseTrackerContext = createContext(initialState);

export const Provider =({children }) =>{
    const [transactions, dispatch] = useReducer( contextReducer, initialState);

    const deleteTransaction = (id) => dispatch({type: 'DELETE_TRANSACTION', payload: id});
    const addTransaction = (transaction) => dispatch({type: 'ADD_TRANSACTION', payload: transaction});

    const balance  = transactions.reduce((acc , currVal) =>{
        return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount);
    }, 0);

    return (
        <TripExpenseTrackerContext.Provider value={{ 
            deleteTransaction , addTransaction, transactions, balance    
        }}>
            {children}
        </TripExpenseTrackerContext.Provider>
    )

}