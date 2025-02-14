import React from "react"
import { Link } from "react-router-dom"

const SignupForm = () => {
  return (
    <div className="relative flex flex-col w-full md:w-[420px] ">
      {/*------------ Heading */}
      <div className="flex flex-col gap-1">
        <p className="m-[-5px] text-[18px]  tracking-wide font-[650] font-sans">
          ADMIN SIGNUP
        </p>
        <p
          className=" text-[13px] tracking-normal font-[50] font-sans text-[#575757] "
          style={{
            fontStyle: "normal",
            fontWeight: "400",
          }}
        >
          Please enter your details.
        </p>
      </div>

      {/*------------- Form */}

      <form className="space-y-4 ">
        {/* +++++++++ Full Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm flex justify-start ml-2" htmlFor="name">
            Full Name
          </label>
          <input
            className="h-12 rounded-lg shadow-sm placeholder:text-sm pl-4 focus:outline-none focus:placeholder-transparent "
            type="name"
            name="name"
            id="name"
            placeholder="Enter your full name"
          />
        </div>

        {/* ++++++ Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm flex justify-start ml-2" htmlFor="email">
            Email
          </label>
          <input
            className="h-12 rounded-lg shadow-sm placeholder:text-sm pl-4 focus:outline-none focus:placeholder-transparent  "
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>

        {/* +++++++++ Phone no */}
        <div className="flex flex-col gap-1">
          <label className="text-sm flex justify-start ml-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="h-12 rounded-lg shadow-sm placeholder:text-sm pl-4 focus:outline-none focus:placeholder-transparent "
            type="phone"
            name="phone"
            id="phone"
            placeholder="(123) 456-7890)"
          />
        </div>
        {/* +++++++++ Password */}
        <div className="flex flex-col gap-1">
          <label className="text-sm flex justify-start ml-2" htmlFor="password">
            Password
          </label>
          <input
            className="h-12 rounded-lg shadow-sm placeholder:text-sm pl-4 focus:outline-none focus:placeholder-transparent "
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
        </div>
        {/* +++++++++ Confirm Password */}
        <div className="flex flex-col gap-1">
          <label
            className="text-sm flex justify-start ml-2"
            htmlFor="password1"
          >
            Confirm Password
          </label>
          <input
            className="h-12 rounded-lg shadow-sm placeholder:text-sm pl-4 focus:outline-none focus:placeholder-transparent "
            type="password"
            name="password1"
            id="password1"
            placeholder="Confrim password"
          />
        </div>

        {/* ++++++++++ Sign up Button */}
        <div>
          <button
            type="submit"
            className="h-12 w-full bg-blue-600 rounded-lg text-white hover:opacity-90 hover:cursor-pointer transition-all duration-200 shadow-sm active:scale-98 active:translate-y-1"
          >
            Sign up
          </button>
        </div>
      </form>

      {/* ---------- Aggrement || admin sign in */}
      <div className="space-y-4 mt-2">
        <p className="text-xs">
          By signing up, you agree to the Neutroline User Agreement, Privacy
          Policy, and Cookie Policy.
        </p>
        {/* ++++++++++ Sign up Link */}
        <div className="flex justify-center gap-2">
          <p>Already have an account?</p>
          <Link to="/login" className="text-blue-600 font-semibold">
            Sign in
          </Link>
        </div>
        {/* +++++++++++++ Admin Sign in */}
      </div>
    </div>
  )
}

export default SignupForm
