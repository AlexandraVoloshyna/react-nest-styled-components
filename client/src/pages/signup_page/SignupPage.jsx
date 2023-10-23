
import SignupForm from "./SignupForm"
import img from "../../assets/login-image.png"
import Title from "../../components/Title"
import { StyledContainerFluid, StyledFormWrapper, StyledImg, StyledImgWrapper, StyledFormContainer } from "../../components/StyledComponents/styledComponents"


 function SignupPage() {
   return (
     <section>
         <StyledContainerFluid>
         <StyledImgWrapper>
                <StyledImg src={img}/>
              </StyledImgWrapper>
              <StyledFormContainer>
              <StyledFormWrapper>
              <Title login="true">Sign up</Title>
              <SignupForm/>
              </StyledFormWrapper>
              </StyledFormContainer>
          </StyledContainerFluid>     
     </section>
   )
 }
 
 export default SignupPage