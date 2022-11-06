import React from 'react';
import { useState, useEffect } from 'react';

const Page = ({p, Id, Search}) => {

    const [ isVisible, setIsVisible ] = useState(false)

    useEffect(() => {
        if(p.name.toLowerCase().includes(Id.toLowerCase())){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    } , [Id])
    return (
        <>{isVisible && <div onClick={() => Search(p.id)}>{p.name}</div>}</>
    );
};

export default Page;