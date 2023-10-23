import { useState } from "react";
import {
  StyledForm,
  StyledSpan,
  StyledInput,
  StyledButton,
  StyledLabel,
} from "../../components/StyledComponents/styledComponents";
import Text from "../../components/Text";
import { Link, useNavigate } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";
import {useRegistrationMutation} from "../../redux/userApiSlice"
function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const [register] = useRegistrationMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ email, password }).unwrap();
      navigate('/login');
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
      <StyledButton type="submit" disabled={!email || !password}>
        Sign up
      </StyledButton>
      <Text login="true" color="#172234" text="center" margin="-10px 0 0 0">
        Already have account?
        <StyledSpan>
          <Link to={PathConstants.LOGIN}>Log in</Link>
        </StyledSpan>
      </Text>
    </StyledForm>
  );
}

export default SignupForm;
