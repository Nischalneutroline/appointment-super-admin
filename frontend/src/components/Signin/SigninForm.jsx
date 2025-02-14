import React from "react"
import { Link } from "react-router-dom"
import { toast } from "sonner"

// Icons
import { FaRegEye } from "react-icons/fa6"
import { FaRegEyeSlash } from "react-icons/fa6"

const SigninForm = () => {
  // Password visibility state
  const [showPassword, setShowPassword] = React.useState(false)

  // Form data state
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  })

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

    // Form Input validation
    if (!formData.email || !formData.password) {
      toast.error("Please enter your email and password!")
      return
    }

    // Success message
    toast.message("Logged in successfully!", {
      description: "Monday, January 3rd at 6:00pm",
    })

    // Clear form data
    setFormData({
      email: "",
      password: "",
    })
  }

  return (
    <div className="relative flex flex-col w-full  ">
      {/*------------ Heading */}
      <div>
        <p className="m-[-5px] text-[18px] tracking-wide font-[650] font-sans">
          SUPER ADMIN SINGIN
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

      <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
        {/* ++++++ Email */}
        <div className="flex flex-col gap-1">
          <label className="flex justify-start ml-2" htmlFor="email">
            Email
          </label>
          <input
            className="h-12 rounded-lg shadow-sm placeholder:text-sm pl-4 focus:outline-none focus:placeholder-transparent  "
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Enter your email"
          />
        </div>
        {/* +++++++++ Password */}
        <div className="flex flex-col gap-1">
          <label className="flex justify-start" htmlFor="password">
            Password
          </label>
          <div className="relative ">
            <input
              className="w-full h-12 rounded-lg shadow-sm placeholder:text-sm pl-4 focus:outline-none focus:placeholder-transparent "
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Enter your password"
            />
            {/* Eye Icon */}
            <span
              className="absolute top-4 right-2 opacity-50"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>
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
          to="/signin"
          className="text-blue-600 font-medium hover:underline"
        >
          Admin Sign in
        </Link>
      </div>
    </div>
  )
}

export default SigninForm
