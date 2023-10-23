import styled from "styled-components";
import background from "../../../assets/hero-image.png";
import Button from "../../../components/UI/Button";
import Container from "../../../components/UI/Container";
import Flex from "../../../components/UI/Flex";
import HeroTitle from "./HeroTitle";
import HeroText from "../../../components/Text";

const StyledHero = styled.section`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;

  position: relative;
  &::before {
    position: absolute;
    content: "";
    background: rgba(23, 34, 52, 0.6);
    width: 100%;
    height: 100%;
  }
`;
function Hero(props) {
  return (
    <StyledHero {...props}>
      <Container>
        <Flex
          align="center"
          direction="column"
          padding="300px 0 0 0"
          gap="15px"
        >
          <HeroTitle>The chemical negatively charged</HeroTitle>
          <HeroText>
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is
          </HeroText>
          <Button primary="true">Get Started</Button>
        </Flex>
      </Container>
    </StyledHero>
  );
}
export default Hero;
