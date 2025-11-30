import { reactive } from 'vue'

export const shoppingBag = reactive({
  products: [],
  addProduct(productID){
    const productInCart = this.products.find((product) => product.ID === productID);
    !productInCart ?  this.products.push({ID: productID, amount: 1}) :  productInCart.amount++;
  },
  clearShoppingBag(){
    this.products.length = 0
  },
})
