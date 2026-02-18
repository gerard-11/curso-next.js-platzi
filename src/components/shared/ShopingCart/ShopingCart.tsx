'use client'
import {FaShoppingCart} from 'react-icons/fa'
import styles from './ShopingCart.module.sass'
import {useShoppingCart} from "app/hooks/useShoppingCart";
import {useEffect, useState} from "react";
import {handleCreateCart} from "app/actions";
import {ShoppingCartItem} from "app/components/shared/ShopingCart/shoppingCartItem";


export default function ShoppingCart(){
    const { cart }=useShoppingCart()

    const [isOpen, setIsOpen] = useState(false)
    const [isBuying, setIsBuying] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const hasItems=cart.length > 0

    const handleOpen=()=> {
        if(hasItems){
            setIsOpen(!isOpen)
        }
    }

    const handleBuy=async ()=>{
        console.log(cart)

        try{
            setIsBuying(true)
            const checkoutUrl=await handleCreateCart(cart)
            if(!checkoutUrl) throw new Error("Error Creating checkout")
            window.localStorage.removeItem('cart')
            window.location.href=checkoutUrl
        }catch(e){
            console.log(e)
        }finally{
            setIsBuying(false)
        }

    }

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <div className={styles.ShoppingCart} >
            {hasItems&&(
                <span className={styles.ShoppingCart__counter}>
                {cart.length}
            </span>
            )}
            <button className={styles.ShoppingCart__cart} onClick={handleOpen}>
                <FaShoppingCart/>
            </button>

                {isOpen&& hasItems &&(
                    <div className={styles.ShoppingCart__items}>
                        <p className={styles.ShoppingCart__close} onClick={handleOpen}>
                            X
                        </p>
                        {
                            cart.map(item=> (
                                    <ShoppingCartItem item={item} key={item.id}/>
                                    )
                        )
                        }

                        <button className={styles.ShoppingCart__buyButton}
                                onClick={handleBuy}
                                disabled={isBuying}>
                            Buy
                        </button>
                    </div>
                )
                }


        </div>


)
}
