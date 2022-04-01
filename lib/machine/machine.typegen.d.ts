export interface Typegen0 {
    '@@xstate/typegen': true;
    eventsCausingActions: {
        addNotEnvVariablesError: 'error.platform.mainMachine.checkingEnvVariables:invocation[0]';
        addErrorStarting: 'error.platform.mainMachine.starting.idle:invocation[0]';
        addRandomNumber: '' | 'MOVE_UP' | 'MOVE_DOWN' | 'MOVE_LEFT' | 'MOVE_RIGHT';
        addLogByEmailPasswordError: 'error.platform.mainMachine.started.authentication.emailPassword.login:invocation[0]';
        addRegisterByEmailPAsswordError: 'error.platform.mainMachine.started.authentication.emailPassword.register:invocation[0]';
        adLogByFacebookError: 'error.platform.mainMachine.started.authentication.facebook.login:invocation[0]';
        addRegisterByPasswordError: 'error.platform.mainMachine.started.authentication.facebook.register:invocation[0]';
        addLogByGoogleError: 'error.platform.mainMachine.started.authentication.google.login:invocation[0]';
        addRegisterByGoogleError: 'error.platform.mainMachine.started.authentication.google.register:invocation[0]';
        addLogByAppleError: 'error.platform.mainMachine.started.authentication.apple.login:invocation[0]';
        addRegisterByAppleError: 'error.platform.mainMachine.started.authentication.apple.register:invocation[0]';
        reportErrorDeauthentication: 'error.platform.mainMachine.started.deauthentication.processing:invocation[0]';
        moveUp: 'MOVE_UP';
        moveDown: 'MOVE_DOWN';
        moveLeft: 'MOVE_LEFT';
        moveRight: 'MOVE_RIGHT';
        inc: 'xstate.init';
        startAnimation: 'MOVE_UP' | 'MOVE_DOWN' | 'MOVE_LEFT' | 'MOVE_RIGHT';
        addScore: 'MOVE_UP' | 'MOVE_DOWN' | 'MOVE_LEFT' | 'MOVE_RIGHT';
    };
    internalEvents: {
        'error.platform.mainMachine.checkingEnvVariables:invocation[0]': {
            type: 'error.platform.mainMachine.checkingEnvVariables:invocation[0]';
            data: unknown;
        };
        'error.platform.mainMachine.starting.idle:invocation[0]': {
            type: 'error.platform.mainMachine.starting.idle:invocation[0]';
            data: unknown;
        };
        '': {
            type: '';
        };
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
        'error.platform.mainMachine.started.deauthentication.processing:invocation[0]': {
            type: 'error.platform.mainMachine.started.deauthentication.processing:invocation[0]';
            data: unknown;
        };
        'error.platform.mainMachine.started.authentication.autoLog:invocation[0]': {
            type: 'error.platform.mainMachine.started.authentication.autoLog:invocation[0]';
            data: unknown;
        };
        'done.invoke.mainMachine.started.deauthentication.processing:invocation[0]': {
            type: 'done.invoke.mainMachine.started.deauthentication.processing:invocation[0]';
            data: unknown;
            __tip: 'See the XState TS docs to learn how to strongly type this.';
        };
        'done.invoke.mainMachine.checkingEnvVariables:invocation[0]': {
            type: 'done.invoke.mainMachine.checkingEnvVariables:invocation[0]';
            data: unknown;
            __tip: 'See the XState TS docs to learn how to strongly type this.';
        };
        'xstate.after(timeBeforeAutolog)#mainMachine.started.notAuthenticated': {
            type: 'xstate.after(timeBeforeAutolog)#mainMachine.started.notAuthenticated';
        };
        'xstate.init': {
            type: 'xstate.init';
        };
    };
    invokeSrcNameMap: {
        checkEnvironmentVariables: 'done.invoke.mainMachine.checkingEnvVariables:invocation[0]';
        prepare: 'done.invoke.mainMachine.preparing:invocation[0]';
        start: 'done.invoke.mainMachine.starting.idle:invocation[0]';
        logByEmailPassword: 'done.invoke.mainMachine.started.authentication.emailPassword.login:invocation[0]';
        registerByEmailPassword: 'done.invoke.mainMachine.started.authentication.emailPassword.register:invocation[0]';
        logByFacebook: 'done.invoke.mainMachine.started.authentication.facebook.login:invocation[0]';
        registerByFacebook: 'done.invoke.mainMachine.started.authentication.facebook.register:invocation[0]';
        logByGoogle: 'done.invoke.mainMachine.started.authentication.google.login:invocation[0]';
        registerByGoogle: 'done.invoke.mainMachine.started.authentication.google.register:invocation[0]';
        logByApple: 'done.invoke.mainMachine.started.authentication.apple.login:invocation[0]';
        registerByApple: 'done.invoke.mainMachine.started.authentication.apple.register:invocation[0]';
        autoLog: 'done.invoke.mainMachine.started.authentication.autoLog:invocation[0]';
        deauthenticate: 'done.invoke.mainMachine.started.deauthentication.processing:invocation[0]';
    };
    missingImplementations: {
        actions: 'addNotEnvVariablesError' | 'addErrorStarting' | 'addLogByEmailPasswordError' | 'addRegisterByEmailPAsswordError' | 'adLogByFacebookError' | 'addRegisterByPasswordError' | 'addLogByGoogleError' | 'addRegisterByGoogleError' | 'addLogByAppleError' | 'addRegisterByAppleError' | 'reportErrorDeauthentication' | 'startAnimation' | 'addScore';
        services: 'logByEmailPassword' | 'registerByEmailPassword' | 'logByFacebook' | 'registerByFacebook' | 'logByGoogle' | 'registerByGoogle' | 'logByApple' | 'registerByApple' | 'deauthenticate';
        guards: never;
        delays: never;
    };
    eventsCausingServices: {
        checkEnvironmentVariables: 'START';
        prepare: 'done.invoke.mainMachine.checkingEnvVariables:invocation[0]';
        start: 'xstate.init';
        logByEmailPassword: 'LOGIN.EMAIL_PASSWORD';
        registerByEmailPassword: 'REGISTER.EMAIL_PASSWORD';
        logByFacebook: 'LOGIN.FACEBOOK';
        registerByFacebook: 'REGISTER.FACEBOOK';
        logByGoogle: 'LOGIN.GOOGLE';
        registerByGoogle: 'REGISTER.GOOGLE';
        logByApple: 'LOGIN.APPLE';
        registerByApple: 'REGISTER.APPLE';
        autoLog: 'xstate.after(timeBeforeAutolog)#mainMachine.started.notAuthenticated';
        deauthenticate: 'xstate.init';
    };
    eventsCausingGuards: {};
    eventsCausingDelays: {
        timeBeforeAutolog: 'xstate.init';
        moveDuration: 'xstate.init';
    };
    matchesStates: 'idle' | 'checkingEnvVariables' | 'preparing' | 'starting' | 'starting.idle' | 'starting.addFirstRandom' | 'starting.addSecondRandom' | 'started' | 'started.notAuthenticated' | 'started.authentication' | 'started.authentication.emailPassword' | 'started.authentication.emailPassword.login' | 'started.authentication.emailPassword.register' | 'started.authentication.facebook' | 'started.authentication.facebook.login' | 'started.authentication.facebook.register' | 'started.authentication.google' | 'started.authentication.google.login' | 'started.authentication.google.register' | 'started.authentication.apple' | 'started.authentication.apple.login' | 'started.authentication.apple.register' | 'started.authentication.autoLog' | 'started.deauthentication' | 'started.deauthentication.processing' | 'started.deauthentication.confirmation' | 'started.authenticated' | 'started.authenticated.game' | 'started.authenticated.game.movements' | 'started.authenticated.game.movements.fixed' | 'started.authenticated.game.movements.moving' | {
        starting?: 'idle' | 'addFirstRandom' | 'addSecondRandom';
        started?: 'notAuthenticated' | 'authentication' | 'deauthentication' | 'authenticated' | {
            authentication?: 'emailPassword' | 'facebook' | 'google' | 'apple' | 'autoLog' | {
                emailPassword?: 'login' | 'register';
                facebook?: 'login' | 'register';
                google?: 'login' | 'register';
                apple?: 'login' | 'register';
            };
            deauthentication?: 'processing' | 'confirmation';
            authenticated?: 'game' | {
                game?: 'movements' | {
                    movements?: 'fixed' | 'moving';
                };
            };
        };
    };
    tags: never;
}
