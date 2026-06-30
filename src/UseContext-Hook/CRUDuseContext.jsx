import React, {createContext, useState} from "react"
import CreateRead from "./CreateRead"

export const CrudContext = createContext()
const CRUDuseContext = () => {

    const [list, setList] = useState([])
  return (
    <div>
        <CrudContext value={{list, setList}}>
            <CreateRead /> 
        </CrudContext>      
    </div>
  )
}

export default CRUDuseContext
