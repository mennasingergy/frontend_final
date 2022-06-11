import { useState} from "react";
import * as axios from 'axios';


function notifications() {
    const [email, setEmail] = useState('');
    const [orderId, setOrderId] = useState('');

    const handleSubmit= async (e) => {
        const { data } = await axios.default.post('https://anonynomous-notification-microservice.vercel.app/api/notifications')
           
        //should post in the notifications too
        if (data) {
            setEmail(data.email);
            setOrderId(data.order_id)
        }
    };
    return (
        <div className="container mx-auto px-6">
            <div className="md:flex md:items-center">
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2 lg:py-12">
                    
                    <div className="mt-12 flex flex-row justify-between ">
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}












    export default notifications;