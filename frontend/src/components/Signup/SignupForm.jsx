// import React from "react"
// import { Link } from "react-router-dom"
// import { toast } from "sonner"

// // Icons
// import { FaRegEye } from "react-icons/fa6"
// import { FaRegEyeSlash } from "react-icons/fa6"

// const SignupForm = () => {
//   // Password visibility state
//   const [showPassword, setShowPassword] = React.useState(false)

//   // Form data state
//   const [formData, setFormData] = React.useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   })

//   // Submit handler
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(formData)

//     // Password validation
//     if (formData.password !== formData.confirmPassword) {
//       toast.error("Password does not match!")
//       return
//     }

//     // Form Input validation
//     if (
//       !formData.email ||
//       !formData.fullName ||
//       !formData.phone ||
//       !formData.password ||
//       !formData.confirmPassword
//     ) {
//       toast.error("Please enter all details!")
//       return
//     }

//     // Success message
//     toast.success("Account has been created successfully!")

//     // Clear form data
//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       password: "",
//       confirmPassword: "",
//     })
//   }

//   return (
//     <div className="relative flex flex-col w-full ">
//       {/*------------ Heading */}
//       <div className="flex flex-col gap-1">
//         <p className="m-[-5px] text-[18px]  tracking-wide font-[650] font-sans">
//           SUPER ADMIN SIGNUP
//         </p>
//         <p
//           className=" text-[13px] tracking-normal font-[50] font-sans text-[#575757] "
//           style={{
//             fontStyle: "normal",
//             fontWeight: "400",
//           }}
//         >
//           Please enter your details!
//         </p>
//       </div>

//       {/*------------- Form */}

//       <form className="space-y-4" onSubmit={handleSubmit}>
//         {/* +++++++++ Full Name */}
//         <div className="flex flex-col gap-1">
//           <label className="text-sm flex justify-start ml-2" htmlFor="name">
//             Full Name
//           </label>
//           <input
//             className="h-12 rounded-lg shadow-sm placeholder:text-sm pl-4 focus:outline-none focus:placeholder-transparent "
//             type="name"
//             name="name"
//             id="name"
//             value={formData.fullName}
//             onChange={(e) =>
//               setFormData({ ...formData, fullName: e.target.value })
//             }
//             placeholder="Enter your full name"
//           />
//         </div>

//         {/* ++++++ Email */}
//         <div className="flex flex-col gap-1">
//           <label className="text-sm flex justify-start ml-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="h-12 rounded-lg shadow-sm placeholder:text-sm pl-4 focus:outline-none focus:placeholder-transparent  "
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             placeholder="Enter your email"
//           />
//         </div>

//         {/* +++++++++ Phone no */}
//         <div className="flex flex-col gap-1">
//           <label className="text-sm flex justify-start ml-2" htmlFor="phone">
//             Phone
//           </label>
//           <input
//             className="h-12 rounded-lg shadow-sm placeholder:text-sm pl-4 focus:outline-none focus:placeholder-transparent "
//             type="phone"
//             name="phone"
//             id="phone"
//             value={formData.phone}
//             onChange={(e) =>
//               setFormData({ ...formData, phone: e.target.value })
//             }
//             placeholder="(123) 456-7890)"
//           />
//         </div>
//         {/* +++++++++ Password */}
//         <div className="flex flex-col gap-1">
//           <label className="flex justify-start" htmlFor="password">
//             Password
//           </label>
//           <div className="relative ">
//             <input
//               className="w-full h-12 rounded-lg shadow-sm placeholder:text-sm pl-4 focus:outline-none focus:placeholder-transparent "
//               type={showPassword ? "text" : "password"}
//               name="password"
//               id="password"
//               value={formData.password}
//               onChange={(e) =>
//                 setFormData({ ...formData, password: e.target.value })
//               }
//               placeholder="Enter your password"
//             />
//             {/* Eye Icon */}
//             <span
//               className="absolute top-4 right-2 opacity-50"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
//             </span>
//           </div>
//         </div>
//         {/* +++++++++ Confirm Password */}
//         <div className="flex flex-col gap-1">
//           <label
//             className="text-sm flex justify-start ml-2"
//             htmlFor="confirmPassword"
//           >
//             Confirm Password
//           </label>
//           <input
//             className="h-12 rounded-lg shadow-sm placeholder:text-sm pl-4 focus:outline-none focus:placeholder-transparent "
//             type="password"
//             name="confirmPassword"
//             id="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={(e) =>
//               setFormData({ ...formData, confirmPassword: e.target.value })
//             }
//             placeholder="Confrim password"
//           />
//         </div>

