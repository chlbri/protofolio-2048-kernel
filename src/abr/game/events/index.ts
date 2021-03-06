export type TEvent = {
  type:
    | 'START'
    | 'MOVE_UP'
    | 'MOVE_DOWN'
    | 'MOVE_LEFT'
    | 'MOVE_RIGHT'
    | 'LOGIN.EMAIL_PASSWORD'
    | 'REGISTER.EMAIL_PASSWORD'
    | 'LOGIN.FACEBOOK'
    | 'REGISTER.FACEBOOK'
    | 'LOGIN.GOOGLE'
    | 'REGISTER.GOOGLE'
    | 'LOGIN.APPLE'
    | 'DEAUTHENTICATION.CONFIRMATION.YES'
    | 'DEAUTHENTICATION.CONFIRMATION.NO'
    | 'LOGOUT'
    | 'RINIT.GAME'
    | 'REGISTER.APPLE';
};
