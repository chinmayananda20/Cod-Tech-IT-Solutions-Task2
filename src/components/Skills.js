import React from "react";
import Box from '../components/Box'
import html from '../images/html.png'
import css from '../images/css.webp'
import js from '../images/js.png'
import react from '../images/react.png'
import node from '../images/node.webp'
import mongo from '../images/mongo.png'
import c from '../images/c.png'
import cplus from '../images/c++.png'
import java from '../images/java.png'
import python from '../images/python.png'
import php from '../images/php.png'
import sql from '../images/sql.png'

export default function skills() {
  return (
    <div className="container d-flex my-5" >
      <div className="row my-5">
        <div className="col-md-4 my-5 d-flex" style={{justifyContent:'center'}}>
          <Box name='HTML' image={html} prof={10} />
        </div>
        <div className="col-md-4 my-5 d-flex" style={{justifyContent:'center'}}>
          <Box name='CSS' image={css} prof={10} />
        </div><div className="col-md-4 my-5 d-flex" style={{justifyContent:'center'}}>
          <Box name='JavaScript' image={js} prof={9} />
        </div><div className="col-md-4 my-5 d-flex" style={{justifyContent:'center'}}>
          <Box name='React' image={react} prof={9} />
        </div>
        <div className="col-md-4 my-5 d-flex" style={{justifyContent:'center'}}>
          <Box name='Node Js' image={node} prof={8} />
        </div>
        <div className="col-md-4 my-5 d-flex" style={{justifyContent:'center'}}>
          <Box name='Mongo DB' image={mongo} prof={8} />
        </div>
        <div className="col-md-4 my-5 d-flex" style={{justifyContent:'center'}}>
          <Box name='C' image={c} prof={7} />
        </div>
        <div className="col-md-4 my-5 d-flex" style={{justifyContent:'center'}}>
          <Box name='C++' image={cplus} prof={6} />
        </div>
        <div className="col-md-4 my-5 d-flex" style={{justifyContent:'center'}}>
          <Box name='Java' image={java} prof={9} />
        </div>
        <div className="col-md-4 my-5 d-flex" style={{justifyContent:'center'}}>
          <Box name='Python' image={python} prof={10} />
        </div>
        <div className="col-md-4 my-5 d-flex" style={{justifyContent:'center'}}>
          <Box name='My-SQL' image={sql} prof={6} />
        </div>
        <div className="col-md-4 my-5 d-flex" style={{justifyContent:'center'}}>
          <Box name='PHP' image={php} prof={7} />
        </div>
      </div>
    </div>
  );
}
