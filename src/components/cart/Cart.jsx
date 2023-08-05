import { useContext } from "react"
import Modal from "../overlay/Modal"
import { ChocoContext } from "../../context/ChocoContext"

const Cart = ({showCart}) => {
    const Ctctx=useContext(ChocoContext)
    const {cartCtx:{items,addItem}}=Ctctx
    const addItemHandler=(event)=>{
        const id=event.target.parentNode.id
        const option=event.target.id
        addItem(id,option)
    }
  return (
    <Modal showCart={showCart}>
        <ul>
    {items.map(({id,name,price,quantity})=>(
        <li key={id} id={name}>
           <span>{name}---------</span>
           <span>{quantity}----------</span>
           <span>{price}</span>
           <button id={-1} onClick={addItemHandler}>-</button>
           <button id={1} onClick={addItemHandler}>+</button>
        </li>
    ))}
        </ul>
        <div>
            <span>Total Amount</span>
            <span> 13$</span>
        </div>
        <div>
            <button onClick={showCart}>Close</button>
            <button>Order</button>
        </div>
    </Modal>
  )
}

export default Cart