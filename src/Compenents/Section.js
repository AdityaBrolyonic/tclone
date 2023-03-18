import React from 'react'
import '../Css Files/Section.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

function Section({title, desc, bgimg, left, right}) {
    console.log(bgimg);
  return (
    <BoxImage bgImage = {bgimg}>
<Fade bottom>
           <div className='BoxText'>
           <div className='Heading'>
           {title}
           </div>
           <div className='Line'>
           {desc}
           </div>
           </div>
           </Fade>
<div className='ButtonGroup'>
           <div className='Button'>
           <div className='Left'>
           {left}
           </div>
          { right &&
          <div className='Right'>
          {right}
          </div>}
           </div>
           <div className='Arrow'>
           <ExpandMoreIcon />
           </div>
           </div>         

    </BoxImage>
  )
}

export default Section

const BoxImage = styled.div
`height : 100vh;
width : 100vw;
background-image : ${props => `url("/Images/${props.bgImage}")` };
background-size : cover;
background-repeat : no-repeat;
background-position : center;

display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
`
