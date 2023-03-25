import React, { useState, useEffect } from 'react';
import Features from '../Features/Features';
import "./Card.css";
import Modal from "../Modal/Modal";
import MyModal from './../Modal/MyModal';
const Card = (props) => {
    const {name, image, features, published_in}=props.data;
    const [showModal, setShowModal] = useState(false);
    // useEffect(() => {
    //   document.body.addEventListener('click', () => {
    //     setShowModal(false)
    //   })
    // },[showModal])

    const closeModal= ()=>{
      setShowModal(false)
    }
    return (

        <div className='col-12 col-md-4 my-2'>
            <div className="card">
              <img src={image} className="card_image" alt="..." />
              <div className="card-body">
                <h3 className="card-title fw-bold text-start mb-4 mt-3 ms-4">Features</h3>
                <Features data={features}></Features>
                <h2>{name}</h2>
                <i className="fas fa-calendar-alt fa-lg"></i> <span> {published_in}</span>
                  <button onClick={()=>{setShowModal(true)}}  style={{marginLeft:"150px"}}><i className="fas fa-arrow-alt-circle-right fa-lg"></i></button>
              </div>
            </div>
            {showModal && <MyModal closeModal={closeModal} data={props.data}></MyModal>}
        </div>
    );
};

export default Card;