import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [cart, refetch] = useCart();
    const navigate = useNavigate();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice])


    return (
        <form >
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;