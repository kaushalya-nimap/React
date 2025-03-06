export const getToken=()=>{
    return localStorage.getItem("authToken")
}
export const clearToken = () => {
	localStorage.removeItem("authToken");
};