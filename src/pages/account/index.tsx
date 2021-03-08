import React from "react";

import LicenseStatus from "../../components/license/Status";
import ProtectedPage from "../../components/util/ProtectedPage";

const AccountPage: React.FC = () => {
  return (
    <ProtectedPage title="My account">
      <LicenseStatus></LicenseStatus>
    </ProtectedPage>
  );
};

export default AccountPage;
