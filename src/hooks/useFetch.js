const {useEffect, useState} = require("react");

const API_KEY = process.env.REACT_APP_API_KEY;

const useFetch = (location) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
       const fetchData = async () => {
        setLoading(true);

        try{
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric&=`);
            const json = await res.json();

            setData(json);
            setLoading(false);
        }catch(error){
            setError(error);
            setLoading(false);
        }
       }

       fetchData();
    }, []);

    return { data, loading, error };
}

module.exports = useFetch;
