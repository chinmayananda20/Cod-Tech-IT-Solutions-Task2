import React from 'react'
import '../styles/contact.css'
export default function Contact() {
    return (
        <div>
            <p className='d-flex my-5' style={{ alignItems: 'center', fontWeight: '700', color: '#00c2d1', fontSize: '7rem' }}> <marquee direction="left" behavior="scroll" scrollamount="20">
                M.Chinmayananda | Computer Science Student | Web Developer.
            </marquee></p>
            <div className="lower d-flex" >
                <div className='contact'>
                    <div className="contacts d-flex" style={{ alignItems: 'center' }}>
                        <i class="fa fa-envelope" style={{
                            fontSize: "48px;", color: 'black',
                            border: "2px solid black"
                        }}></i>
                        <div style={{ fontSize: "20px", color: 'black', fontWeight: '600' }}>chinmayanandamandula@gmail.com</div>
                    </div>
                    <div className="contacts d-flex" style={{ alignItems: 'center' }}>
                        <i class="fa fa-linkedin-square" style={{
                            fontSize: "48px;", color: 'black',
                            border: "2px solid black"
                        }}></i>
                        <div >
                            <a style={{ fontSize: "20px", color: 'black', fontWeight: '600' }} href="https://www.linkedin.com/in/chinmayananda-mandula-aa6a7425b/">Chinmayananda Mandula</a>
                        </div>
                    </div>
                    <div className="contacts d-flex" style={{ alignItems: 'center' }}>
                        <i class="fa fa-phone" style={{
                            fontSize: "48px;", color: 'black',
                            border: "2px solid black"
                        }}></i>
                        <div style={{ fontSize: "20px", color: 'black', fontWeight: '600' }}>+91 799XXXXXXXX</div>
                    </div>
                    <div className="contacts d-flex" style={{ alignItems: 'center' }}>
                        <i class="fa fa-instagram" style={{
                            fontSize: "48px;", color: 'black',
                            border: "2px solid black"
                        }}></i>
                        <a style={{ fontSize: "20px", color: 'black', fontWeight: '600' }} href="https://www.instagram.com/chinmayananda0720/?next=%2F">Chinmayananda Mandula</a>

                    </div>

                </div>


            </div>
        </div>
    )
}
