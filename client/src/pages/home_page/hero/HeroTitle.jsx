import styled from "styled-components"

const StyledHeroTitle = styled.h1`
font-size: 64px;
font-weight: 700;
line-height: 80px; 
z-index:2;
@media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px; 
  }

`

function HeroTitle(props) {
  return <StyledHeroTitle {...props}/>
}

export default HeroTitle