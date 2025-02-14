import React from "react"
import Image from "../../shared/Image"
import SigninForm from "../../components/Signin/SigninForm"

const Login = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-center gap-4 md:flex-row md:gap-10 ">
      <div className="w-1/2 h-[70%] ">
        <Image />
      </div>
      <div className="w-1/2">
        <SigninForm />
      </div>
    </div>
  )
}

export default Login
