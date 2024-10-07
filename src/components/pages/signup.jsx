import FormSignUp from "../components/Fragments/formsignup";
import Authlayout from "../components/Layouts/authlayout";

const signup = () => {
  return (
    <Authlayout title="sign up">
      <FormSignUp />
    </Authlayout>
  );
};

export default signup;