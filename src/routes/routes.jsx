import App from "../App";
import Home from "../pages/home";


const routes = [

    {
        path: "/",
        element: <App />,
        children: [

            {
                path: "/", 
                element: <Home/>
            }
        ]
     
    
    }
]

export default routes