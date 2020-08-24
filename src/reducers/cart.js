
const initialState = {
  list: [],
  activeId: null,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART_ITEM': {
      const newList = [...state.list];
      newList.push(action.payload);

      return {
        ...state,
        list: newList,
      };
    }

    case 'SET_ACTIVE_HOBBY': {
      const newActiveId = action.payload.id;
      return {
        ...state,
        activeId: newActiveId,
      };
    }

    default:
      return state;
  }
}

export default cartReducer;