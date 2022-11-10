import axios from "axios";

const API_URL = "http://localhost:5092/api/Home/login";
const login = (email,senha) => {

    return axios
        .post(API_URL, {
            id: 0,
            userName: "string",
            email: email,
            senha: senha,
            role: "string"
        }).then((response) => {
          
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    login,
    logout,
    getCurrentUser,
};
export default AuthService;