import React from "react";

function MyProfile({ user }) {
  return (
    <div>
      {" "}
      An object that contains helper functions which you can use to imperatively
      change the value, error value or touched status for the field in question.
      This is useful for components which need to change a field's status
      directly, without triggering change or blur events.
      {JSON.stringify(user)}
    </div>
  );
}

export default MyProfile;
