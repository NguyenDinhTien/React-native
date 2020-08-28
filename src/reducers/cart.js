const initialState = {
  list: [],
};

//const updateQuantity=item=>item.quantity?{...item,quantity:item.quantiy+1}:

const cartReducer = (state = initialState, action) => {
  const list = [...state.list];

  switch (action.type) {
    case "ADD_CART_ITEM": {
      list.push(action.payload);
      return {
        ...state,
        list: list,
      };
    }

    case "UPDATE_CART_QUANTITY": {
      let item = list.find((e) => e.item.id == action.payload.productId);
      if (action.payload.quantity == "increase") {
        item.quantity++;
      } else {
        item.quantity--;
      }
      //let newList=list.filter(e=>e.item.id!=action.payload.productId);
     //console.log(item.quantity);
      //console.log('==============',state);
      // // //console.log('================',action.payload.quantity);
      return {
        ...state,
        list: list,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
