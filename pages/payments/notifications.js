import { useState} from "react";
import * as axios from 'axios';

// function Product(props) {
//     // const [email, setemail] = useState('');
//     // const [orderId, setOrderId] = useState('');
//     // const[message,setMessage]=useState('')
//     const {
//      email,
//      order_id,
  
//     } = props;


function notifications(props) {
    const [email, setEmail] = useState('');
    const [orderId, setOrderId] = useState('');


    const handleSubmit= async (e) => {
        const { data } = await axios.default.post('http://localhost:4000/api/notifications',{
            email,
            orderId,
        
        }
       
           
        //should post in the notifications too
        // if (data) {
        //     setEmail(data.email);
        //     setOrderId(data.order_id)
        // }
    )};
    return (
        <div className="container mx-auto px-6">
            <div className="md:flex md:items-center">
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2 lg:py-12">
                <form>
                        <label>
                            Order ID:
                            <input type="text" value={orderId} onChange={(e)=>setOrderId(e.target.value)} />
                        </label>
                        <label>
                            Email
                            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </label>
                   <input type="button" value="Submit"  onClick={()=>handleSubmit()}/>
                    </form>
                    {/* <div className="mt-12 flex flex-row justify-between ">
                    </div>
                    <form>
                        <label>
                            Email
                            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </label>
                        <input type="button" value="Submit"  onClick={()=>handleSubmit()}/>
                    </form>
                    <div>
                        
                    </div> */}
                </div>
            </div>
        </div>
    );
}












    export default notifications;