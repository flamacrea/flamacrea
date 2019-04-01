import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Colors from '../color.js';

const styleManifesto ={
    HeaderContainer:{
        backgroundColor:Colors.gray,
        overflowY: 'auto',
        height: '100vh',
        width:'100vw'
    }
}

class Manifesto extends Component{
    render(){
        return(
            <div style={styleManifesto.HeaderContainer}/>
        )
    }
}

export default Manifesto