import React from "react";
import Input from "../UI/Input";
import Button from "../UI/Button"

const MealsForm = () => {
  return (
    <div>
      <div>
        <b>Amount</b>
        <Input width="45px" height="30px" type="number" />
      </div>
      <Button width="50px" height="30px" >Add</Button>
    </div>
  );
};

export default MealsForm;
