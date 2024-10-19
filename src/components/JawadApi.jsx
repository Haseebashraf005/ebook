import React, { useEffect } from 'react'

const JawadApi = () => {
    useEffect(() => {
        const getProductDetail = async () => {
            try {
                const response = await fetch(`http://13.48.25.249:8019/api/Addresses?LatitudeFrom=51.7827193&LatitudeTo=51.7881549&LongitudeFrom=-1.2797264&LongitudeTo=-1.2629787`);

                // const response = await fetch(`http://13.48.25.249:8019/api/Addresses/test`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data); // Set the product data in the state
            } catch (error) {
                alert(error.message); // Set any errors in the state
            }
        };
        
        getProductDetail(); // Call the async function
    }, []);
    
  return (
    <div>JawadApi</div>
  )
}

export default JawadApi