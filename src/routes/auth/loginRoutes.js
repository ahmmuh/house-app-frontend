import LoginPage from "../../pages/login/LoginPage"
import RegisterPage from "../../pages/register/RegisterPage"
import SuspenseWrapper from "../dashboard/SuspenseWrapper"

const loginRoutes = [
  {
    path: "login",
    element: (
      <SuspenseWrapper>
        <LoginPage />
      </SuspenseWrapper>
    ),
  },

  {
    path: "register",
    element: (
      <SuspenseWrapper>
        <RegisterPage />
      </SuspenseWrapper>
    ),
  },
]

export default loginRoutes
