import LoginForm from "./LoginForm"
import img from "../../assets/login-image.png"
import Title from "../../components/Title"
import { StyledContainerFluid, StyledFormWrapper, StyledImg, StyledImgWrapper, StyledFormContainer } from "../../components/StyledComponents/styledComponents"

 function LoginPage() {
   return (
     <section>
         <StyledContainerFluid>
         <StyledImgWrapper>
                <StyledImg src={img}/>
              </StyledImgWrapper>
              <StyledFormContainer>
              <StyledFormWrapper>
              <Title login="true">Login</Title>
              <LoginForm/>
              </StyledFormWrapper>
              </StyledFormContainer>
          </StyledContainerFluid>     
     </section>
   )
 }
 
 export default LoginPage