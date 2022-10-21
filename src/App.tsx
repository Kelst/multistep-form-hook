import { FormEvent, useState } from 'react'
import { AccountForm } from './AccountForm'
import { AddressForm } from './AddressForm'
import FinishFields from './FinishFields'
import { useMultiStepForm } from './useMultistepForm'
import { UserForm } from './UserForm'
import { FormData } from './types'
const INIT_DATA:FormData={
  firstName:"",
  lastName:"",
  age:"",
  street:"",
  city:"",
  state:"",
  zip:"",
  email:"",
  password:""
}
function App() {
 function updateFields(fields:Partial<FormData>) {
  setData(prev=>{
    return {...prev,...fields}
  })
 }
  const [data,setData]=useState(INIT_DATA)
  const {steps,curentIndex,step,isFirstStep,back,next,isLastStep}=useMultiStepForm([
  <UserForm {...data} updateFields={updateFields}/>,
  <AddressForm {...data} updateFields={updateFields}/>,
  <AccountForm {...data} updateFields={updateFields}/>])
  function onSubmit(e:FormEvent) {
    e.preventDefault()
    next()
    
  }
  return (
    <div style={{position:'relative',
    background:"white",
    border:"1px solid black",
    padding:"2rem",
    borderRadius:".5rem",
    fontFamily:"Arial",
    width:"400px",
    margin :"0 auto"
    }}>
     <form onSubmit={onSubmit}>
      { !(curentIndex+1>steps.length)&&
      <div style={{position:"absolute",top:".5rem",right:".5rem"}}>
        {  curentIndex+1}/{steps.length}
      </div>}
      <div>{!(curentIndex+1>steps.length)?step:<FinishFields data={data}/>}</div>
      {
        !(curentIndex+1>steps.length)&& <div style={{marginTop:"1rem",display:"flex",gap:".5rem",justifyContent:"flex-end"}}>
       { isFirstStep && <button type='button' onClick={back}>Back</button>}
        <button type='submit' >{isLastStep?"Finish":"Next"}</button>
      </div>
      }
     
     </form>
    </div>
  )
}

export default App
