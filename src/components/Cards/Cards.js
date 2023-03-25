import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Modal from '../Modal/Modal'

const Cards = () => {

    const [data, setData]= useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res=>res.json())
        .then(data=>setData(data.data.tools))
    },[])
    console.log(data)
    const [openModal, setOpenModal ]=useState(false);
    // const [modalData, setModalData]= useState(props.data);
    return (
        <>
        <div className='row'>
            {
                data.map((ai_block,key)=>{ return(
                <Card data={ai_block} key={key} ></Card>
                )
            })
        }


        </div>
        </>


    );
};

export default Cards;