import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../Context/AuthProvider";
const Register = () => {
  const {register, formState: { errors }, handleSubmit} = useForm();
  const [signInError, setSingInError] = useState('');
  const {createUser, updateUser,googleLogin} = useContext(AuthContext);


  const googleProvider = new GoogleAuthProvider();

  const handlerSignup = (data) => {
    console.log(data);
    setSingInError('')
        createUser(data.email,data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            const userInfo = {
                displayName: data.name,
                photoURL : data.photo
            }
            toast.success('User Created Successfully')
            updateUser(userInfo)
            .then(()=>{

            })
            .catch(err => {
                console.log(err.message)
            })

        })
        .catch(err => {
            setSingInError(err.message)
            console.error(err)})

  };

  const handlerGoogle = () =>{
    googleLogin(googleProvider)
    .then(result =>{
        const user = result.user;
        console.log(user);
    })
    .catch(err=> console.error(err))
  }



  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80">
        <h2 className="text-4xl text-center">SignUp</h2>
        <form onSubmit={handleSubmit(handlerSignup)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name Field Required",
              })}
              className="input input-bordered w-full "
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              {...register("photo", {
                required: "Photo Field Required",
              })}
              className="input input-bordered w-full "
            />
            {errors.photo && (
              <p className="text-red-600">{errors.photo.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Field Requered",
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password Field Required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 charecter long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password Should Have A Special Charecter, Uppercase And A Number",
                },
              })}
              className="input input-bordered w-full"
            />

            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
            <input
              className="btn text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
              type="submit"
              value="SignUp"
            />
            {signInError && <p className='text-red-600'>{signInError}</p>}
            <p className="text-sm">
              Already have an account?
              <Link className="text-secondary font-semibold" to="/login">
                Please Login
              </Link>
            </p>
            <div className="divider">OR</div>
            <button onClick={handlerGoogle} className="btn text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full">
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
