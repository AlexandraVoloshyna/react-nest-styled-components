import styled from "styled-components"
import Container from "../../../components/UI/Container"
import Grid from "../../../components/UI/Grid"
import Card from "./Card"
import Title from "../../../components/Title"
import { useGetCardsQuery } from "../../../redux/userApiSlice"



const StyledCards = styled.section`
margin-top: 50px;
`

function Cards(props) {
    const { data: cards} = useGetCardsQuery();

  return (
    <StyledCards {...props}> 
        <Container>
            <Title section="true">
                Open Deals
            </Title>
            <Grid padding="20px" gap="20px" columns="repeat(2, 1fr)" columnsmobile="none" justify="center" >
            {cards?.map(card => <Card 
                            img= {card.img}
                            key={card.id} 
                            title={card.title} 
                            price={card.price} 
                            tiket={card.ticket} 
                            yield={card.yield} 
                            days={card.days} 
                            sold={card.sold}
                            />
            )}

            </Grid>
        </Container>
    </StyledCards>
  )
}

export default Cards
