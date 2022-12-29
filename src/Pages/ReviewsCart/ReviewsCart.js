import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const ReviewsCart = ({review, handlerDelete}) => {
    const {message, taskTitle, _id} =  review;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()

    const handlerComplete = () =>{
        const email = user.email;
        const completeTask = {
            message,
            taskTitle,
            email
        }

        fetch('https://to-do-list-server-xi.vercel.app/complete-task', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            }, 
            body: JSON.stringify(completeTask)
          })
          .then(res => res.json())
          .then(data => {
            if(data.acknowledged){
              toast.success("Complete Section Added");
              navigate('/complete-task')
          }
            console.log(data)
          })
          .catch(err => console.error(err))
    }
    return (
        <div>
            
             <div className="flex justify-center">
        <div className="px-8 fifty my-3 p-4 mt-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">
              Mar 10, 2019
            </span>
            <div>
              <button
              onClick={()=>handlerDelete(_id)}
                className="btn btn-square btn-sm text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-2">
            <p
              className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
              tabIndex="0"
              role="link"
            >
              {taskTitle}
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {message}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <Link
              to={`/updateReview/${_id}`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
              tabIndex="0"
              role="link"
            >
              Edit
            </Link>

            <div className="flex items-center">
              <button onClick={handlerComplete} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Complete
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ReviewsCart;