/* eslint-disable react/prop-types */
import styled from "styled-components"
import Title from "../../../components/Title"
import Text from "../../../components/Text"
import Grid from "../../../components/UI/Grid"

const StyledCard = styled.div`
max-width: 630px;
max-height: 400px;
position: relative;
`

const StyledCardDesc = styled.div`
background: transparent;
position: absolute;
bottom: 10px;
left: 10px;
`
const StyledCardImg = styled.img`
max-width:100%

`

function Card(props) {
  return <StyledCard>
    <div>
        <StyledCardImg src={props.img}/>
    </div>
    <StyledCardDesc>
        <Title card="true"> {props.title}</Title>
        <Grid columns="repeat(3, 1fr)" gap="5px">
            <Text card="true" >
                {props.price}
            </Text>
            <Text card="true">
                {props.yield}
            </Text>
            <Text card="true" >
               {props.sold} 
            </Text>
            <Text card="true" >
               {props.tiket} 
            </Text>
            <Text card="true">
                {props.days}
            </Text>
        </Grid>
    </StyledCardDesc>
  </StyledCard>
}

export default Card