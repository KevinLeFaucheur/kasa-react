import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
        if(!url) return;
        
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
        
            setData(data);
            setLoading(false)
        }
        fetchData();

    }, [url]);

    return { isLoading, data };
};