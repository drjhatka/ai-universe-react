import React from 'react';

const MyModal = ({closeModal, data}) => {
    console.log(data.description)
    return (

             <div className='custom_modal' onClick={e=>{e.stopPropagation(); closeModal()}}>
                
                <div className="modal_content d-flex flex-column">

                    <div className="modal_header d-flex closeBtn justify-content-end">
                        <div className=''>
                            <span style={{color:"red"}} onClick={closeModal} >&times;</span>
                        </div>
                    </div>

                    <div className="modal_body">
                        <div className='row'>
                            <div className="col-md-6">
                                <h4>{data.description? data.description:"Description not available"}</h4>   
                            </div>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <div className="col-md-12">
                                        <img className='modal_image' src={data.image} alt="" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>

    );
};

export default MyModal;