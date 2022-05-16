import axios from 'axios';


class AssetService{
    addAsset(asset) {
        return axios.post('http://localhost:8083/createAsset', asset);
    }
    viewAsset() {
        return axios.get('http://localhost:8083/viewAsset');
    }
    deleteAsset(id){
        return axios.delete(`http://localhost:8083/deleteAsset/${id}`);
    }
    findAssetById(id){
        return axios.get(`http://localhost:8083/searchAsset/`+id);
    }
    updateAsset(asset){
        return axios.put('http://localhost:8083/updateAsset', asset);
    }
}
export default AssetService;