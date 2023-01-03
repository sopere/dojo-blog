import { useState, useEffect } from "react";

//lower case for custom hooks
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        //AbortController to abort fetch
        const abortCont = new AbortController();

        setTimeout(() => {
            //url is http://localhost:8000/blogs
            //url is being watched by json-server using npx json-server --watch data/db.json --port 8000
            //data folder, db.json file, blogs reference in file
            fetch(url, {signal: abortCont.signal})
                .then(result => {
                    if(!result.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return result.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    if ( err.name === 'AbortError') {
                        console.log('fetch aborted');
                    }
                    else {
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 1000);

        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;