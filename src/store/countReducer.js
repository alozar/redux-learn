const defaultCount = { count: 0 };

export const INCREMENT = 'INCREMENT';
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ASYNC_DECREMENT = 'ASYNC_DECREMENT';

export const countReducer = (state = defaultCount, action) => {
  console.log({ mes: "countReducer", state, action });
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export const incrementCreator = (payload) => ({type: INCREMENT, payload});
export const asyncIncrementCreator = (payload) => ({type: ASYNC_INCREMENT, payload});
export const decrementCreator = (payload) => ({type: DECREMENT, payload});
export const asyncDecrementCreator = (payload) => ({type: ASYNC_DECREMENT, payload});