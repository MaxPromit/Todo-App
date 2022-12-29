import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Register from "../../Login/Register";
import AddTask from "../../Pages/AddTask";
import CompleteTask from "../../Pages/CompleteTask";
import Home from "../../Pages/Home";
import MyTask from "../../Pages/MyTask";
import UpdateReview from "../../Pages/UpdataReview/UpdateReview";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add-task',
                element: <AddTask></AddTask>
            },
            {
                path: '/my-task',
                element: <MyTask></MyTask>
            },
            {
                path: '/complete-task',
                element: <CompleteTask></CompleteTask>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/updateReview',
                element: <UpdateReview></UpdateReview>
            },
            {
                path: '/updateReview/:id',
                element: <UpdateReview></UpdateReview>,
            },

        ]
    }
])