import React from 'react';

const MyModal = ({closeModal, data}) => {
    
    return (
        <div>
             <div className='custom_modal' onClick={e=>{e.stopPropagation(); closeModal()}}>
                
                <div className="modal_content d-flex flex-column justify-content-between">
                <div className="modal_header d-flex closeBtn justify-content-end">
                        <div className=''><span style={{color:"red"}} onClick={closeModal} >&times;</span></div>
                    </div>
                    <div className="modal_body">
                        <p>{data.name}</p>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default MyModal;