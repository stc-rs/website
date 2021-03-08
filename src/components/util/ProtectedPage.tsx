import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import React from "react";
import { AuthProvider } from "../auth/Authneticated";
import { Protected } from "../auth/Protected";

interface Props {
  title: string;
}

const ProtectedPage: React.FC<Props> = ({ title, children }) => {
  return (
    <Layout title={title}>
      <div className="container margin-vert--lg">
        <BrowserOnly fallback={<div>{title}</div>}>
          {() => {
            return (
              <AuthProvider>
                <Protected>{children}</Protected>
              </AuthProvider>
            );
          }}
        </BrowserOnly>
      </div>
    </Layout>
  );
};

export default ProtectedPage;
