import { createMachine } from 'xstate';
import { Context } from './ebr/context';

export const machine = createMachine({
  context: {
    back: {
      game: {
        cards: [
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
        ],
      },
    },
  },
  id: 'mainMachine',
  schema: {
    context: {} as Context,
  },
  tsTypes: {} as import('./machine.typegen').Typegen0,
  states: {
    idle: {
      description: 'When the app is not launched',
      on: {
        START: {
          description: 'Start the app',
          target: 'checkingEnvVariables',
        },
      },
    },
    checkingEnvVariables: {
      exit: 'inc',
      description: 'If you have env variables to load, you check each',
      always: [
        {
          description: 'Environment variables are loaded\n',
          cond: 'EnvironmentsVariablesAreLoaded',
          target: 'preparing',
        },
        {
          actions: 'addNotEnvVariablesError',
          description: 'Not all envrionment variables are loaded',
          internal: false,
        },
      ],
    },
    preparing: {
      exit: 'inc',
      invoke: {
        src: 'prepare',
        onDone: [
          {
            target: 'starting',
          },
        ],
      },
      description: 'Computer memory checking',
    },
    starting: {
      exit: 'inc',
      invoke: {
        src: 'start',
        onDone: [
          {
            target: 'started',
          },
        ],
      },
      description: 'Caching actions',
    },
    started: {
      initial: 'notAuthenticated',
      description: 'The app is started, first screen',
      states: {
        notAuthenticated: {
          id: 'notAuthenticated',
          exit: 'inc',
          after: {
            timeBeforeAutolog: {
              target: 'authentication.autoLog',
            },
          },
          on: {
            'LOGIN.EMAIL_PASSWORD': {
              target: 'authentication.emailPassword.login',
            },
            'REGISTER.EMAIL_PASSWORD': {
              target: 'authentication.emailPassword.register',
            },
            'LOGIN.FACEBOOK': {
              target: 'authentication.facebook.login',
            },
            'REGISTER.FACEBOOK': {
              target: 'authentication.facebook.register',
            },
            'LOGIN.GOOGLE': {
              target: 'authentication.google.login',
            },
            'REGISTER.GOOGLE': {
              target: 'authentication.google.register',
            },
            'LOGIN.APPLE': {
              target: 'authentication.apple.login',
            },
            'REGISTER.APPLE': {
              target: 'authentication.apple.register',
            },
          },
        },

        authentication: {
          type: 'parallel',
          states: {
            emailPassword: {
              type: 'parallel',
              states: {
                login: {
                  exit: 'inc',
                  invoke: {
                    src: 'logByEmailPassword',
                    onDone: [
                      {
                        target: '#authenticated',
                      },
                    ],
                    onError: [
                      {
                        actions: 'addLogByEmailPasswordError',
                        target: '#notAuthenticated',
                      },
                    ],
                  },
                },
                register: {
                  exit: 'inc',
                  invoke: {
                    src: 'registerByEmailPassword',
                    onDone: [
                      {
                        target: '#authenticated',
                      },
                    ],
                    onError: [
                      {
                        actions: 'addRegisterByEmailPAsswordError',
                        target: '#notAuthenticated',
                      },
                    ],
                  },
                },
              },
            },
            facebook: {
              type: 'parallel',
              states: {
                login: {
                  exit: 'inc',
                  invoke: {
                    src: 'logByFacebook',
                    onDone: [
                      {
                        target: '#authenticated',
                      },
                    ],
                    onError: [
                      {
                        actions: 'adLogByFacebookError',
                        target: '#notAuthenticated',
                      },
                    ],
                  },
                },
                register: {
                  exit: 'inc',
                  invoke: {
                    src: 'registerByFacebook',
                    onDone: [
                      {
                        target: '#authenticated',
                      },
                    ],
                    onError: [
                      {
                        actions: 'addRegisterByPasswordError',
                        target: '#notAuthenticated',
                      },
                    ],
                  },
                },
              },
            },
            google: {
              type: 'parallel',
              states: {
                login: {
                  exit: 'i,nc',
                  invoke: {
                    src: 'logByGoogle',
                    onDone: [
                      {
                        target: '#authenticated',
                      },
                    ],
                    onError: [
                      {
                        actions: 'addLogByGoogleError',
                        target: '#notAuthenticated',
                      },
                    ],
                  },
                },
                register: {
                  exit: 'inc',
                  invoke: {
                    src: 'registerByGoogle',
                    onDone: [
                      {
                        target: '#authenticated',
                      },
                    ],
                    onError: [
                      {
                        actions: 'addRegisterByGoogleError',
                        target: '#notAuthenticated',
                      },
                    ],
                  },
                },
              },
            },
            apple: {
              type: 'parallel',
              states: {
                login: {
                  exit: 'inc',
                  invoke: {
                    src: 'logByApple',
                    onDone: [
                      {
                        target: '#authenticated',
                      },
                    ],
                    onError: [
                      {
                        actions: 'addLogByAppleError',
                        target: '#notAuthenticated',
                      },
                    ],
                  },
                },
                register: {
                  exit: 'inc',
                  invoke: {
                    src: 'registerByApple',
                    onDone: [
                      {
                        target: '#authenticated',
                      },
                    ],
                    onError: [
                      {
                        actions: 'addRegisterByAppleError',
                        target: '#notAuthenticated',
                      },
                    ],
                  },
                },
              },
            },
            autoLog: {
              exit: 'inc',
              invoke: {
                src: 'autoLog',
                onDone: [
                  {
                    target: '#authenticated',
                  },
                ],
                onError: [
                  {
                    target: '#notAuthenticated',
                  },
                ],
              },
            },
          },
        },

        deauthentication: {
          invoke: {
            src: 'deauthenticate',
            onDone: '#notAuthenticated',
            onError: {
              target: '#notAuthenticated',
              actions: ['reportErrorDeauthentication'],
            },
          },
        },

        authenticated: {
          id: 'authenticated',
          exit: 'inc',
          type: 'parallel',
          states: {
            game: {
              type: 'parallel',
              states: {
                movements: {
                  states: {
                    fixed: {
                      on: {
                        MOVE_UP: {
                          cond: 'canMoveUp',
                          actions: ['moveUp'],
                          target: 'moving',
                        },
                        MOVE_DOWN: {
                          cond: 'canMoveDown',
                          actions: ['moveDown'],
                          target: 'moving',
                        },
                        MOVE_LEFT: {
                          cond: 'canMoveLeft',
                          actions: ['moveLeft'],
                          target: 'moving',
                        },
                        MOVE_RIGHT: {
                          cond: 'canMoveRight',
                          actions: ['moveRight'],
                          target: 'moving',
                        },
                      },
                    },
                    moving: {
                      entry: ['startAnimation'],
                      after: {
                        moveDuration: 'fixed',
                      },
                      exit: 'inc',
                    },
                  },
                },
              },
            },
          },
          on: {
            LOGOUT: {
              target: 'deauthentication',
            },
          },
        },
      },
    },
  },
});
