import React from "react";
import ChangePasswordForm from "../components/ChangePasswordForm";
import ChangeNameForm from "../components/ChangeName";

function Settings() {
  return (
    <div>
      <ChangePasswordForm />
      <ChangeNameForm />
    </div>
  );
}

export default Settings;
