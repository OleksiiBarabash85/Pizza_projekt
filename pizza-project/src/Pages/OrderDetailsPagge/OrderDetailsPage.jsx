import { useSelector } from "react-redux";

function OrderDetailsPage(){

    const orderDetails = useSelector((state)=>state.orderSlice.orderDetailState);
    console.log(orderDetails&&orderDetails.pizzaToCount.id);


    return(
        <div>
            <p style={{color:'white'}}>OrderDetail</p>
        </div>
    )
}
export default OrderDetailsPage;