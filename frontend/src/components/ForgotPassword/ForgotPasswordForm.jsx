import React from "react"
import { Link } from "react-router-dom"
import { toast } from "sonner"

const ForgotPasswordForm = () => {
  const [formData, setFormData] = React.useState({
    email: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

    // Form Input validation
    if (!formData.email) {
      toast.error("Please enter your email!")
      return
    }

    // Success message
    toast.success("Reset Link has been sent to you email!")

    //Clear form data
    setFormData({ email: "" })
  }

  return (
    <div className="relative flex flex-col w-full md:w-[420px] ">
      {/*------------ Heading */}
      <div>
        <p className="m-[-5px] text-[18px]  tracking-wide font-[650] font-sans">
          FORGOT PASSWORD?
        </p>
        <p
          className="m-2.5 text-[13px] tracking-normal font-[50] font-sans text-[#575757] "
          style={{
            fontStyle: "normal",
            fontWeight: "400",
          }}
        >
          Please enter your email!
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

        {/* ++++++++++ Sign up Button */}
        <div>
          <button
            type="submit"
            className="h-12 w-full bg-blue-600 rounded-lg text-white hover:opacity-90 hover:cursor-pointer transition-all duration-200 shadow-sm active:scale-98 active:translate-y-1"
          >
            Reset
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

        {/* <Link
          to="/signup"
          className="text-blue-600 font-medium hover:underline"
        >
          Admin Sign in
        </Link> */}
      </div>
    </div>
  )
}

export default ForgotPasswordForm
