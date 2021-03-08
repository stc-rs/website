import Layout from "@theme/Layout";
import React from "react";
import { AuthProvider } from "../../components/auth/Authneticated";
import { Protected } from "../../components/auth/Protected";
import LicenseStatus from "../../components/license/Status";

const AccountApp: React.FC = () => {
  return (
    <Layout>
      <AuthProvider>
        <div className="container margin-vert--lg">
          <Protected>
            <LicenseStatus></LicenseStatus>
          </Protected>
        </div>
      </AuthProvider>
    </Layout>
  );
};

export default AccountApp;
