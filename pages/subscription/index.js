import { useEffect } from 'react';
import { usePaystackPayment } from 'react-paystack';



const Paystack = ({ amount, email }) => {

    const config = {
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_3220830a672fb0111314c909df6a8192e1cc7c3b',
    };

    const onSuccess = (reference) => {
        if (typeof window !== 'undefined') {
            window.ReactNativeWebView.postMessage("successful")
        }
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
    };

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }
    const initializePayment = usePaystackPayment(config);
    return (
        <div className=''>
            <button onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Click here to continue</button>
        </div>
    );
};


export default () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("message", message => {
                console.log("message")
            })
        }
    }, [])
    return (
        <div>
            <Paystack amount={2000} email={"sdamilolajoseph@gmail.com"} />
        </div>
    )
}