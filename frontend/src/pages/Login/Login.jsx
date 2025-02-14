import React from "react"
import Image from "../../shared/Image"
import SigninForm from "../../components/Signin/SigninForm"

const Login = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-center gap-4 md:flex-row md:gap-10 ">
      {/* <div className="md:1/2 max-w-lg"> */}
      <Image />
      {/* </div> */}
      {/* <div className="w-[80%] md:w-1/2 max-w-lg"> */}
      <SigninForm />
      {/* </div> */}
    </div>
  )
}

export default Login
