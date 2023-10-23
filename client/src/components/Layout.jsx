import { Outlet } from "react-router-dom"
import Header from "./Header"
import Wrapper from "./UI/Wrapper"

function Layout() {
  return (
    <Wrapper>
      <Header/>
      <main>                
            <Outlet />
      </main>
    </Wrapper>
  )
}

export default Layout