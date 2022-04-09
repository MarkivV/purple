import React, {useEffect, useState} from 'react';
import CardM from "../../Card/Card";
import axios from "axios";
import CardSpec from "../../Card/CardSpec";
import {ENV} from "../../env";

const Media = () => {

    const [name, setName] = useState([]);

    useEffect(()=>{
        window.scrollTo(0, 0)
        axios.get(ENV + '/api/get', {
            params: {
                id: 5
            }
        },{withCredentials: true})
            .then((response)=>{
                setName(response.data)
            })
    }, [])

    return(
        <CardSpec name={name}/>
    )
};

export default Media;
