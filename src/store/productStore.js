import { createStore } from "redux";

const productReducer = (
  state = {
    products: (() => {
      const products = localStorage.getItem("products");
      if (products) {
        const parsedProducts = JSON.parse(products);
        for (let product of parsedProducts) {
          for (let comment of product.comments) {
            comment.date = new Date(comment.date);
          }
        }
        return parsedProducts;
      }
      return [];
    })(),
    view: "product-list-page",
    id: undefined,
  },
  action
) => {
  if (action.type == "add") {
    const temp = [...state.products];
    temp.unshift(action.product);
    return { ...state, products: temp };
  } else if (action.type == "edit") {
    const temp = [...state.products];
    const productToEdit = temp.filter((product) => product.id == action.id)[0];
    const indexOfProductToEdit = temp.indexOf(productToEdit);
    temp[indexOfProductToEdit] = {
      id: productToEdit.id,
      name: action.editedProduct.name,
      imageUrl: action.editedProduct.imageUrl,
      count: action.editedProduct.count,
      size: {
        width: action.editedProduct.size.width,
        height: action.editedProduct.size.height,
      },
      weight: action.editedProduct.weight,
      comments: productToEdit.comments,
    };
    return {
      ...state,
      products: temp,
    };
  } else if (action.type == "delete") {
    return {
      ...state,
      products: state.products.filter((product) => product.id != action.id),
    };
  } else if (action.type == "change-view") {
    return {
      ...state,
      view: action.view,
      id: action.id,
    };
  } else if (action.type == "add-comment") {
    const temp = [...state.products];
    const productToEdit = temp.filter((product) => product.id == action.id)[0];
    const indexOfProductToEdit = temp.indexOf(productToEdit);
    const tempComents = [...productToEdit.comments];
    tempComents.unshift(action.comment);
    temp[indexOfProductToEdit] = {
      ...productToEdit,
      comments: tempComents,
    };
    return { ...state, products: temp };
  } else if (action.type == "delete-comment") {
    const temp = [...state.products];
    const productToEdit = temp.filter(
      (product) => product.id == action.productId
    )[0];
    const indexOfProductToEdit = temp.indexOf(productToEdit);
    const tempComents = [...productToEdit.comments];
    temp[indexOfProductToEdit] = {
      ...productToEdit,
      comments: tempComents.filter((comment) => comment.id != action.id),
    };
    return { ...state, products: temp };
  }
  return state;
};

const productStore = createStore(productReducer);

const pushToLocalStorage = () => {
  const products = productStore.getState().products;
  localStorage.setItem("products", JSON.stringify(products));
  console.log("data was pushed");
};

productStore.subscribe(pushToLocalStorage);

export default productStore;
