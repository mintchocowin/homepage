import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`

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
        <Link to ="/food"><Nav>Food</Nav></Link>
        <Link to="/cloth"><Nav>Cloth</Nav></Link>
        <Link to="/review"><Nav>Review</Nav></Link>
        <Link to="/photo"><Nav>Photo</Nav></Link>
      </Navs>
    </Container>
  )
}

export default Menu;