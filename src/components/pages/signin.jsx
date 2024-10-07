import FormSignIn from "../components/Fragments/formsignin";
import Authlayout from "../components/Layouts/authlayout";

const signin = () => {
  return (
    <Authlayout title="sign in">
      <FormSignIn />
    </Authlayout>
  );
};

export default signin;
