// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    addNotEnvVariablesError: '';
    addLogByEmailPasswordError: 'error.platform.mainMachine.started.authentication.emailPassword.login:invocation[0]';
    addRegisterByEmailPAsswordError: 'error.platform.mainMachine.started.authentication.emailPassword.register:invocation[0]';
    adLogByFacebookError: 'error.platform.mainMachine.started.authentication.facebook.login:invocation[0]';
    addRegisterByPasswordError: 'error.platform.mainMachine.started.authentication.facebook.register:invocation[0]';
    addLogByGoogleError: 'error.platform.mainMachine.started.authentication.google.login:invocation[0]';
    addRegisterByGoogleError: 'error.platform.mainMachine.started.authentication.google.register:invocation[0]';
    addLogByAppleError: 'error.platform.mainMachine.started.authentication.apple.login:invocation[0]';
    addRegisterByAppleError: 'error.platform.mainMachine.started.authentication.apple.register:invocation[0]';
    reportErrorDeauthentication: 'error.platform.mainMachine.started.deauthentication:invocation[0]';
    moveUp: 'MOVE_UP';
    moveDown: 'MOVE_DOWN';
    moveLeft: 'MOVE_LEFT';
    moveRight: 'MOVE_RIGHT';
    inc: 'xstate.init';
    'i,nc': 'xstate.init';
    startAnimation: 'MOVE_UP' | 'MOVE_DOWN' | 'MOVE_LEFT' | 'MOVE_RIGHT';
  };
  internalEvents: {
    '': { type: '' };
    'error.platform.mainMachine.started.authentication.emailPassword.login:invocation[0]': {
      type: 'error.platform.mainMachine.started.authentication.emailPassword.login:invocation[0]';
      data: unknown;
    };
    'error.platform.mainMachine.started.authentication.emailPassword.register:invocation[0]': {
      type: 'error.platform.mainMachine.started.authentication.emailPassword.register:invocation[0]';
      data: unknown;
    };
    'error.platform.mainMachine.started.authentication.facebook.login:invocation[0]': {
      type: 'error.platform.mainMachine.started.authentication.facebook.login:invocation[0]';
      data: unknown;
    };
    'error.platform.mainMachine.started.authentication.facebook.register:invocation[0]': {
      type: 'error.platform.mainMachine.started.authentication.facebook.register:invocation[0]';
      data: unknown;
    };
    'error.platform.mainMachine.started.authentication.google.login:invocation[0]': {
      type: 'error.platform.mainMachine.started.authentication.google.login:invocation[0]';
      data: unknown;
    };
    'error.platform.mainMachine.started.authentication.google.register:invocation[0]': {
      type: 'error.platform.mainMachine.started.authentication.google.register:invocation[0]';
      data: unknown;
    };
    'error.platform.mainMachine.started.authentication.apple.login:invocation[0]': {
      type: 'error.platform.mainMachine.started.authentication.apple.login:invocation[0]';
      data: unknown;
    };
    'error.platform.mainMachine.started.authentication.apple.register:invocation[0]': {
      type: 'error.platform.mainMachine.started.authentication.apple.register:invocation[0]';
      data: unknown;
    };
    'error.platform.mainMachine.started.deauthentication:invocation[0]': {
      type: 'error.platform.mainMachine.started.deauthentication:invocation[0]';
      data: unknown;
    };
    'error.platform.mainMachine.started.authentication.autoLog:invocation[0]': {
      type: 'error.platform.mainMachine.started.authentication.autoLog:invocation[0]';
      data: unknown;
    };
    'done.invoke.mainMachine.started.deauthentication:invocation[0]': {
      type: 'done.invoke.mainMachine.started.deauthentication:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.mainMachine.preparing:invocation[0]': {
      type: 'done.invoke.mainMachine.preparing:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'xstate.after(timeBeforeAutolog)#notAuthenticated': {
      type: 'xstate.after(timeBeforeAutolog)#notAuthenticated';
    };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    prepare: 'done.invoke.mainMachine.preparing:invocation[0]';
    start: 'done.invoke.mainMachine.starting:invocation[0]';
    logByEmailPassword: 'done.invoke.mainMachine.started.authentication.emailPassword.login:invocation[0]';
    registerByEmailPassword: 'done.invoke.mainMachine.started.authentication.emailPassword.register:invocation[0]';
    logByFacebook: 'done.invoke.mainMachine.started.authentication.facebook.login:invocation[0]';
    registerByFacebook: 'done.invoke.mainMachine.started.authentication.facebook.register:invocation[0]';
    logByGoogle: 'done.invoke.mainMachine.started.authentication.google.login:invocation[0]';
    registerByGoogle: 'done.invoke.mainMachine.started.authentication.google.register:invocation[0]';
    logByApple: 'done.invoke.mainMachine.started.authentication.apple.login:invocation[0]';
    registerByApple: 'done.invoke.mainMachine.started.authentication.apple.register:invocation[0]';
    autoLog: 'done.invoke.mainMachine.started.authentication.autoLog:invocation[0]';
    deauthenticate: 'done.invoke.mainMachine.started.deauthentication:invocation[0]';
  };
  missingImplementations: {
    actions:
      | 'addNotEnvVariablesError'
      | 'addLogByEmailPasswordError'
      | 'addRegisterByEmailPAsswordError'
      | 'adLogByFacebookError'
      | 'addRegisterByPasswordError'
      | 'addLogByGoogleError'
      | 'addRegisterByGoogleError'
      | 'addLogByAppleError'
      | 'addRegisterByAppleError'
      | 'reportErrorDeauthentication'
      | 'moveUp'
      | 'moveDown'
      | 'moveLeft'
      | 'moveRight'
      | 'inc'
      | 'i,nc'
      | 'startAnimation';
    services:
      | 'prepare'
      | 'start'
      | 'logByEmailPassword'
      | 'registerByEmailPassword'
      | 'logByFacebook'
      | 'registerByFacebook'
      | 'logByGoogle'
      | 'registerByGoogle'
      | 'logByApple'
      | 'registerByApple'
      | 'autoLog'
      | 'deauthenticate';
    guards:
      | 'EnvironmentsVariablesAreLoaded'
      | 'canMoveUp'
      | 'canMoveDown'
      | 'canMoveLeft'
      | 'canMoveRight';
    delays: 'timeBeforeAutolog' | 'moveDuration';
  };
  eventsCausingServices: {
    prepare: '';
    start: 'done.invoke.mainMachine.preparing:invocation[0]';
    logByEmailPassword: 'LOGIN.EMAIL_PASSWORD';
    registerByEmailPassword: 'REGISTER.EMAIL_PASSWORD';
    logByFacebook: 'LOGIN.FACEBOOK';
    registerByFacebook: 'REGISTER.FACEBOOK';
    logByGoogle: 'LOGIN.GOOGLE';
    registerByGoogle: 'REGISTER.GOOGLE';
    logByApple: 'LOGIN.APPLE';
    registerByApple: 'REGISTER.APPLE';
    autoLog: 'xstate.after(timeBeforeAutolog)#notAuthenticated';
    deauthenticate: 'LOGOUT';
  };
  eventsCausingGuards: {
    EnvironmentsVariablesAreLoaded: '';
    canMoveUp: 'MOVE_UP';
    canMoveDown: 'MOVE_DOWN';
    canMoveLeft: 'MOVE_LEFT';
    canMoveRight: 'MOVE_RIGHT';
  };
  eventsCausingDelays: {
    timeBeforeAutolog: 'xstate.init';
    moveDuration: 'xstate.init';
  };
  matchesStates:
    | 'idle'
    | 'checkingEnvVariables'
    | 'preparing'
    | 'starting'
    | 'started'
    | 'started.notAuthenticated'
    | 'started.authentication'
    | 'started.authentication.emailPassword'
    | 'started.authentication.emailPassword.login'
    | 'started.authentication.emailPassword.register'
    | 'started.authentication.facebook'
    | 'started.authentication.facebook.login'
    | 'started.authentication.facebook.register'
    | 'started.authentication.google'
    | 'started.authentication.google.login'
    | 'started.authentication.google.register'
    | 'started.authentication.apple'
    | 'started.authentication.apple.login'
    | 'started.authentication.apple.register'
    | 'started.authentication.autoLog'
    | 'started.deauthentication'
    | 'started.authenticated'
    | 'started.authenticated.game'
    | 'started.authenticated.game.movements'
    | 'started.authenticated.game.movements.fixed'
    | 'started.authenticated.game.movements.moving'
    | {
        started?:
          | 'notAuthenticated'
          | 'authentication'
          | 'deauthentication'
          | 'authenticated'
          | {
              authentication?:
                | 'emailPassword'
                | 'facebook'
                | 'google'
                | 'apple'
                | 'autoLog'
                | {
                    emailPassword?: 'login' | 'register';
                    facebook?: 'login' | 'register';
                    google?: 'login' | 'register';
                    apple?: 'login' | 'register';
                  };
              authenticated?:
                | 'game'
                | {
                    game?:
                      | 'movements'
                      | { movements?: 'fixed' | 'moving' };
                  };
            };
      };
  tags: never;
}
