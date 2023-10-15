import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CryptoPriceProps {
    id: string;
}

const CryptoPrice: React.FC<CryptoPriceProps> = ({ id }) => {
    const [price, setPrice] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
    const apiUrl = `https://pro-api.coinmarketcap.com/v1/tools/price-conversion`;
    const apiKey = process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY;
    const amount = 1;
    const convert = 'USD';

    const config = {
        headers: {
        'X-CMC_PRO_API_KEY': apiKey,
        },
        params: {
        id,
        amount,
        convert,
        },
    };

    axios.get(apiUrl, config)
        .then(response => {
        if (response.data.data) {
            setPrice(response.data.data.quote[convert].price);
        }
        setLoading(false);
        })
        .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
        });
    }, [id]);

    return (
    <div>
        {loading ? <p>Loading...</p> : <p>Current price for 1 unit of {id} in USD: ${price}</p>}
    </div>
);
};

export default CryptoPrice;
