
import { Route,Routes, } from 'react-router-dom';
import styled from 'styled-components';

import Menu from './components/Menu';
import Home from './routers/Home';
import Cloth from './routers/Cloth';
import Review from "./routers/Review";
import Food from "./routers/Food";
import Photo from "./routers/Photo";


const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

function App() {
  return (
    <div className="App">
      <Wrapper >
     <Menu/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/cloth" element={<Cloth/>}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="/photo" element={<Photo/>}/>
      </Routes>
      </Wrapper>    
    </div>
  );
}

export default App;
