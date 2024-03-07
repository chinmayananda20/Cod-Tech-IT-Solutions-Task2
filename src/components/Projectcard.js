import React from 'react'

export default function Projectcard(props) {
    return (
        <div>

            <div class="card" style={{ borderRadius: '20px' }}>
                <div className="container">
                    <img src={props.image} height="220px" class="card-img-top" alt="..." />
                </div>
                <hr />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.desc}</p>
                    <b>Github: <a href={props.git}>{props.git}</a> </b>

                </div>

            </div>

        </div>
    )
}
