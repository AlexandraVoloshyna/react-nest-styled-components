import styled from "styled-components"


const StyledButton = styled.button`
border-radius: 5px;
background: #B29F7E;
padding: 11px 58px;
cursor:pointer;
color:#fff;
font-family: 'Merriweather', serif;
font-weight:700;
line-height: 22px;
transition: scale, 0.3s ease-in;

@media (hover: hover) {
  &:hover {
  scale:1.1;
}

}



${props => props.outline 
    && `border: 1px solid #B29F7E;
      color:#B29F7E;
      background: transparent;
    `
}

${props => props.primary 
    && `border: 1px solid #fff;
    color:#fff;
    padding: 10px 24px;
    border-radius: 8px;
    font-size: 20px;
    line-height: 34px;
    background:transparent;
    z-index:2;
    `
}

@media (max-width: 500px) {
  padding: 11px 25px;
}
`




function Button(props) {
  return <StyledButton {...props}/>
}

export default Button