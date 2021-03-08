import React from "react";
import { useUser } from "../auth/Authneticated";

const LicenseStatus: React.FC = () => {
  const user = useUser()!;

  return <div></div>;
};

export default LicenseStatus;
