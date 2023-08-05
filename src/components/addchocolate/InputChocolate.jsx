import { useContext , useState} from "react"
import {ChocoContext} from "../../context/ChocoContext"

const InputChocolate = () => {
    const [details,setDetails]=useState({})
    const ctx=useContext(ChocoContext)
    const {chocoCtx:{addChoco}}=ctx

    const detailHandler=(event)=>{
        const name=event.target.name
        setDetails(prev=>({...prev,[name]:event.target.value,id:Math.random()}))
    }
    const addChocoHandler=(event)=>{
        event.preventDefault()
        addChoco(details)
    }
  return (
    <form className="form" onSubmit={addChocoHandler}>
        <label>Chocolate Name</label>
        <input type="text" name='name' onChange={detailHandler}/>
        <label>Desc</label>
        <input type="text" name='desc' onChange={detailHandler}/>
        <label>Price</label>
        <input type="number" name='price' onChange={detailHandler}/>
        <button type="submit">Add</button>
    </form>
  )
}

export default InputChocolate