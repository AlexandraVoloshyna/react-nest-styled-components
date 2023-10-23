import styled from "styled-components";

export const StyledForm = styled.form`
  padding-top: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  max-width: 450px;
  gap:20px;

`

export const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
  color: black;
  font-size:14px;
  line-height:20px;
`
export const StyledSpan = styled.span`
  font-family:Lato;
  color: #B29F7E;
  font-size:14px;
  line-height:22px;
  margin: ${props=> props.margin};
  text-align: ${props=>props.text || "initial"};
`
export const StyledInput = styled.input`
  width: 100%;
  padding:14px 20px 12px 20px;;
  border-radius: 5px;
  border: 2px solid #E0E0E0;
  background: #E0E0E0;
  &::placeholder{
    color: rgb(23, 34, 52, 0.5);
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }


`

export const StyledButton = styled.button`
border-radius: 5px;
background: #B29F7E;
padding: 11px 58px;
cursor:pointer;
color:#fff;
font-family: 'Merriweather', serif;
font-weight:700;
line-height: 22px;
 margin: 10px 0 0 0;


  cursor: pointer;
  &:disabled {
    opacity: 0.6;
  }
  &:enabled {
    opacity: 1.0;
   
  }
  
`

export const StyledFormWrapper = styled.div`
display: flex;
flex-direction: column;

`
export const StyledImgWrapper = styled.div`
flex: 0 1 60%;

`
export const StyledImg = styled.img`
width: 100%;
height:100vh
`
export const StyledFormContainer = styled.div`
max-width: 520px;
margin-right: auto;
padding:300px 50px 0 0;
flex-grow:1
`
export const  StyledContainerFluid = styled.div`
max-width: 100%;
display:flex;
gap:100px;

`