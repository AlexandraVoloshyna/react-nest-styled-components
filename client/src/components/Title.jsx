import styled from "styled-components"

const StyledTitle = styled.h3`
    font-size: 28px;
    line-height: 34px;
    @media (max-width: 500px) {
      font-size:20px;
    }
    ${props => props.section 
      && `
      color:  #B29F7E;
      font-weight: 700;
      `
    }
    ${props => props.card 
      && `
      font-size: 20px;
      font-weight: 700;
      `
    }
    ${props => props.login 
      && `
      font-weight:700;
      color: #172234;
      `
    }



`

function Title(props) {
  return <StyledTitle {...props}/>
}

export default Title