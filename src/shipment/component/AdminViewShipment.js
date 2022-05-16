import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../../Admin/Footer";
import Header from "../../Admin/Header";
import ShipmentService from "../service/ShipmentService";

function AdminViewShipment() {
  let service = new ShipmentService();
  const [state, setState] = useState({ shipments: [] });
  useEffect(() => {
    service
      .viewShipment()
      .then((result) => setState({ shipments: result.data }))
      .catch((error) => alert(JSON.stringify(error)));
  },[]);
  return (
    <div>
      {sessionStorage.getItem("role") === "Administrator" ? (
        <div>
          <Header />
          <div
            style={{
              backgroundImage: "url(/mist.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "650px",
              backgroundRepeat: "no-repeat",
              backgroundColor: "transparent",
            }}
          >
            <div className="mt-3">
              {state.shipments.length > 0 ? (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>shipment Id</th>
                      <th>shipment company Name</th>
                      <th>shipment State</th>
                      <th> shipment Country</th>
                      <th> subLocation</th>
                      <th>Delete</th>
                      <th colSpan={2} align="center">
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      state.shipments.map(
                        (
                          as // start
                        ) => (
                          <tr>
                            <td>{as.shipmentId}</td>
                            <td>{as.shipmentCompanyName}</td>
                            <td>{as.shipmentState}</td>
                            <td>{as.shipmentCountry}</td>
                            <td>{as.subLocation}</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const confirmBox = window.confirm(
                                    "Deleted shipment cannot be restored.Do you wish to continue ?"
                                  );
                                  if (confirmBox === true) {
                                    service
                                      .deleteShipment(as.shipmentId)
                                      .then((result) => {
                                        alert(result.data);
                                      })
                                      .catch((error) => {
                                        alert(JSON.stringify(error));
                                      });
                                  }
                                }}
                              >
                                Delete
                              </button>
                            </td>
                            <td>
                              <Link
                                className="btn btn-warning"
                                to={{
                                  pathname: `/Admin/UpdateShipment/${as.shipmentId}`,
                                }}
                              >
                                Update
                              </Link>
                            </td>
                          </tr>
                        ) // end
                      ) // map closing
                    }
                  </tbody>
                </table>
              ) : (
                <span className="alert alert-danger">No shipment Present</span>
              )}
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div>
          <Header />
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">Warning</div>
            <div className="card-body">
              <h5 className="card-title">Unauthorized Access</h5>
              <p className="card-text">
                You should be a Administrator to access this page
              </p>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
export default AdminViewShipment;
