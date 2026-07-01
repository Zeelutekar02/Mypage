import React, {createContext, useState} from "react"
// import CreateRead from "./CreateRead"
import DeleteUpdate from "./DeleteUpdate"

export const CrudContext = createContext()
const CRUDuseContext = () => {

    const [list, setList] = useState([])
  return (
    <div>
        <CrudContext.Provider value={{list, setList}}>
            {/* <CreateRead />  */}
            <DeleteUpdate />
        </CrudContext.Provider>      
    </div>
  )
}

export default CRUDuseContext
