import styled from 'styled-components'

const StyledWrapper = styled.div`
width:100%;
min-height: 100vh;
background:#F2F2F2;
color:#fff;
overflow: clip;
`

function Wrapper(props) {
  return <StyledWrapper {...props}/>
}

export default Wrapper