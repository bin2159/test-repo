import { useContext } from 'react'
import Styles from './Header.module.css'
import { ChocoContext } from '../../context/ChocoContext'
const Header = ({showCart}) => {
  const ctCtx=useContext(ChocoContext)
  const {cartCtx:{items}}=ctCtx
  const totalItem=items.reduce((acc,curr)=>{return acc+Number(curr.quantity)},0)
  return ( 
    <header className={Styles.header}>
        <h3 className={Styles['store-name']}>
            Chocolate Store
        </h3>
        <button className={Styles.cart} onClick={showCart}>Your Cart {totalItem}</button>
    </header>
  )
}
export default Header