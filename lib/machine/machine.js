"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.machine = void 0;
const helpers_1 = require("@bemedev/fstate/helpers");
const xstate_1 = require("xstate");
const abr_1 = require("../abr");
const random_1 = require("../abr/game/actions/random");
const context_1 = require("./context");
exports.machine = (0, xstate_1.createMachine)({
    context: context_1.context,
    tsTypes: {},
    schema: {
        context: {},
        events: {},
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
                            target: '#mainMachine.started.authentication.emailPassword.login',
                        },
                        'REGISTER.EMAIL_PASSWORD': {
                            target: '#mainMachine.started.authentication.emailPassword.register',
                        },
                        'LOGIN.FACEBOOK': {
                            target: '#mainMachine.started.authentication.facebook.login',
                        },
                        'REGISTER.FACEBOOK': {
                            target: '#mainMachine.started.authentication.facebook.register',
                        },
                        'LOGIN.GOOGLE': {
                            target: '#mainMachine.started.authentication.google.login',
                        },
                        'REGISTER.GOOGLE': {
                            target: '#mainMachine.started.authentication.google.register',
                        },
                        'LOGIN.APPLE': {
                            target: '#mainMachine.started.authentication.apple.login',
                        },
                        'REGISTER.APPLE': {
                            target: '#mainMachine.started.authentication.apple.register',
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
                                                    target: 'possibleMoves',
                                                },
                                                MOVE_DOWN: {
                                                    cond: 'canMoveDown',
                                                    actions: 'moveDown',
                                                    target: 'possibleMoves',
                                                },
                                                MOVE_LEFT: {
                                                    cond: 'canMoveLeft',
                                                    actions: 'moveLeft',
                                                    target: 'possibleMoves',
                                                },
                                                MOVE_RIGHT: {
                                                    cond: 'canMoveRight',
                                                    actions: 'moveRight',
                                                    target: 'possibleMoves',
                                                },
                                            },
                                        },
                                        possibleMoves: {
                                            always: {
                                                actions: 'assignPossibleMoves',
                                                target: 'moving',
                                            },
                                            exit: 'inc',
                                        },
                                        moving: {
                                            entry: ['startAnimation', 'addScore'],
                                            exit: 'inc',
                                            after: {
                                                moveDuration: {
                                                    target: 'canMove',
                                                },
                                            },
                                        },
                                        canMove: {
                                            always: [
                                                {
                                                    cond: 'canMove',
                                                    target: 'fixed',
                                                },
                                                'blocked',
                                            ],
                                            exit: 'inc',
                                        },
                                        blocked: {
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
}, {
    delays: {
        timeBeforeAutolog: 70,
        moveDuration: 100,
    },
    actions: {
        inc: abr_1.inc,
        moveUp: abr_1.moveUp,
        moveDown: abr_1.moveDown,
        moveLeft: abr_1.moveLeft,
        moveRight: abr_1.moveRight,
        addRandomNumber: random_1.addRandomNumber,
        assignPossibleMoves: abr_1.assignPossibleMoves,
        rinitGame: abr_1.rinitGame,
    },
    services: {
        checkEnvironmentVariables: helpers_1.asyncVoidNothing,
        prepare: helpers_1.asyncVoidNothing,
        start: helpers_1.asyncVoidNothing,
        autoLog: helpers_1.asyncVoidNothing,
    },
    guards: { canMove: abr_1.canMove, canMoveDown: abr_1.canMoveDown, canMoveUp: abr_1.canMoveUp, canMoveRight: abr_1.canMoveRight, canMoveLeft: abr_1.canMoveLeft },
});
