import React from "react"
import Image from "../../shared/Image"
import SignupForm from "../../components/Signup/SignupForm"

const Signup = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-center gap-4 md:flex-row md:gap-10 ">
      {/* <div className="md:1/2 max-w-lg"> */}
      <Image />
      {/* </div> */}
      <div className="h-[600px]  w-full">
        <SignupForm />
      </div>
    </div>
  )
}

export default Signup
