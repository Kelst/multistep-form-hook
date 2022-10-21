import { FormWrapper } from "./FormWrapper";
type AddressData={
  street:string,
  city:string,
  state:string,
  zip:string
}

type AddressFormProps=AddressData&{
  updateFields:(fields:Partial<AddressData>)=>void
}
export function AddressForm({street,city,state,zip,updateFields}:AddressFormProps){
    return (
      <FormWrapper title="Address">
      <label>Street</label>
      <input onChange={(e)=>updateFields({street:e.target.value})} type="text" value={street} autoFocus required />
      <label>City</label>
      <input onChange={(e)=>updateFields({city:e.target.value})} type="text" value={city} required />
      <label>State</label>
      <input type="text" onChange={(e)=>updateFields({state:e.target.value})} value={state}  required />
      <label>Zip</label>
      <input  required onChange={(e)=>updateFields({zip:e.target.value})} value={zip} type="text"   />
      
      </FormWrapper>
    )  
  }