//         {/* ++++++++++ Sign up Button */}
//         <div>
//           <button
//             type="submit"
//             className="h-12 w-full bg-blue-600 rounded-lg text-white hover:opacity-90 hover:cursor-pointer transition-all duration-200 shadow-sm active:scale-98 active:translate-y-1"
//           >
//             Sign up
//           </button>
//         </div>
//       </form>

//       {/* ---------- Aggrement || admin sign in */}
//       <div className="space-y-4 mt-2">
//         <p className="text-xs">
//           By signing up, you agree to the Neutroline User Agreement, Privacy
//           Policy, and Cookie Policy.
//         </p>
//         {/* ++++++++++ Sign up Link */}
//         <div className="flex justify-center gap-2">
//           <p>Already have an account?</p>
//           <Link to="/signin" className="text-blue-600 font-semibold">
//             Sign in
//           </Link>
//         </div>
//         {/* +++++++++++++ Admin Sign in */}
//         <Link
//           to="/signin"
//           className="text-blue-600 font-medium hover:underline"
//         >
//           Admin Sign in
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default SignupForm

import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { toast } from "sonner"

// Icons
import { FaRegEye } from "react-icons/fa6"
import { FaRegEyeSlash } from "react-icons/fa6"

// React Hook Form
import { useForm } from "react-hook-form"

const SignupForm = () => {
  // Password visibility state
  const [showPassword, setShowPassword] = React.useState(false)

  // React hook form
  // handleSubmit() is the callback for customer handleSubmit function
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" })

  // Submit handler
  const onSubmit = (data) => {
    console.log(data)

    console.log(errors)
    // Success message
    toast.success("Account has been created successfully!")
  }

  useEffect(() => {
    errors
  }, [errors])

  return (
    <div className="relative flex flex-col w-full ">
      {/*------------ Heading */}
      <div className="flex flex-col gap-1">
        <p className="m-[-5px] text-[18px]  tracking-wide font-[650] font-sans">
          SUPER ADMIN SIGNUP
        </p>
        <p
          className=" text-[13px] tracking-normal font-[50] font-sans text-[#575757] "
          style={{
            fontStyle: "normal",
            fontWeight: "400",
          }}
        >
          Please enter your details!
        </p>
      </div>

      {/*------------- Form */}

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
            {...register("fullName", { required: "Full Name is required!" })}
            placeholder="Enter your full name"
          />
          {/* Error */}
          {errors.fullName && (
            <p className="text-xs text-red-600 text-start pl-2">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* ++++++ Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm flex justify-start ml-2" htmlFor="email">
            Email
          </label>
          <input
            className="h-12 rounded-lg shadow-sm placeholder:text-sm pl-4 focus:outline-none focus:placeholder-transparent  "
            type="email"
            name="email"
            id="email"
            {...register("email", { required: "Email is required!" })}
            placeholder="Enter your email"
          />
          {/* Error Message */}
          {errors.email && (
            <p className="text-xs text-red-600 text-start pl-2">
              {errors.email.message}
            </p>
          )}
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
            {...register("phone", { required: "Phone is required!" })}
            placeholder="(123) 456-7890)"
          />
          {/* Error Message */}
          {errors.phone && (
            <p className="text-xs text-red-600 text-start pl-2">
              {errors.phone.message}
            </p>
          )}
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
              {...register("password", {
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long!",
                },
                required: "Password is required!",
              })}
              placeholder="Enter your password"
            />
            {/* Eye Icon */}
            <span
              className="absolute top-4 right-2 opacity-50"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>

            {/* Error Message */}
            {errors.password && (
              <p className="text-xs text-red-600 text-start pl-2">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        {/* +++++++++ Confirm Password */}
        <div className="flex flex-col gap-1">
          <label
            className="text-sm flex justify-start ml-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="h-12 rounded-lg shadow-sm placeholder:text-sm pl-4 focus:outline-none focus:placeholder-transparent "
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            {...register("confirmPassword", {
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long!",
              },
              required: "Confirm Password is required!",
            })}
            placeholder="Confrim password"
          />
          {/* Error Message */}
          {errors.confirmPassword && (
            <p className="text-xs text-red-600 text-start pl-2">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* ++++++++++ Sign up Button */}
        <div>
          <button
            type="submit"
            className="h-12 w-full bg-blue-600 rounded-lg text-white hover:opacity-90 hover:cursor-pointer transition-all duration-200 shadow-sm active:scale-98 active:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isValid}
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
          <Link to="/signin" className="text-blue-600 font-semibold">
            Sign in
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

export default SignupForm
