import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const {register, formState: { errors },handleSubmit} = useForm();
    const [loginError, setLoginError] = useState('');
    const {signIn,googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const handlerLogin = (data) =>{
        console.log(data);
        setLoginError('')
    signIn(data.email,data.password)
    .then(result => {
        const user = result.user;
        console.log(user)
        navigate(from, {replace: true})
    })
    .catch(err => {
        setLoginError(err.message)
        console.error(err)})
    }

    const handlerGoogle = () =>{
        googleLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate('/')
        })
        .catch(err=> console.error(err))
      }
    return (
        <div className="flex justify-center items-center h-screen">
      <div className="fourty">
        <h2 className="text-2xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handlerLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address Required" })}
              type="email"
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password Field Required",
                minLength: {
                  value: 6,
                  message: "Password Must Be 6 Charecter Long",
                },
              })}
              type="password"
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text">Forget Password</span>
            </label>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <input
              className="btn text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
              type="submit"
              value="Login"
            />
            {loginError && <p className="text-red-600">{loginError}</p>}
            <p className="text-sm">
              New To Today's Task?{" "}
              <Link className="text-secondary font-semibold" to="/register">
                Create New Account
              </Link>
            </p>
            <div className="divider">OR</div>
            <button onClick={handlerGoogle} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full">
              CONTINUE WITH GOOGLE
            </button>
          </div>
          
        </form>
      </div>
    </div>
    );
};

export default Login;