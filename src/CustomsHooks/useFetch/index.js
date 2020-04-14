import {useEffect, useState} from 'react';
import axios from 'axios';

export const useFetch = (url) => {
    const [state, setState] = useState({fetchedDatas : null, loading : true});

    useEffect(() => {
        setState({fetchedDatas : null, loading : true});
        axios.get(url)
            .then(res => {
                setState({fetchedDatas : res.data.data, loading : false})
            })
            .catch(err => console.log(err))
    }, [url])

    return state;
}