import Layout from "@theme/Layout";
import React from "react";
import { AuthProvider } from "../../components/auth/Authneticated";

const AccountApp: React.FC = () => {
  return (
    <Layout>
      <AuthProvider></AuthProvider>
    </Layout>
  );
};

export default AccountApp;
