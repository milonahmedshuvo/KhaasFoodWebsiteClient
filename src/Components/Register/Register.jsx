import React,{ useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { DiclareContext } from "../AuthProviderApp/AuthProviderApp";
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const { userCreate }= useContext(DiclareContext)
  



  const  handleUserRegister = (data) => {
         console.log(data)

          userCreate(data.email, data.password)
         .then((res)=> {
          console.log(res)
         
          toast.success("Succesful user create !!")
         })
         .catch((err) => {
          console.log(err)
          toast.error("Filed user create !!")
         })
  }




  return (
    <div className="w-1/3 mx-auto my-32">
         <h1 className="text-xl text-center my-6"> Register </h1>




         <form onSubmit={handleSubmit(handleUserRegister)}>


         <div>
              <input type="email" {...register("email", {required: "not find email"})} placeholder="Your Email" id="" className="input input-bordered w-full mt-2"/>

              {errors.email && <span className="text-red-400"> {errors.email.message}</span>}
          </div>



          <div>
            <input type="password" {...register("password", {required: "not valid password"} )} placeholder="Your New Password" className="input input-bordered w-full mt-2" />
            {errors.password && <span className="text-red-300"> {errors.password.message} </span>}
          </div>






          <input type="submit" value="Submit" className="bg-green-400 py-2 px-3 font-semibold w-full rounded my-6 "  />
 
         </form>
    </div>
  )
}

export default Register;

