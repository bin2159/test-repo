import { useContext } from "react";
import {ChocoContext} from "../../context/ChocoContext";

const ChocolateList = () => {
  const Ctx = useContext(ChocoContext);
  const {
    chocoCtx: { chocos },
  } = Ctx;
  const CtCtx=useContext(ChocoContext)
  const {cartCtx:{addItem}}=CtCtx
  const addChocoCartHandler=(event)=>{
    const item_id=event.target.parentNode.id
    const option_id=event.target.id
    addItem(item_id,option_id)
  }
  return (
    <ul>
      {chocos.map(({ id, name, desc, price }) => (
        <li key={id} id={name}>
          {name}----{desc}----{price}
          <button id={1} onClick={addChocoCartHandler}>
            Buy 1
          </button>
          <button id={2} onClick={addChocoCartHandler}>
            Buy 2
          </button>
          <button id={3} onClick={addChocoCartHandler}>
            Buy 3
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ChocolateList;
