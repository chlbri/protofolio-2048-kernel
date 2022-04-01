import { asyncVoidNothing } from '@bemedev/fstate/helpers';
import { createMachine, StateMachine } from 'xstate';
import {
  assignPossibleMoves,
  canMove,
  canMoveDown,
  canMoveLeft,
  canMoveRight,
  canMoveUp,
  inc,
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  rinitGame,
} from '../abr';
import { addRandomNumber } from '../abr/game/actions/random';
import { TEvent } from '../abr/game/events';
import type { TContext } from '../ebr/context';
import { context } from './context';

export const machine = createMachine(
  {
    context,
    tsTypes: {} as import('./machine.typegen').Typegen0,
    schema: {
      context: {} as TContext,
      events: {} as TEvent,
    },
    id: 'mainMachine',
    initial: 'idle',
    states: {
      idle: {
        exit: 'inc',
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
        description: 'Caching actions',
        initial: 'idle',
        states: {
          idle: {
            exit: 'inc',
            invoke: {
              src: 'start',
              onDone: 'addFirstRandom',
              onError: {
                actions: 'addErrorStarting',
                target: 'addFirstRandom',
              },
            },
          },
          addFirstRandom: {
            exit: 'inc',
            always: {
              actions: 'addRandomNumber',
              target: 'addSecondRandom',
            },
          },
          addSecondRandom: {
            exit: 'inc',
            always: {
              actions: 'addRandomNumber',
              target: 'possibleMoves',
            },
          },
          possibleMoves: {
            always: {
              actions: 'assignPossibleMoves',
              target: '#started',
            },
          },
        },
      },
      started: {
        id: 'started',
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
                    exit: 'inc',
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
                id: 'game',
                type: 'parallel',
                states: {
                  movements: {
                    initial: 'fixed',
                    states: {
                      fixed: {
                        exit: 'inc',
                        on: {
                          MOVE_UP: {
                            cond: 'canMoveUp',
                            actions: 'moveUp',
                            target: 'moving',
                          },
                          MOVE_DOWN: {
                            cond: 'canMoveDown',
                            actions: 'moveDown',
                            target: 'moving',
                          },
                          MOVE_LEFT: {
                            cond: 'canMoveLeft',
                            actions: 'moveLeft',
                            target: 'moving',
                          },
                          MOVE_RIGHT: {
                            cond: 'canMoveRight',
                            actions: 'moveRight',
                            target: 'moving',
                          },
                        },
                      },
                      possibleMoves: {
                        always: {
                          actions: 'assignPossibleMoves',
                          target: 'canMove',
                        },
                        exit: 'inc',
                      },
                      moving: {
                        entry: [
                          'startAnimation',
                          'addScore',
                          'addRandomNumber',
                        ],
                        exit: 'inc',
                        after: {
                          moveDuration: {
                            target: 'possibleMoves',
                          },
                        },
                      },
                      canMove: {
                        always: [
                          {
                            cond: 'canMove',
                            target: 'fixed',
                          },
                          'gameover',
                        ],
                        exit: 'inc',
                      },
                      gameover: {
                        initial: 'idle',
                        states: {
                          idle: {
                            on: {
                              'RINIT.GAME': {
                                actions: 'rinitGame',
                                target: 'addFirstRandom',
                              },
                            },
                            exit: 'inc',
                          },
                          addFirstRandom: {
                            exit: 'inc',
                            always: {
                              actions: 'addRandomNumber',
                              target: 'addSecondRandom',
                            },
                          },
                          addSecondRandom: {
                            exit: 'inc',
                            always: {
                              actions: 'addRandomNumber',
                              target: '#game.movements.possibleMoves',
                            },
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
    actions: {
      inc,
      moveUp,
      moveDown,
      moveLeft,
      moveRight,
      addRandomNumber,
      assignPossibleMoves,
      rinitGame,
    },
    services: {
      checkEnvironmentVariables: asyncVoidNothing,
      prepare: asyncVoidNothing as any,
      start: asyncVoidNothing as any,
      autoLog: asyncVoidNothing as any,
    },
    guards: { canMove, canMoveDown, canMoveUp, canMoveRight, canMoveLeft },
  },
);

export type Machine = typeof machine;

export type S_Machine = StateMachine<
  TContext,
  any,
  TEvent,
  any,
  any,
  any,
  any
>;
