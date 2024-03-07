import React from 'react';
import '../styles/skills.css';

export default function Box(props) {
    return (
        <div>
            <div className="color-box">
                <div className="upper-color d-flex" style={{ justifyContent: 'center', fontSize: '30px', fontWeight: '700' }}>{props.name}</div>
                <div className="lower-color d-flex" style={{ flexDirection: 'column', alignItems: 'center', fontSize: '20px', fontWeight: '700' }}>
                    <span className='text-center' style={{ marginTop: '80px' }}>Proficiency</span>
                    <div className='d-flex '>
                        <input type="range" min="0" max="10" value={props.prof} />
                        {props.prof}
                    </div>
                </div>
                <img src={props.image} width="150" alt="Overlay Image" className="image-overlay" />
            </div>
        </div>
    );
}
