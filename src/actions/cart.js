export const addCartItem = (item) => {
  return {
    type: "ADD_CART_ITEM",
    payload: {
      item,
      quantity:1
    }
  };
};

export const updateQuantity =(productId,quantity)=>{
  return{
    type:"UPDATE_CART_QUANTITY",
    payload:{
      productId,
      quantity:quantity
    }
  }
};

