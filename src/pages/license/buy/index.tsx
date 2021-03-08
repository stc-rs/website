import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import React from "react";
import { AuthProvider } from "../../../components/auth/Authneticated";
import { Protected } from "../../../components/auth/Protected";

const BuyLicensePage: React.FC = () => {
  return (
    <Layout title={`Buy license`}>
      <BrowserOnly fallback={<div>Buy license</div>}>
        {() => {
          return (
            <AuthProvider>
              <Protected></Protected>
            </AuthProvider>
          );
        }}
      </BrowserOnly>
    </Layout>
  );
};

export default BuyLicensePage;
