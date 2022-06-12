import { useState} from "react";
import * as axios from 'axios';


function CancelOrder() {
    const [shipmentStatus, setShipmentStatus] = useState('');
    const [orderId, setOrderId] = useState('');
  

    const handleSubmit= async (e) => {
        const { data } = await axios.default.delete(`http://localhost:5000/api/shipments/${orderId}`)
            
           
        //should post in the notifications too
        if (data) {
            setShipmentStatus(data.shipment_status);
            
        }
    };


    return (
        <div className="container mx-auto px-6">
            <div className="md:flex md:items-center">
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2 lg:py-12">
                    <form>
                        <label>
                            Order ID:
                            <input type="text" value={orderId} onChange={(e)=>setOrderId(e.target.value)} />
                        </label>
                        <input type="button" value="Submit"  onClick={()=>handleSubmit()}/>
                    </form>
                    <div className="mt-12 flex flex-row justify-between ">
                    </div>
                    <div>
                        <span className="text-red-600 leading-7 font-bold mt-3">
                            {shipmentStatus}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CancelOrder;