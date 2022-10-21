import { FormWrapper } from "./FormWrapper";
type UserData={
  firstName:string,
  lastName:string,
  age:string,
}
type UserFormProps= UserData & {
  updateFields:(fields:Partial<UserData>)=>void
}
export function UserForm({firstName,lastName,age,updateFields}:UserFormProps){
  return (
    <FormWrapper title="User Details">
    <label>First Name</label>
    <input onChange={(e)=>updateFields({firstName:e.target.value})} type="text" value={firstName} autoFocus required />
    <label>Last Name</label>
    <input type="text" onChange={(e)=>updateFields({lastName:e.target.value})} value={lastName}  required />
    <label>Age</label>
    <input type="number" value={age} onChange={(e)=>updateFields({age:e.target.value})}  required min={1}/>
    </FormWrapper>
  )  
}