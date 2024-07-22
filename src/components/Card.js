import styled from "styled-components";
import Italy from "../img/Italy1.jpg"

const CardWrapper = styled.div`
width: 210px;
height: 280px;
background : #fff;
border-radius : 10px;
margin-top:20px;
display:flex;
align-items: center;
justify-content: center;
text-align:center;
`;
const CardContents = styled.div`
padding: 3px;
background : white;
`;

const CardImageCover = styled.div`
width:200px;
height:200px;
overflow:hidden;
margin-bottom: 10px;
`;

const CardImage = styled.img`
widht: 100%;
height: 100%;
`;

const CardTitle = styled.p`
font-size: 20px;
font-weight: bold;
background : white;
margin-bottom: 5px;
`;

const CardText = styled.p`
font-size: 13px;
background : white;
`;

const Card = () =>{
  return(
<CardWrapper>
  <CardContents>
  <CardImageCover>
    <CardImage src={Italy}/>
  </CardImageCover>
    <CardTitle>이탈리아 필름 사진</CardTitle>
    <CardText>2024.07.22~2024.07.28</CardText>
  </CardContents>
</CardWrapper>
  )
}

export default Card;