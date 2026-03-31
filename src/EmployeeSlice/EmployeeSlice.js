import { createSlice } from "@reduxjs/toolkit";

const initialState={
    employee : [],
    former: []
    
}

export const employeeSlice = createSlice({

    name: 'employee',
    initialState,
    reducers:{
        setEmp: (state, action)=>{
            
            state.employee=[...state.employee, action.payload]
            
        },
        updateEmp: (state, action)=>{
            const {employee, index}=action.payload
            state.employee[index]=employee
        },
        formerWorker: (state, action)=>{
            

const empIndex = action.payload
if (empIndex >=0 && empIndex < state.employee.length){

    const [removeEmp] = state.employee.splice(empIndex, 1)
    

    state.former.push(removeEmp)
    
}

        
        
        
}

        }
    }
)

export const {setEmp, updateEmp, formerWorker} = employeeSlice.actions

export default employeeSlice.reducer

