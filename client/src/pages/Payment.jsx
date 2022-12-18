import { useEffect, useState } from "react";

import axios from "axios";
import { Button, Stack, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ACTION_PURCHASE } from "../redux/cart/cart.actions";
import { getUserData } from "../redux/auth/auth.actions";



function RazorPay() {

    const {userData, token, isAuth } = useSelector((store) => store.auth);
      
  const navigate = useNavigate()
  const toast = useToast()
   const dispatch = useDispatch()
 
  const [loading, setLoading] = useState(false);
  let total = userData.cart.reduce((a, b) => a + +b.price, 0).toFixed(0); 


  const fetchOrder = async () => {
    try {
      const data = await axios.get("http://localhost:8080/payment/list-order")
      .then((res)=> {
        dispatch(ACTION_PURCHASE(token.email))
        .then((res)=> {
            dispatch(getUserData(token.email))
            
              toast({
                title: 'Payment Successfull.',
                description: "Thank You For Shopping.",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
      
            navigate("/OrderSuccessfull")
        })
      })

     

      console.log(data);
    } catch (er) {
      console.log(er.message);
    }
  };



 // useEffect(() => {
 //   fetchOrder()
 //     .then((res) => {
 //       console.log(res);
 //     })
 //     .catch((er) => console.log(er.message));
 // }, []);




  const handlePay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("RazorPay SDK failed to load");
    };
    script.onload = async () => {
     
        try {
        setLoading(true);
        const result = await axios.post("http://localhost:8080/payment/create-order", {
          amount: total + "00"
        });

        const { amount, id: orderId, currency } = result.data.order;
        console.log(result.data, "from handle pay ");

        const getkey = await axios.get(
          "http://localhost:8080/payment/get-razorpay-key"
        );
        const key = getkey.data;
        console.log(key.key, "second console inside handlepay");
        const options = {
          key: key.key,
          amount: amount.toString(),
          currency: currency,
          name: "GYM Bro",
          description: "FIRST RAZOR PAY",
          order_id: orderId,
          handler: async function (response) {
            const result = await axios.post("http://localhost:8080/payment/pay-order", {
              amount: amount,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpay0rderId: response.razorpay_order_id,
              razorpaysighature: response.razorpay_signature,
            });
            
            fetchOrder();
          },
          prefill: {
            name: "GYM Bro",
            email: "nayanph1@gmail.com",
            contact: "9481574558",
          },
        };
        setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (er) {
        alert(er);
        setLoading(false);
      }
    };
    document.body.appendChild(script);
  };
  return (
    <Stack zIndex={500}>
     
        <Button colorScheme={"orange"} onClick={handlePay}>PAY</Button>{" "}
        {loading && <h3>...Loading please wait</h3>}
  
    </Stack>
  );
}

export default RazorPay;