import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
 @font-face {
  font-family: "aaaiight";
  font-weight: normal;
  src: url("../font/aaaiight.ttf") format("truetype");
}



 font-family: "aaaiight" sans-serif;

width: 700px;
height:100px;
border: 2px solid #000;
border-radius:50px;
background:#fff;
display:flex;
align-items:center;
justify-content:center;
margin-top:40px;
`;

const Navs = styled.ul`
background:#fff;
display:flex;
gap:120px;
`;

const Nav = styled.li`
background:#fff;
`;

const Menu = () =>{
  return (
    <Container>
      <Navs>
        <Link to="/map"><Nav>Map</Nav></Link>
        <Link to ="/food"><Nav>food</Nav></Link>
        <Link to="/photo"><Nav>photo</Nav></Link>
        <Link to="/cloth"><Nav>cloth</Nav></Link>
      </Navs>
    </Container>
  )
}

export default Menu;