

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface DataFetcherProps {
    url: string;
}

const DataFetcher: ({url}: { url: any }) => any[] = ({ url }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url);
            if (response.status === 200) {
                setData(response.data);
            }
        };

        fetchData();
    }, [url]);

    return data;
};

export default DataFetcher;