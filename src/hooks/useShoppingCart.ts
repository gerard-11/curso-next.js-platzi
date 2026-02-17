import { create } from 'zustand'


type Store = {
    cart: CartItem[]
    addToCart: (cartItem: CartItem) => void
    removeCartItem:(cartItem:CartItem)=>void
}

const saveArrayToLocalStorage=(array:CartItem[])=>{
    localStorage.setItem('cart', JSON.stringify(array))
}
export const useShoppingCart = create<Store>()((set) => ({
    cart: (()=>{
        if(typeof window === 'undefined'){
            return []
        }
        const cart=localStorage.getItem('cart')
        if(cart){
            return JSON.parse(cart)
        }
        return []
    })(),
    addToCart: (cartItem: CartItem) =>
        set((state) => {
       const currentCart = state.cart
            const itemsExists=currentCart.find((item:CartItem) => item.id === cartItem.id)
            const replaceExistingItem=currentCart.map((item:CartItem)=>{
                if (item.id === cartItem.id){
                    return cartItem
                }
                return item
            })

            if(itemsExists){
                saveArrayToLocalStorage(replaceExistingItem)
                return ({cart:replaceExistingItem})
            }
            const newCart = [...state.cart, cartItem]
            saveArrayToLocalStorage([...state.cart, cartItem])
            return ({cart:newCart})
    }),
    removeCartItem: (cartItem:CartItem) =>set((state)=>{
        const currentCart = state.cart
        const newCart=currentCart.filter((item)=> item.id !== cartItem.id)
        saveArrayToLocalStorage(newCart)
        return({cart:newCart})
    })
}))
