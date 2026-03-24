const initialState = [];

export const cartReducer = (state = initialState, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [...state, { ...product, qty: 1 }];
      }

    case "DELETEITEM":
      const existProd = state.find((x) => x.id === product.id);

      if (existProd.qty === 1) {
        return state.filter((x) => x.id !== existProd.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};
