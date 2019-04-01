import React, { Component } from 'react';
import Logo from '../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.css';
import Paper from '@material-ui/core/Paper';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import Colors from '../color.js';
const styleHeader ={
    HeaderContainer:{
        backgroundColor:Colors.fire,
        height: '500vh',
        width:'100vw',
    },
    
    Layout1:{
        height: '100vh',
        overflow:'hidden',
        width: '50vw',
        background: Colors.gray,
        position: 'fixed',
    },
    Layout2:{
        overflow:'hidden',
        height: '100vh',
        width: '50vw',
        background: Colors.gray,
        marginLeft: '50vw',
    },
    Logo1:{
        maxHeight: '60vh',
        pointerEvents: 'none',
        transform: 'rotate(-45deg)',
        padding: '40px',
        maxWidth: '80vw',
    },
    Logo1Container:{
        marginRight: '-50vw',
        transform: 'rotate(45deg)',
        background: Colors.primaryDark
    },
    Logo2:{
        maxWidth: '80vw',
        maxHeight: '60vh',
        transform: 'rotate(45deg)',
        padding: '40px',
        pointerEvents: 'none',
    },
    Logo2Container:{
        transform: 'rotate(-45deg)',
        background: Colors.primaryDark,
        marginLeft: '-50vw',
    },
}

class AppHeader extends Component{
    render(){
        return (
         <div style={styleHeader.HeaderContainer}>
            <div style={styleHeader.Layout1}>
            <div style={styleHeader.Logo1Container}>
            <img style={styleHeader.Logo1} src={Logo}/>
            </div>
            </div>
            <div style={styleHeader.Layout2}>
            <div style={styleHeader.Logo2Container}>
            <img style={styleHeader.Logo2} src={Logo}/>
            </div>
            </div>
         </div>
        )
    }
}
export default AppHeader;

