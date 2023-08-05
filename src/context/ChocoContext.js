import { createContext, useState } from "react";

export const ChocoContext = createContext({});

const ChocoContextProvider = ({ children }) => {
    const [choco,setChoco]=useState([{id:1,name:"eclairs",desc:"very Nice",price:12.34}])
    const [item,setItem]=useState([])
    const addChocoHandler=(newItem)=>{
        setChoco(prev=>[...prev,newItem])
    }
    const removeChocoHandler=()=>{

    }
    const addCartHandler=(id,option)=>{
        setItem(prev=>{
            const duplicateItemIndex=prev.findIndex(prevItem=>prevItem.name===id) 
            if(duplicateItemIndex!==-1){
                const updatedItem={...prev[duplicateItemIndex],quantity:prev[duplicateItemIndex].quantity+Number(option)}
                console.log(updatedItem.quantity)
                if(updatedItem.quantity===0){
                    const newList=prev.filter(prevItem=>prevItem.name!==id)
                    return newList
                }
                const newList=[...prev]
                newList[duplicateItemIndex]=updatedItem
                return newList
            
            }
            else{
                const chocoArr=choco.filter(item=>item.name===id)
                const [chocoItem]=chocoArr
                chocoItem.quantity=Number(1)
                chocoItem.id=Math.random()
                console.log(id,chocoItem)
                return [...prev,chocoItem]
            }
        })
    }
    const removeCartHandler=()=>[

    ]
    const chocoCtx={
        chocos:choco,
        addChoco:addChocoHandler,
        removeChoco:removeChocoHandler
    }
    const cartCtx={
        items:item,
        addItem:addCartHandler,
        removeItem:removeCartHandler
    }
  return <ChocoContext.Provider value={{chocoCtx,cartCtx}}>{children}</ChocoContext.Provider>;
};

export default ChocoContextProvider;
