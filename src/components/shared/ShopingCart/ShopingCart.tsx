'use client'
import {FaShoppingCart} from 'react-icons/fa'
import {useState} from "react";
import styles from './ShopingCart.module.sass'


export const ShoppingCart=()=>{
    const [ countItems, setCountItems] = useState(0)

    return (
        <button className={styles.ShoppingCart}>
            <span className={styles.ShoppingCart__counter}>{countItems}</span>
            <FaShoppingCart />
        </button>

)
}
