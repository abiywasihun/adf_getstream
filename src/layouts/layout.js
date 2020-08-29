import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
//import { rhythm } from '../utils/typography';

const containerStyle = {
    maxWidth: 700,
	margin: `0 auto`,
	
};

class DefaultLayout extends Component {
	constructor(props) {
		//
		super(props);
		this.state = {
		  open:false, 
		  setOpen:false,
		  searchinput:'',
		  searchopen:false,
			users: [],
		};
	  }
	
		render() {


		return (
			
				  <div style={{display: 'flex',}}>
      <CssBaseline />
      <AppBar
		position="fixed"
		style={{backgroundColor:'#007bff'}}
       
      >
        <Toolbar>
          
          <Typography style={{alignItems:'center',alignContent:'center',alignSelf:'center'}}variant="h6" noWrap>
            (Addis)Fortune
          </Typography>
        </Toolbar>
      </AppBar>
      
	 
      <main style={{marginTop:60,marginBottom:50}}>					
				<div css={containerStyle}>{this.props.children}</div>
				<div style={{ marginTop:"40px",}}>
				<div style={{backgroundColor: "white",
  fontSize: "20px",
 
  color: "white",
  
  
 
  position: "fixed",
  left: "10",
  bottom: "0",
  
  }}> <img src={'https://addisfortune.net/adfads2018/derba/1.gif' } alt="Advert Place" style={{width:'100%',height: "100%",}}  /></div>
    </div>
				</main>
			</div>
		);

    }
}

DefaultLayout.propTypes = {
	children: PropTypes.object.isRequired
};

export default DefaultLayout;
