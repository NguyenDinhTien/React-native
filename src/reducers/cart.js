const initialState = {
  list: [],
};

const cartReducer = (state = initialState, action) => {

  let newList=[...state.list]
  switch (action.type) {
    case "ADD_CART_ITEM": {
      const newList = [...state.list];
      newList.push(action.payload);

      return {
        ...state,
        list: newList,
      };
    }

    case "SET_QUANTITY_ITEM": {
      const newActiveId = action.payload.id;
      return {
        ...state,
        activeId: newActiveId,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
