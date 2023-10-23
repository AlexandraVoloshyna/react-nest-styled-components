import styled from "styled-components"

const StyledText = styled.p`
font-family: Lato;
  font-size: 24px;
  line-height: 32px;
  max-width: 822px;
  font-weight: 400;
  z-index:2;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
  
  ${props => props.card 
    && `
    font-family: Lato;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    `
  }
  ${props => props.login 
    && `
      font-size: 14px;
      font-weight: 700;
      line-height: 22px;
      color: #172234;
      text-align: ${props.text};
      margin:${props.margin};
    `
  }
`

function Text(props) {
  return <StyledText {...props}/>
}

export default Text