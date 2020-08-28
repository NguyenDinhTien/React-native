const initialState = {
  list: [],
};

//const updateQuantity=item=>item.quantity?{...item,quantity:item.quantiy+1}:

const cartReducer = (state = initialState, action) => {
  const newList = [...state.list];

  switch (action.type) {
    case "ADD_CART_ITEM": {
      let item = newList.find((e) => e.item.id == action.payload.item.id);

      if(item==null)  newList.push(action.payload);
      else  item.quantity++;

      return {
        ...state,
        list: newList,
      };
    }

    case "UPDATE_CART_QUANTITY": {
      let item = newList.find((e) => e.item.id == action.payload.productId);

      //let increase = action.payload.quantity =="increase" ? item.quantity++:decrease=item.quantity>0 ?item.quantity--:"0";

      if (action.payload.quantity == "increase") {
        item.quantity++;
      } else if (item.quantity > 0 && action.payload.quantity == "decrease") {
        item.quantity--;
      }
      //   let newList=list.filter(e=>e.item.id!=action.payload.productId);
      //  console.log(item.quantity);
      //   console.log('==============',state);
      // //console.log('================',action.payload.quantity);
      return {
        ...state,
        list: newList,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
