import cookie from 'js-cookie';

export const authenticate = (response, next) => {
  console.log('AUTHENTICATE HELPER ON SIGNIN RESPONSE', response.data.token);

  cookie.set('token', response.data.token);

  next();
};
