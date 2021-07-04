import * as React from 'react';
import { createStyles, makeStyles, Theme, useTheme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Box, Fade, Grid, Link, useMediaQuery } from '@material-ui/core';
import Image from 'next/image';
import NavbarHeader from '../components/navbarHeader';
import ThemeToggleButton from '../components/theme/modeToggle';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      flexGrow: 1,
    },
    header: {
      minHeight: '10vh',
      alignItems: 'center',
      flexWrap: 'wrap',
      display: 'flex',
    },
    logo: {
      marginRight: 'auto',
      [theme.breakpoints.down('sm')]: {
        margin: 'auto',
      },
    },
    menuBtn: {
      backgroundColor: '#3997F5',
      color: 'white',
      marginRight: theme.spacing(1),
      '&:hover': {
        backgroundColor: '#1976D2',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    darkTheme: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    mobileDrawer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: { display: 'none' },
    },
    body: {
      minHeight: '80vh',
    },
    margin: {
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(3),
      },
    },
    typo: {
      color: theme.palette.type === 'light' ? '#1976D2' : 'white',
      // color: '#221C64',
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(5),
      },
    },
  })
);

const VectorImg = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  if (mobile) {
    return (
      <Box>
        <Image
          src="/Voting-Box.svg"
          alt="logo"
          width={window.innerWidth}
          height={window.innerWidth / 1.74}
        />
      </Box>
    );
  }
  return (
    <Box>
      <Image src="/Voting-Box.svg" alt="logo" width={800} height={460} />
    </Box>
  );
};

const Landing: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <NavbarHeader open={open} setOpen={setOpen} />
      <div className={classes.root} onClick={() => setOpen(false)}>
        <Box padding={4} className={classes.header}>
          <Box className={classes.logo}>
            <img
              style={{ cursor: 'pointer' }}
              src="/Campus-Election.svg"
              width="256px"
              alt="logo"
              onClick={() => router.push('/')}
            />
          </Box>
          <Box display="flex" alignContent="center" justifyContent="center">
            <Fade in={true}>
              <Box className={classes.darkTheme}>
                <ThemeToggleButton />
              </Box>
            </Fade>
            <Button
              variant="contained"
              onClick={() => router.push('/login')}
              className={classes.menuBtn}
            >
              Login
            </Button>
            <Button
              variant="contained"
              onClick={() => router.push('/signin')}
              className={classes.menuBtn}
            >
              Sign up
            </Button>
          </Box>
        </Box>
        <Box className={classes.mobileDrawer}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={(event) => {
              event.stopPropagation();
              handleDrawerOpen();
            }}
          >
            <MenuIcon fontSize="large" color="primary" />
          </IconButton>
        </Box>
        <Grid container className={classes.body}>
          <Grid
            container
            item
            xs={12}
            md={4}
            justify="space-around"
            alignItems="center"
            direction="column"
          >
            <Box className={classes.margin}>
              <Typography variant="h4" align="center" className={classes.typo}>
                <b>Election Portal for Campus-Election</b>
              </Typography>
            </Box>
            <Box className={classes.margin}>
              <Box marginBottom={5}>
                <Typography variant="h5" align="center">
                  July 2021
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid container item xs={12} md={8} justify="flex-end" alignItems="flex-end">
            <VectorImg />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Landing;
