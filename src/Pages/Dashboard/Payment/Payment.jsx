import { loadStripe } from "@stripe/stripe-js";
import Sectiontitle from "../../../Components/Sectiontitle/Sectiontitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <Sectiontitle heading="Payment" subHeading="Please pay to eat"></Sectiontitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;