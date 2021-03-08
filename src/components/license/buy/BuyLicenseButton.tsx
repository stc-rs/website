import { Grid } from "@material-ui/core";
import React from "react";
import styles from "./BuyLicenseButton.module.css";

interface Props {
  method: string;
}

const BuyLicnseButton: React.FC<Props> = ({ method, children }) => {
  return (
    <div className={styles.container}>
      <div>
        <Grid container direction="row" justify="center">
          Via {method}
        </Grid>
      </div>
      {children}
    </div>
  );
};

export default BuyLicnseButton;
