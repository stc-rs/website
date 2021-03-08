import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import React from "react";
import { AuthProvider } from "../../../components/auth/Authneticated";
import { Protected } from "../../../components/auth/Protected";
import ProtectedPage from "../../../components/util/ProtectedPage";

const BuyLicensePage: React.FC = () => {
  return <ProtectedPage title={`Buy license`}></ProtectedPage>;
};

export default BuyLicensePage;
