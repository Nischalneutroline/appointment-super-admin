import React from "react"
import { Link } from "react-router-dom"

const SigninForm = () => {
  return (
    <div className="relative flex flex-col w-full md:w-[420px] ">
      {/*------------ Heading */}
      <div>
        <p className="m-[-5px] text-[18px]  tracking-wide font-[650] font-sans">
          ADMIN SINGIN
        </p>
        <p
          className="m-2.5 text-[13px] tracking-normal font-[50] font-sans text-[#575757] "
          style={{
            fontStyle: "normal",
            fontWeight: "400",
          }}
        >
          Welcome! Please enter your details.
        </p>
      </div>

      {/*------------- Form */}

      <form className="space-y-6 mt-6">
        {/* ++++++ Email */}
        <div className="flex flex-col gap-1">
          <label className="flex justify-start ml-2" htmlFor="email">
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
        {/* +++++++++ Password */}
        <div className="flex flex-col gap-1">
          <label className="flex justify-start" htmlFor="password">
            Password
          </label>
          <input
            className="h-12 rounded-lg shadow-sm placeholder:text-sm pl-4 focus:outline-none focus:placeholder-transparent "
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        {/* +++++++++ Remeber && Forgot Password */}
        <div className="flex justify-between mt-2 ">
          <div className="flex gap-2 ">
            <input type="checkbox" id="remember" />
            <label
              htmlFor="remember"
              className="text-gray-500 text-sm cursor-pointer"
            >
              Remeber me
            </label>
          </div>
          <Link to={"/forgot-password"}>
            <p className="text-sm text-gray-500 hover:text-black text-right">
              Forgot password?
            </p>
          </Link>
        </div>

        {/* ++++++++++ Sign up Button */}

        <div>
          <button
            type="submit"
            className="h-12 w-full bg-blue-600 rounded-lg text-white hover:opacity-90 hover:cursor-pointer transition-all duration-200 shadow-sm active:scale-98 active:translate-y-1"
          >
            Sign in
          </button>
        </div>
      </form>

      {/* ---------- Link to sign up || admin sign in */}
      <div className="space-y-4 mt-5 ">
        {/* ++++++++++ Sign up Link */}
        <div className="flex justify-center gap-2">
          <p>Don't have an account?</p>
          <Link to="/signup" className="text-blue-600 font-semibold">
            Sign up
          </Link>
        </div>

        {/* +++++++++++++ Admin Sign in */}

        <Link
          to="/signup"
          className="text-blue-600 font-medium hover:underline"
        >
          Admin Sign in
        </Link>
      </div>
    </div>
  )
}

export default SigninForm
