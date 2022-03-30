import { createMachine } from 'xstate';
import { Context } from '../ebr/context';
import { context } from './context';

export const machine = createMachine(
  {
    context,
    tsTypes: {} as import('./machine.typegen').Typegen0,
    schema: {
      context: {} as Context,
    },
    id: 'mainMachine',
    states: {
      idle: {
        description: 'When the app is not launched',
        on: {
          START: {
            target: 'checkingEnvVariables',
          },
        },
      },
      checkingEnvVariables: {
        exit: 'inc',
        description: 'If you have env variables to load, you check each',
        invoke: {
          src: 'checkEnvironmentVariables',
          onDone: [
            {
              cond: 'EnvironmentsVariablesAreLoaded',
              target: 'preparing',
            },
          ],
          onError: [
            {
              actions: 'addNotEnvVariablesError',
            },
          ],
        },
      },
      preparing: {
        exit: 'inc',
        description: 'Computer memory checking',
        invoke: {
          src: 'prepare',
          onDone: [
            {
              target: 'starting',
            },
          ],
        },
      },
      starting: {
        exit: 'inc',
        description: 'Caching actions',
        invoke: {
          src: 'start',
          onDone: [
            {
              target: 'started',
            },
          ],
        },
      },
      started: {
        description: 'The app is started, first screen',
        initial: 'notAuthenticated',
        states: {
          notAuthenticated: {
            exit: 'inc',
            after: {
              timeBeforeAutolog: {
                target: '#mainMachine.started.authentication.autoLog',
              },
            },
            on: {
              'LOGIN.EMAIL_PASSWORD': {
                target:
                  '#mainMachine.started.authentication.emailPassword.login',
              },
              'REGISTER.EMAIL_PASSWORD': {
                target:
                  '#mainMachine.started.authentication.emailPassword.register',
              },
              'LOGIN.FACEBOOK': {
                target:
                  '#mainMachine.started.authentication.facebook.login',
              },
              'REGISTER.FACEBOOK': {
                target:
                  '#mainMachine.started.authentication.facebook.register',
              },
              'LOGIN.GOOGLE': {
                target: '#mainMachine.started.authentication.google.login',
              },
              'REGISTER.GOOGLE': {
                target:
                  '#mainMachine.started.authentication.google.register',
              },
              'LOGIN.APPLE': {
                target: '#mainMachine.started.authentication.apple.login',
              },
              'REGISTER.APPLE': {
                target:
                  '#mainMachine.started.authentication.apple.register',
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
                          target: '#mainMachine.started.authenticated',
                        },
                      ],
                      onError: [
                        {
                          actions: 'addLogByEmailPasswordError',
                          target: '#mainMachine.started.notAuthenticated',
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
                          target: '#mainMachine.started.authenticated',
                        },
                      ],
                      onError: [
                        {
                          actions: 'addRegisterByEmailPAsswordError',
                          target: '#mainMachine.started.notAuthenticated',
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
                          target: '#mainMachine.started.authenticated',
                        },
                      ],
                      onError: [
                        {
                          actions: 'adLogByFacebookError',
                          target: '#mainMachine.started.notAuthenticated',
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
                          target: '#mainMachine.started.authenticated',
                        },
                      ],
                      onError: [
                        {
                          actions: 'addRegisterByPasswordError',
                          target: '#mainMachine.started.notAuthenticated',
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
                          target: '#mainMachine.started.authenticated',
                        },
                      ],
                      onError: [
                        {
                          actions: 'addLogByGoogleError',
                          target: '#mainMachine.started.notAuthenticated',
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
                          target: '#mainMachine.started.authenticated',
                        },
                      ],
                      onError: [
                        {
                          actions: 'addRegisterByGoogleError',
                          target: '#mainMachine.started.notAuthenticated',
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
                          target: '#mainMachine.started.authenticated',
                        },
                      ],
                      onError: [
                        {
                          actions: 'addLogByAppleError',
                          target: '#mainMachine.started.notAuthenticated',
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
                          target: '#mainMachine.started.authenticated',
                        },
                      ],
                      onError: [
                        {
                          actions: 'addRegisterByAppleError',
                          target: '#mainMachine.started.notAuthenticated',
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
                      target: '#mainMachine.started.authenticated',
                    },
                  ],
                  onError: [
                    {
                      target: '#mainMachine.started.notAuthenticated',
                    },
                  ],
                },
              },
            },
          },
          deauthentication: {
            states: {
              processing: {
                invoke: {
                  src: 'deauthenticate',
                  onDone: [
                    {
                      target: '#mainMachine.started.notAuthenticated',
                    },
                  ],
                  onError: [
                    {
                      actions: 'reportErrorDeauthentication',
                      target: '#mainMachine.started.notAuthenticated',
                    },
                  ],
                },
              },
              confirmation: {
                on: {
                  'DEAUTHENTICATION.CONFIRMATION.YES': {
                    target: '#mainMachine.started.notAuthenticated',
                  },
                  'DEAUTHENTICATION.CONFIRMATION.NO': {
                    target: '#mainMachine.started.authenticated',
                  },
                },
              },
            },
          },
          authenticated: {
            exit: 'inc',
            type: 'parallel',
            states: {
              game: {
                type: 'parallel',
                states: {
                  movements: {
                    states: {
                      fixed: {
                        exit: 'inc',
                        on: {
                          MOVE_UP: {
                            actions: 'moveUp',
                            cond: 'canMoveUp',
                            target: 'moving',
                          },
                          MOVE_DOWN: {
                            actions: 'moveDown',
                            cond: 'canMoveDown',
                            target: 'moving',
                          },
                          MOVE_LEFT: {
                            actions: 'moveLeft',
                            cond: 'canMoveLeft',
                            target: 'moving',
                          },
                          MOVE_RIGHT: {
                            actions: 'moveRight',
                            cond: 'canMoveRight',
                            target: 'moving',
                          },
                        },
                      },
                      moving: {
                        entry: ['startAnimation', 'addScore'],
                        exit: 'inc',
                        after: {
                          moveDuration: {
                            target: 'fixed',
                          },
                        },
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
  },
  {
    delays: {
      timeBeforeAutolog: 70,
      moveDuration: 100,
    },
    actions: {},
    services: {},
    guards: {},
  },
);

export type Machine = typeof machine;
