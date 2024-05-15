import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    //baseURL: 'https://apis-server.vercel.app/',
    baseURL: 'localhost:5555/',
    withCredentials: true
})

const useAxiosSecure = () => {
    const {lognOut} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error.response)
            if(error.response.status === 401 || error.response.status === 403){
                console.log('logout the user')
                lognOut()
                .then(()=>{
                    navigate('/login')
                })
                .catch(error => console.log(error))
            }
        })
    }, [])
    return axiosSecure;
}

export default useAxiosSecure