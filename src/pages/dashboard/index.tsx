import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Button, Box } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import cookie from 'js-cookie';
import Navbar from '../../components/navbar';
import LoadingScreen from '../../components/loadingScreen';
import { ComponentProps } from '../_app';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      height: '100vh',
    },
    header: {
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(3),
      },
    },
    voterpng: {
      width: '80%',
      [theme.breakpoints.down('sm')]: {
        width: '40%',
      },
    },
    votertypo: {
      fontSize: '2.4rem',
    },
  })
);
const dashboard: React.FC<ComponentProps> = ({
  environment,
  viewer,
  setSuccessMessage,
  setErrorMessage,
  refetch,
}) => {
  const classes = useStyles();
  //const refetchRef = React.useRef<any>(null);
  const router = useRouter();

  const logoutHandle = () => {
    cookie.remove('token');
    router.push('/');
  };
  console.log(viewer.email);

  return (
    <>
      <div className={classes.root}>
        <Navbar setSuccessMessage={setSuccessMessage} setErrorMessage={setErrorMessage} />
        <Grid container component="main">
          <Grid>
            <Box mt={5} mb={5} className={classes.header}>
              <Grid container justify="flex-start" alignItems="center">
                <Grid item sm={4} alignItems="center">
                  <img src="/dashboardface.png" className={classes.voterpng}></img>
                </Grid>
                <Grid item sm={8}>
                  <Typography variant="h4" className={classes.votertypo}>
                    <b>Hello, Voter</b>
                  </Typography>
                  <Typography>Welcome to Campus Election dashboard</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default dashboard;
