import React from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';


const UpdateReview = () => {
    const { id } = useParams();

    const handlerReviewSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const reviewUpdateMessage = form.message.value;
        console.log(id);

        fetch(`https://to-do-list-server-xi.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({message: reviewUpdateMessage})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success('Message Updated')
        })

    }
 
   
      
    
    return (
        <div>
        <h2 className='text-2xl font-semibold text-center my-3'>Update Review</h2>
        <form onSubmit={handlerReviewSubmit}>
        <div className='flex justify-center'>
        <textarea name='message' className="textarea textarea-info h-36 fifty" placeholder="Review"></textarea>
        </div>
        <div className='flex justify-center mb-3 mt-1'>
        <button className='btn text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ' type="submit">Submit</button>
        </div>
        </form>
        </div>
    );
};

export default UpdateReview;