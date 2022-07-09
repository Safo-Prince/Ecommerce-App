import { createAction, createReducer } from "@reduxjs/toolkit";

/// action creators

export const deleteItem = createAction("deleteItem");
export const addItem = createAction(" addItem");

// export const addItem = (product) => ({
//   type: ADD_ITEM,
//   payload: {
//     product: product,
//   },
// });

// export const deleteItem = (product) => ({
//   type: DELETE_ITEM,
//   payload: {
//     product: product,
//   },
// });

///reducers

export default createReducer([], {
  [addItem.type]: (state, action) => {
    state.push(action.payload);
  },
  [deleteItem.type]: (state, action) => {
    state.filter((product) => product.id !== action.payload.id);
  },
});

// export default reducer = (state = [], action) => {
//   switch (action.type) {
//     case addItem.type:
//       return [...state, action.payload];

//     case deleteItem.type:
//       return state.filter(
//         (product) => product.id !== action.payload.product.id
//       );
//     default:
//       return state;
//   }
// };
