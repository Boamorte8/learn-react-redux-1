import * as actionsTypes from '../actions';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.STORE_RESULT:
      return {
          ...state,
          results: state.results.concat({id: new Date(), value: action.result})
        };
    case actionsTypes.DELETE_RESULT:
      // Works when items of array aren't objects
      // const newArray = [...state.results];
      // newArray.splice(action.id, 1);
      const updatedArray = state.results.filter(result => result.id !== action.id);
      return {
          ...state,
          results: updatedArray
        };
    default:
      return state;
  }
};

export default reducer;