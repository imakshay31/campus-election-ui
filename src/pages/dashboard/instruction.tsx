import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Box,
  ListItem,
  ListItemText,
  Paper,
  Button,
  List,
  Grid,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import Navbar from '../../components/navbar';
import { ComponentProps } from '../_app';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '80vh',
      margin: 'auto',
      padding: 'auto',
      paddingBottom: '10px',
      [theme.breakpoints.up('md')]: {
        width: '100%',
      },
    },
    instructionBox: {
      padding: theme.spacing(2, 10),
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(2),
      },
    },
    buttonGroup: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    button: {
      margin: theme.spacing(1),
      backgroundColor: '#3997F5',
      color: 'white',
      marginRight: theme.spacing(1),
      '&:hover': {
        backgroundColor: '#1976D2',
      },
    },
  })
);

const Instruction: React.FC<ComponentProps> = ({
  environment,
  viewer,
  setSuccessMessage,
  setErrorMessage,
  refetch,
}) => {
  const classes = useStyles();
  const router = useRouter();

  const instructions = [
    '1. Election will start on this time',
    '2. Voting can be done by anyone who registered on this website between given time',
    '3. A Voter can vote for only one candidate for a particular position',
    '4. On one time only one position and candidate applied for that position will be display',
    '5. If voter wants to vote for displayed positon click on green button near the choice of their selected candidate',
    '6. You can skip a given ',
  ];
  return (
    <div className={classes.root}>
      <Navbar setSuccessMessage={setSuccessMessage} setErrorMessage={setErrorMessage} />
      <Box className={classes.instructionBox}>
        <Grid container justify="flex-start" alignItems="center">
          <List aria-label="instructions">
            {instructions.map((instruction) => (
              <ListItem key={instructions.indexOf(instruction)}>
                <ListItemText primary={instruction} primaryTypographyProps={{ color: 'inherit' }} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Box>
      <Box className={classes.buttonGroup}>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => router.push('/dashboard')}
        >
          Back
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => router.push('/dashboard/voting')}
        >
          Enter Voting Zone
        </Button>
      </Box>
    </div>
  );
};

export default Instruction;
