import HomePage from "../pages/home_page/HomePage"
import LoginPage from "../pages/login_page/LoginPage"
import SignupPage from "../pages/signup_page/SignupPage"
import PathConstants from "./pathConstants"




const routes = [
    { path: PathConstants.HOME, element: <HomePage /> },
    { path: PathConstants.LOGIN, element: <LoginPage /> },
    { path: PathConstants.SIGNUP, element: <SignupPage /> },
]

export default routes