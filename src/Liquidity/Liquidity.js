import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import SwitchButton from "./SwitchButton";
import LiquidityDeployer from "./LiquidityDeployer";
import LiquidityRemover from "./RemoveLiquidity";

const styles = (theme) => ({
  paperContainer: {
    borderRadius: theme.spacing(1),
    padding: theme.spacing(6),
    paddingBottom: theme.spacing(8),
    maxWidth: 1250,
   
 
    background: 'rgb(149, 76, 184)',
// background: 'radial-gradient(circle, rgb(53, 41, 70) 0%, rgba(63,32,85,1) 34%, rgb(92, 18, 126) 67%, rgb(48, 70, 135) 100%)',
    margin: "auto",
  },
  title: {
    textAlign: "center",
    padding: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
  footer: {
    // marginTop: "155px",
  },
});

const useStyles = makeStyles(styles);

function Liquidity(props) {
  const classes = useStyles();

  const [deploy, setDeploy] = React.useState(true);

  const deploy_or_remove = (deploy) => {
    if (deploy === true) {
      return <LiquidityDeployer network={props.network}/>;
    }
    return <LiquidityRemover network={props.network}/>;
  };

  return (
    <div>
      <Container>
        <Paper className={classes.paperContainer}>
          <Typography variant="h5" className={classes.title}>
            <SwitchButton setDeploy={setDeploy} />
          </Typography>

          {deploy_or_remove(deploy)}
        </Paper>
      </Container>

      <Grid
        container
        className={classes.footer}
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
      >
       
      </Grid>
    </div>
  );
}

export default Liquidity;
