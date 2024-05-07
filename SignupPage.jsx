import Signup from "../../components/Authentication/Signup";
import Header from "../../components/Authentication/Header";

export default function SignupPage() {
  return (
    <>
      <Header
        heading="Create a new account"
        paragraph="Already have account? "
        linkName="Login"
        linkUrl="/"
      />
      <Signup />
    </>
  )
}