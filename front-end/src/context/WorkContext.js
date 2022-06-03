import React, {useEffect, useState, createContext, useContext} from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const workContext = createContext();

const UseWorkProvider = ({children}) => {

    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(true);

    const url = 'http://localhost:3000'

    const fetchData = () => {
        axios.get(`${url}/api/work`)
            .then((result) => {
                console.log(result.data);
                setData(result.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setErr(err)
            })
    }

    const postData = (obj) => {
        axios.post(`${url}/api/work`,obj)
            .then((result) => {
                fetchData();
                navigate('/');
                console.log(result);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData()
    }, [])
    

    const values = {
        data,
        err,
        loading,
        postData
    }

    return (
        <workContext.Provider value={values}>
            {children}
        </workContext.Provider>
    )
}

const UseWorkContext = () => {
    return useContext(workContext)
}

export {
    UseWorkContext,
    UseWorkProvider
}