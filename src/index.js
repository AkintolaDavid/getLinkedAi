import ReactDOM from 'react-dom/client';
import Contact from './component/Contact/Contact';
import Register from './component/Register/Register';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/contact',
        element:<Contact/>
    },
    {
        path:'/register',
        element:<Register/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);
