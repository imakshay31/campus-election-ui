import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Image from 'next/image';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import * as yup from 'yup';
import axios from 'axios';
import { authenticate } from '../components/utils';
import { useRouter } from 'next/router';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { InputAdornment, IconButton } from '@material-ui/core';
import { Formik, Form, Field, FieldProps } from 'formik';
import { ComponentProps } from './_app';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url('/Vector2.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light' ? 'white' : theme.palette.grey[800],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down('md')]: {
      backgroundColor: `#3997F5`,
    },
    [theme.breakpoints.down('xs')]: {
      backgroundColor: theme.palette.type === 'light' ? 'white' : theme.palette.grey[800],
    },
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#3997F5',
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  vector: {
    width: '100%',
    marginTop: theme.spacing(4),
  },
  imageV: {
    width: '100% !important',
    marginLeft: `${theme.spacing(8)} !important`,
    height: '600px',
  },
  link: {
    cursor: 'pointer',
  },
}));
const VectorImg = (classes) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  if (mobile) {
    return (
      <Box className={classes.vector}>
        <Image
          src="/signin.png"
          alt="logo"
          className={classes.imageV}
          width={window.innerWidth}
          height={window.innerWidth / 1.25}
        />
      </Box>
    );
  }
  return (
    <Box className={classes.vector}>
      <Image src="/signin.png" alt="logo" className={classes.imageV} width={460} height={367} />
    </Box>
  );
};
const SignIn: React.FC<ComponentProps> = ({ setErrorMessage, setSuccessMessage }) => {
  const classes = useStyles();
  const [formData, setFormData] = React.useState({ email: '', password: '', text: 'Sign Up' });

  const [visible, setVisible] = React.useState(false);
  const router = useRouter();

  const handleShowPassword = () => {
    setVisible(!visible);
  };
  const handleChange = (field: string) => (e: any) => {
    setFormData({ ...formData, [field]: e.target.value });
  };
  const initialValues = {
    password: '',
    email: '',
  };

  const validationSchema = yup.object({
    email: yup.string().email('Provide a valid Email ID').required('Email cannot be empty'),
    password: yup
      .string()
      .min(6, 'Password must be minimum of 6 characters')
      .required('Password cannot be empty'),
  });

  const handleSubmit = (values: typeof initialValues) => {
    setFormData({ ...formData, text: 'Submitting .....' });

    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND}/api/register`, { ...values })
      .then((response) => {
        authenticate(response, () => {
          router.push('/dashboard');
        });
        setSuccessMessage('Successfully signed in');
      })
      .catch((error) => {
        setFormData({ ...formData, text: 'Sign Up' });
        setErrorMessage(error.response.data.errors);
        return error;
      });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={6} component={Paper} elevation={0} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h2">
            Sign Up
          </Typography>
          <Formik
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={validationSchema}
            initialValues={initialValues}
          >
            <Form aria-label="login up form" id="log-in-form">
              <Field name="email">
                {({ field, meta }: FieldProps<typeof initialValues['email']>) => (
                  <TextField
                    fullWidth
                    id="name-input"
                    label="Email Address"
                    required
                    {...field}
                    error={!!(meta.touched && meta.error)}
                    helperText={meta.touched ? meta.error : ''}
                    variant="outlined"
                    // className={classes.field}
                    margin="normal"
                  />
                )}
              </Field>
              <Field name="password">
                {({ field, meta }: FieldProps<typeof initialValues['password']>) => (
                  <TextField
                    fullWidth
                    id="password-input"
                    label="Password"
                    required
                    {...field}
                    error={!!(meta.touched && meta.error)}
                    helperText={meta.touched ? meta.error : ''}
                    variant="outlined"
                    // className={classes.field}
                    margin="normal"
                    type={visible ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleShowPassword}
                            edge="end"
                          >
                            {visible ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              </Field>

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                color="primary"
              >
                {formData.text}
              </Button>
              <Grid container>
                <Grid item>
                  <Link
                    onClick={() => router.push('/login')}
                    variant="body2"
                    className={classes.link}
                  >
                    {'Already have an Account ? Log In'}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
      </Grid>

      <Grid item xs={false} sm={6} className={classes.image}>
        <VectorImg classes={classes} />
      </Grid>
    </Grid>
  );
};

export default SignIn;
