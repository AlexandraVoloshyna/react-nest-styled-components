import styled from "styled-components"

const StyledContainer = styled.div`
max-width:1200px;
margin: 0 auto;
padding: 0 15px;

`

function Container(props) {
  return <StyledContainer {...props}/>
}

export default Container