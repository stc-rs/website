import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import React from "react";

import { AuthProvider } from "../../components/auth/Authneticated";
import { Protected } from "../../components/auth/Protected";
import LicenseStatus from "../../components/license/Status";

const AccountPage: React.FC = () => {
  return (
    <BrowserOnly fallback={<div>Account page</div>}>
      {() => {
        return (
          <Layout title={`My account`}>
            <AuthProvider>
              <div className="container margin-vert--lg">
                <Protected>
                  <LicenseStatus></LicenseStatus>
                </Protected>
              </div>
            </AuthProvider>
          </Layout>
        );
      }}
    </BrowserOnly>
  );
};

export default AccountPage;
