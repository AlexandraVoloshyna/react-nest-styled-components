import styled from 'styled-components'

const StyledFlex = styled.div`
display:flex;
align-items: ${props=>props.align|| 'stretch'};
flex-direction:${props=>props.direction|| 'row'};
justify-content:${props=>props.justify|| 'stretch'};
margin:${props=>props.margin|| '0px'};
padding:${props=>props.padding|| '0px'};
gap:${props=>props.gap|| '0px'};
`

function Flex(props) {
  return <StyledFlex {...props}/>
}

export default Flex