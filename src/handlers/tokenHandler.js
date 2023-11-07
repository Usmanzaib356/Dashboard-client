import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"


export const useToken = ()=>{
    const token = Cookies.get('token')
    return token
}

export const useAuthenticator = ()=>{
    const token = useToken() 
    const navigate = useNavigate();

    const validateToken =  ()=> {
        if (!token) {
            alert("Please Login to Access this Page")
            navigate("/login")
            return false
        }
        return true
        
    }

     const getHeaders = ()=>{
        if (token) {
     return {Authorization : `Bearer ${token}`}       
        }
        return {}
    }
    return { validateToken, getHeaders };

}

 






// hellopo


// import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";

// export const useToken = () => {
//   return Cookies.get('token');
// }

// export const useAuth = () => {
//   const token = useToken();
//   const navigate = useNavigate();

//   const validateToken = () => {
//     if (!token) {
//       // Handle unauthorized access, e.g., by displaying a message or redirecting
//       // You can use a toast or a modal to inform the user.
//       // Example with redirection:
//       navigate("/login");
//       return false;
//     }
//     // Additional token validation logic can be added here
//     return true;
//   }

//   const getHeaders = () => {
//     if (token) {
//       return {
//         Authorization: `Bearer ${token}`,
//       };
//     }
//     return {};
//   }

//   return { validateToken, getHeaders };
// }