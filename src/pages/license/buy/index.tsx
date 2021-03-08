import { Grid } from "@material-ui/core";
import React from "react";
import BuyLicnseButton from "../../../components/license/but/BuyLicenseButton";
import ProtectedPage from "../../../components/util/ProtectedPage";

const BuyLicensePage: React.FC = () => {
  return (
    <ProtectedPage title={`Buy license`}>
      <h1>Buy license</h1>
      <Grid container direction="row" justify="center">
        <Grid item xs={12} md={4}>
          <BuyLicnseButton method={"Paypal"}></BuyLicnseButton>
        </Grid>
        <Grid item xs={12} md={4}>
          <BuyLicnseButton method={"Stripe"}></BuyLicnseButton>
        </Grid>
      </Grid>
    </ProtectedPage>
  );
};

export default BuyLicensePage;
