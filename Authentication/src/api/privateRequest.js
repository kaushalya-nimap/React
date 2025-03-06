import axios from "axios"
import {toast} from "react-hot-toast"
import { getToken,clearToken } from "../utils"

const privateRequest=axios.create({
    baseURL:"https://dummyjson.com",
})

const requestHandler=(request)=>{
    const token=getToken();
    if (!token) {
        toast.error("Unauthorized! No token found.");  // 🚨 Show error toast
        return Promise.reject("No token provided");    // ⛔ Prevents API request
    }

    console.log("token",token)
    request.headers.Authorization=`Bearer ${token}`
    return request
}
const responseErrorHandler = (error) => {
	//console.log("error", error);
	if (error.response) {
		const { status, message } = error.response;

		switch (status) {
			case 401:
				clearToken();
				toast.error("Token expired, please login");
				setTimeout(() => {
					window.location.href = "/";
				}, 300);
				break;
			case 400:
				toast.error(
					statusText ? statusText : statusText || "Invalid Value/ Bad Request"
				);
				break;
			case 403:
				toast.error(
					data.message ? data.message : message || "Access Denied/ Forbidden"
				);
				break;
			case 404:
				toast.error(statusText ? statusText : statusText || "Network Error");
				break;
			case 405:
				toast.error(data.message ? data.message : message || "Invalid Request");
				break;
			case 422:
				toast.error(data.message ? data.message : message || "Already Exists");
				break;
			case 500:
				toast.error(
					error.statusText
						? error.statusText
						: error.statusText || "Network Error"
				);
				break;
			case 504:
				toast.error(data.message ? data.message : message || "Network Error");
				break;
			default:
				toast.error(data.message ? data.message : message);
				break;
		}
	} else {
		toast.error(error?.message);
	}
};

const errorHandler = (error) => {
	return Promise.reject(error);
};
privateRequest.interceptors.request.use(requestHandler, errorHandler);

privateRequest.interceptors.response.use(
	(response) => response,
	responseErrorHandler
);

export default privateRequest;
