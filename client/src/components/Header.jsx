import styled from "styled-components";
import Container from "./UI/Container";
import Flex from "./UI/Flex";
import Button from "./UI/Button";
import Title from "./Title";
import PathConstants from '../routes/pathConstants'
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import {clearCredentials} from "../redux/authSlice"
const StyledHeader = styled.header`
  background-color: #172234;
  color: #fff;
  min-height:84px;
`;

function Header(props) {
  const location = useLocation();
  const isHome = location.pathname === PathConstants.HOME;
  const {token} = useSelector((state)=> state.auth)
  const dispatch = useDispatch()

  const logoutHandler = ()=>{
    try {
        dispatch(clearCredentials())
    } catch (error) {
        console.log(error)
    }
 }

  return (
    <StyledHeader {...props}>
      <Container>
      {isHome && 
          <Flex align="center" justify="space-between" padding="18px 0px">
          <Title>My logo</Title>
          <Flex gap="10px">
          {token ? (<Button type="button" onClick={logoutHandler}>Log out</Button>):(
          <>
          <Button outline="true"><Link to={PathConstants.LOGIN}>Log in</Link></Button>
          <Button><Link to={PathConstants.SIGNUP}>Sign up</Link></Button>
          </>
            )}
          </Flex>
        </Flex>
        }
      </Container>
    </StyledHeader>
  );
}

export default Header;
