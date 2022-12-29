import React from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const AddTask = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext)

    const handlerSubmit = (event) =>{
        event.preventDefault();
        const message = event.target.message.value;
        const photo = event.target.photo.value;
        const taskTitle = event.target.taskTitle.value;

        const email = user.email;

        const task = {
            taskTitle,
            message,
            photo,
            email
            
        }
        console.log(task);


        fetch('https://to-do-list-server-xi.vercel.app/add-task', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            }, 
            body: JSON.stringify(task)
          })
          .then(res => res.json())
          .then(data => {
            if(data.acknowledged){
              toast.success("Task Added Successfully")
              event.target.reset();
              navigate('/my-task')
          }
            console.log(data)
          })
          .catch(err => console.error(err))
    }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mt-3">
        Add Your Daily Task
      </h2>

      <div>
       <form onSubmit={handlerSubmit}>
      
            <label  htmlFor="task-title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input name='taskTitle' type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Task Title" required />
        
       <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <div className="">
          <div className="mb-3">
            <textarea
            name="message"
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm mb-3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div className="border w-64 mt-3">
            <input name="photo" type="file" />
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r mt-2 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          >
            Submit
          </button>
        </div>
       </form>
      </div>
    </div>
  );
};

export default AddTask;
