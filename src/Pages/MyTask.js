import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Context/AuthProvider";
import ReviewsCart from "./ReviewsCart/ReviewsCart";

const MyTask = () => {

  const {user} = useContext(AuthContext);
  const [reviews, setReviews] = useState([])
 
  useEffect( ()=>{
    fetch(`http://localhost:4000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
        // .catch(err => console.log(err))
  },[user?.email])
    
    console.log('myyyy', reviews)


    const handlerDelete = id =>{
      const procedd = window.confirm('Are You Sure, To Delete This Item')
      if(procedd){
          fetch(`http://localhost:4000/reviews/${id}`, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
              console.log(data);
              if(data.deletedCount){
                  toast.success('Deleted Successfully')
                  const remaining = reviews.filter(ord => ord._id !== id)
                  setReviews(remaining)
              }
          })
      }
  }
  return (
    <div>
      <h2 className="text-2xl text-center font-semibold">My Task</h2>
     {reviews.map(review => <ReviewsCart review={review} key={review._id} handlerDelete={handlerDelete}></ReviewsCart>)}
    </div>
  );
};

export default MyTask;
