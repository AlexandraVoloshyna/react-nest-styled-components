import { useState } from "react";
import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledLabel,
  StyledSpan,
} from "../../components/StyledComponents/styledComponents";
import Text from "../../components/Text";
import { Link, useNavigate } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";
import {useLoginMutation} from "../../redux/userApiSlice"
import { useDispatch } from "react-redux"; 
import {setCredentials} from "../../redux/authSlice"

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
 const dispatch = useDispatch()
 const [login] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials(res?.token));
      navigate('/');
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>Email</StyledLabel>
      <StyledInput
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete='on' 
        required 
      />
      <StyledLabel>Password</StyledLabel>
      <StyledInput
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete='on' 
        required 
      />
      <StyledSpan text="right" margin="-10px 0 0 0">
        <Link to={PathConstants.RESET}>Forget password?</Link>
      </StyledSpan>
      <StyledButton type="submit" disabled={!email || !password}>
        Sign in
      </StyledButton>
      <Text login="true" color="#172234" text="center" margin="-10px 0 0 0">
        Don`t have account?
        <StyledSpan>
          <Link to={PathConstants.SIGNUP}>Sign up</Link>
        </StyledSpan>
      </Text>
    </StyledForm>
  );
}

export default LoginForm;
