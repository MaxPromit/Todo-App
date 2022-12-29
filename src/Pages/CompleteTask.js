import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Context/AuthProvider";
import ComTask from "./ComTask/ComTask";

const CompleteTask = () => {
  const { user } = useContext(AuthContext);
  const [completeTasks, setCompleteTasks] = useState([]);

  useEffect(() => {
    fetch(`https://to-do-list-server-xi.vercel.app/complete-task?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCompleteTasks(data));
    // .catch(err => console.log(err))
  }, [user?.email]);

  console.log("complete", completeTasks);

  const handlerDelete = (id) => {
    const procedd = window.confirm("Are You Sure, To Delete This Item");
    if (procedd) {
      fetch(`https://to-do-list-server-xi.vercel.app/complete-task/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            toast.success("Deleted Successfully");
            const remaining = completeTasks.filter((ord) => ord._id !== id);
            setCompleteTasks(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center">Complete Task</h2>
      <div>
        {completeTasks.map((completeTasks) => (
          <ComTask
            completeTasks={completeTasks}
            key={completeTasks._id}
            handlerDelete={handlerDelete}
          ></ComTask>
        ))}
      </div>
    </div>
  );
};

export default CompleteTask;
