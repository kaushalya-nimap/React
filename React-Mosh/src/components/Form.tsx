import React, { FormEvent, useRef, useState } from "react";
import{FieldValues, useForm} from "react-hook-form"
const Form = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    //console.log(register('name'))
    console.log(errors)
  
  const onSubmit = (data:FieldValues) => {
   console.log(data)
  };
  
  return (
    <form onSubmit={handleSubmit(data=>console.log(data))}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input 
            { ...register("name",{required:true,minLength:3})}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type==='required'&&<p>The field is required</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Age
        </label>
        <input 
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
