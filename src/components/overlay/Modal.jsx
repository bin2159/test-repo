import  ReactDOM  from 'react-dom'
import Styles from './Modal.module.css'
const Backdrop=({showCart})=>{
    return(<div className={Styles.backdrop} onClick={showCart}></div>)
}
const ModalOverlay=({children})=>{
    return(<div className={Styles['modal-overlay']}>{children}</div>)
}
const portalElement=document.getElementById('overlay')
const Modal = ({children,showCart}) => {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop showCart={showCart}/>,portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>,portalElement)}
    </>
  )
}

export default Modal