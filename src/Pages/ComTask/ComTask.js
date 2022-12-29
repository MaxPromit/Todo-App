import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const ComTask = ({ completeTasks, handlerDelete }) => {
  const { taskTitle, message, _id } = completeTasks;
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();
  

  const [comments, setComments] = useState([])
  const [load, setLoad] = useState(true)
 
  useEffect( ()=>{
    fetch(`https://to-do-list-server-xi.vercel.app/commentPost?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setComments(data))
        // .catch(err => console.log(err))
  },[user?.email, load])
    
    console.log('comment', comments)



  const handlerComment = (e) => {
    e.preventDefault();
    const commentField = e.target.commentField.value;
    const email = user.email;
   
    const post = {
        commentField,
        email
    }
    fetch('https://to-do-list-server-xi.vercel.app/commentPost', {
            method: 'PUT',
            headers: {
              'content-type': 'application/json'
            }, 
            body: JSON.stringify(post)
          })
          .then(res => res.json())
          .then(data => {
            if(data.acknowledged){
                setLoad(false);
              toast.success("Comment Added Successfully");
          }
            console.log(data)
          })
    
  };

  const handlerNotComplete = () => {
    navigate("/my-task");
  };
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
                onClick={() => handlerDelete(_id)}
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
            <p className="mt-2 text-gray-600 dark:text-gray-300">{message}</p>
          </div>

          <div className="md:flex lg:flex items-center justify-between mt-4">
            <form className="fifty md:flex lg:flex" onSubmit={handlerComment}>
              <div className="md:fifty lg:fifty">
                <input
                  name="commentField"
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  placeholder="Enter Comment!!!"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white btnColor hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Post
              </button>
            </form>

            <div className="flex items-center">
              <button
                onClick={handlerNotComplete}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Not Complete
                </span>
              </button>
            </div>
          </div>

          <div>
        <h4 className="text-xl mt-2 mb-1 font-semibold dark:text-white">Review: <span className="text-base">{comments.map(com => com.commentField)}</span> </h4>
     </div>

        </div>
      </div>
    </div>
  );
};

export default ComTask;
