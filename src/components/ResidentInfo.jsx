import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({resident}) => {

    const [ info, setInfo ] = useState({})

    useEffect(() => {
        axios
            .get(resident)
            .then(res => setInfo(res.data))
    },[])
    const circle=()=>{

        if(info.status==='Dead'){
            return <div className='circle red'></div>
        }else if(info.status==='Alive'){
            return <div className='circle green'></div>
        }else{
            return <div className='circle grey'></div>
        }
    }


    console.log(info);
    return (
        <li className='list'>
            <img className='image-user' src={info.image} alt="image undefined" />
            <h2 className='name-user'>{info?.name}</h2>
            <h2 className='status'>{circle()} status: {info.status}</h2>
            <h2>origin: {info.origin?.name}</h2>
            <h2>episodes: {info.episode?.length}</h2>
        </li>
    );
};

export default ResidentInfo;