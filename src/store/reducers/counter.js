import * as actionsTypes from '../actions';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.INCREMENT:
      return {
          ...state,
          counter: state.counter + 1,
        };
    case actionsTypes.DECREMENT:
      return {
          ...state,
          counter: state.counter - 1,
        };
    case actionsTypes.ADD_COUNTER:
      return {
          ...state,
          counter: state.counter + action.value,
        };
    case actionsTypes.REST_COUNTER:
      return {
          ...state,
          counter: state.counter - action.value,
        };
    default:
      return state;
  }
  // if (action.type === 'INCREMENT') {
  //   return {
  //     ...state,
  //     counter: state.counter + 1,
  //   };
  // }
  // if (action.type === 'DECREMENT') {
  //   return {
  //     ...state,
  //     counter: state.counter - 1,
  //   };
  // }
  // if (action.type === 'ADD_COUNTER') {
  //   return {
  //     ...state,
  //     counter: state.counter + action.value,
  //   };
  // }
  // if (action.type === 'REST_COUNTER') {
  //   return {
  //     ...state,
  //     counter: state.counter - action.value,
  //   };
  // }
  // return state;
};

export default reducer;