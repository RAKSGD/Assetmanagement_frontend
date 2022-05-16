import axios from "axios";

class UserSerivce {
    loginService(user) {
        
        return axios.get(`http://localhost:8083/login/${user.userId}/${user.userPassword}`);
    }
    SignUp(user){
        return axios.post(`http://localhost:8083/SignUp`,user)
    }
    viewUser(){
        return axios.get('http://localhost:8083/viewUser');
    }
    updateUser(user){
        return axios.put(`http://localhost:8083/updateUser`,user);
    }
    findUserById(userId){
        return axios.get(`http://localhost:8083/findUser/`+userId)
    }
    deleteUser(userId)
    {
        return axios.delete(`http://localhost:8083/delete/${userId}`);
    }
}
export default UserSerivce;