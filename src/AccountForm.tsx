import { FormWrapper } from "./FormWrapper";
type AccountData={
  email:string,
  password:string
}
type  AccountFormProps= AccountData & {
  updateFields:(fielsd:Partial<AccountData>)=>void
 
}
export function AccountForm({email,password,updateFields}:AccountFormProps){
    return (
      <FormWrapper title="Account">
      <label>Email</label>
      <input onChange={(e)=>updateFields({email:e.target.value})} value={email} type="email" autoFocus required />
      <label>Password</label>
      <input type="password"  onChange={(e)=>updateFields({password:e.target.value})} value={password} required />
      </FormWrapper>
    )  
  }