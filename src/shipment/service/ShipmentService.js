import axios from "axios";


class ShipmentService{
    addShipment( shipment){
        return axios.post('http://localhost:8083/createShipment',shipment)
    }
    viewShipment(){
        return axios.get('http://localhost:8083/viewShipment')
    }
    deleteShipment(id){
        return axios.delete(`http://localhost:8083/deleteShipment/${id}`)
    }
    findShipmentById(id){
      return axios.get(`http://localhost:8083/searchShipment/`+id)
    }
    updateShipment(shipment){
        return axios.put(`http://localhost:8083/UpdateShipment`,shipment)
    }
}
export default ShipmentService;