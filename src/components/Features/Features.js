import React from 'react';
import './Features.css'
const Features = (props) => {
    
    return (
        <div className='text-start '>
            <ul className="features" style={{borderBottom:"1px solid black"}}>
            {
                props.data.map((feature,index)=>{
                    return <li className='feature_item' key={index}><span className='fw-semibold'>{index+1}</span>. {feature}</li>
                })
            }
            </ul>
        </div>
    );
};

export default Features;