import React, { Dispatch, SetStateAction } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useRouter } from 'next/dist/client/router';
import cookie from 'js-cookie';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

interface NavbarProps {
  setSuccessMessage: (message: string) => void;
  setErrorMessage: (message: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setSuccessMessage, setErrorMessage }) => {
  const classes = useStyles();
  const router = useRouter();
  const logoutHandle = () => {
    setSuccessMessage('Logged out');
    cookie.remove('token');
    router.push('/');
  };
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Campus-Election
        </Typography>
        <Button color="inherit" onClick={logoutHandle}>
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
