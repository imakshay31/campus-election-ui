import React from 'react';
import { ComponentProps } from '../_app';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Box,
  Typography,
  ListItem,
  ListItemText,
  TextField,
  Paper,
  Button,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Form, FormikFormProps, Formik, Field, FieldProps } from 'formik';
import { useRouter } from 'next/dist/client/router';
import { positions } from '../../components/position';
import * as yup from 'yup';
import { type } from 'os';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#F3F121',
      minHeight: '100vh',
      margin: '0px',
      padding: '5px',
      boxSizing: 'border-box',
    },
    list: {
      width: 320,
    },
    fullList: {
      width: 'auto',
    },
    sublist: {
      marginLeft: theme.spacing(3),
    },
    paper: {
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: theme.spacing(4),
      padding: theme.spacing(2),
      borderRadius: '25px',
      [theme.breakpoints.down('md')]: {
        width: '96%',
      },
    },
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(4),
    },
    table: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '90%',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(2),
    },
    buttonGroup: {
      // float: "right",
      width: 'fit-content',
      margin: 'auto',
      //marginTop: theme.spacing(4)
    },
    heading: {
      color: 'white',
      marginBottom: theme.spacing(4),
      paddingTop: '40px',
    },
    subHeading: {
      color: '#001831',
      fontSize: '1.2rem',
    },
    details: {
      textAlign: 'center',
    },
    center: {
      width: 'fit-content',
      margin: 'auto',
    },
    promoB: {
      [theme.breakpoints.down('md')]: {
        height: '200px',
      },
    },
    promoButton: {
      [theme.breakpoints.down('md')]: {
        marginTop: '15px',
        marginLeft: theme.spacing(2),
      },
    },
    text: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        marginTop: '165px',
        marginLeft: theme.spacing(2),
      },
    },
  })
);

const validationSchema = yup.object({
  name: yup.string().required('Name cannot be empty'),
  phone: yup.string().required('Phone cannot be empty'),
  positionApplied: yup
    .string()
    .required('Please select Position which you want to constest election'),
});

const Register: React.FC<ComponentProps> = ({
  viewer,
  refetch,
  environment,
  setSuccessMessage,
  setErrorMessage,
}) => {
  const classes = useStyles();
  const router = useRouter();

  const initialValues = {
    name: '',
    email: viewer.email,
    phone: '',
    description: '',
    positionApplied: '',
    // positionName: '',
  };

  const handleSubmit = (values: typeof initialValues) => {
    const candidateInput: CandidateInput = {
      name: values.name,
      phone: values.phone,
      description: values.description,
      positionApplied: values.positionApplied,
    };

    RegisterUserMutation(environment, candidateInput, {
      onCompleted: () => {
        setSuccessMessage('Registered Successfully for Election');
        refetch();
        router.push('/dashboard');
      },
      onError: (err) => {
        setErrorMessage('Something went wrong Please try again later!');
      },
    });
  };

  const handlePosition = (
    values: typeof initialValues,
    setValues: (v: typeof initialValues) => void,
    newValue: any
  ) => {
    setValues({ ...values, positionApplied: newValue });
  };

  return (
    <div className={classes.root} id="reg">
      <Box>
        <ListItem className={classes.heading}>
          <ListItemText
            primary={'Candidate Registration'}
            primaryTypographyProps={{ variant: 'h4', align: 'center' }}
            secondary={`Register now to contest election for your desired post`}
            secondaryTypographyProps={{ className: `${classes.subHeading}`, align: 'center' }}
          />
        </ListItem>
        <Formik
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          {({ values, setValues }) => (
            <Form aria-label="Sign up form" id="sign-up-form">
              <Box>
                <Paper elevation={3} className={classes.paper}>
                  <ListItem>
                    <Field name="name">
                      {({ field, meta }: FieldProps<typeof initialValues['name']>) => (
                        <TextField
                          fullWidth
                          id="name-input"
                          label="Name"
                          required
                          {...field}
                          error={!!(meta.touched && meta.error)}
                          helperText={meta.touched ? meta.error : ''}
                          variant="outlined"
                          size="small"
                          className={classes.textField}
                        />
                      )}
                    </Field>
                  </ListItem>
                  <ListItem>
                    <Field name="email">
                      {({ field, meta }: FieldProps<typeof initialValues['email']>) => (
                        <TextField
                          fullWidth
                          id="name-imput"
                          label="Email"
                          required
                          {...field}
                          error={!!(meta.touched && meta.error)}
                          helperText={meta.touched ? meta.error : ''}
                          variant="outlined"
                          size="small"
                          className={classes.textField}
                          disabled
                        />
                      )}
                    </Field>
                  </ListItem>
                  <ListItem>
                    <Field name="phone">
                      {({ field, meta }: FieldProps<typeof initialValues['phone']>) => (
                        <TextField
                          fullWidth
                          id="name-input"
                          label="Mobile no."
                          {...field}
                          error={!!(meta.touched && meta.error)}
                          helperText={meta.touched ? meta.error : ''}
                          variant="outlined"
                          size="small"
                          className={classes.textField}
                          required
                        />
                      )}
                    </Field>
                  </ListItem>
                  <ListItem>
                    <Field name="description">
                      {({ field, meta }: FieldProps<typeof initialValues['description']>) => (
                        <TextField
                          fullWidth
                          id="name-input"
                          label="Description"
                          {...field}
                          error={!!(meta.touched && meta.error)}
                          helperText={meta.touched ? meta.error : ''}
                          variant="outlined"
                          size="small"
                          className={classes.textField}
                        />
                      )}
                    </Field>
                  </ListItem>
                  <ListItem>
                    <Field name="position">
                      {({ field, meta }: FieldProps<typeof initialValues['positionApplied']>) => (
                        <Autocomplete
                          id="combo-box-demo"
                          options={positions}
                          getOptionLabel={(option) => `${option.name}`}
                          style={{ width: '98%' }}
                          value={values.positionApplied}
                          onChange={(event: any, newValue: any) =>
                            handlePosition(values, setValues, newValue)
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              fullWidth
                              id="name-input"
                              label="Position on which you want to "
                              required
                              error={!!(meta.touched && meta.error)}
                              helperText={meta.touched ? meta.error : ''}
                              variant="outlined"
                              size="small"
                              className={classes.textField}
                            />
                          )}
                        />
                      )}
                    </Field>
                  </ListItem>
                  <Box className={classes.buttonGroup}>
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      className={classes.button}
                      disabled
                    >
                      Register
                    </Button>
                  </Box>
                </Paper>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default Register;
