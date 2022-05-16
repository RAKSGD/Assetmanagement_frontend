import axios from "axios";
class MaintainService{
    viewMaintainRecords(){
        return axios.get("http://localhost:8083/viewMaintain");

    }
}
export default MaintainService;