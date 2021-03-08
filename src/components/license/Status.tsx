import Link from "@docusaurus/Link";
import React from "react";

import { useUser } from "../auth/Authneticated";

const LicenseStatus: React.FC = () => {
  const user = useUser()!;

  return (
    <div>
      <h3>Subscription status</h3>

      {user.data.licenseType ? (
        <></>
      ) : (
        <>
          You don't have a stc license.
          <p>
            <Link to={`/license/buy`}>Buy license</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default LicenseStatus;
