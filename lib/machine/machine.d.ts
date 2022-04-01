import { StateMachine } from 'xstate';
import { TEvent } from '../abr/game/events';
import type { TContext } from '../ebr/context';
export declare const machine: StateMachine<{
    back: {
        game: {
            statitics?: {} | undefined;
            cards: [number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined];
            score: number;
            moves: number;
            possibleMoves: {
                left: boolean;
                right: boolean;
                up: boolean;
                down: boolean;
            };
        };
    };
    iterator: number;
}, any, TEvent, {
    value: any;
    context: {
        back: {
            game: {
                statitics?: {} | undefined;
                cards: [number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined];
                score: number;
                moves: number;
                possibleMoves: {
                    left: boolean;
                    right: boolean;
                    up: boolean;
                    down: boolean;
                };
            };
        };
        iterator: number;
    };
}, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("./machine.typegen").Typegen0 & {
    indexedActions: import("xstate").IndexByType<import("xstate").BaseActionObject>;
    indexedEvents: import("xstate").IndexByType<TEvent> & Pick<{
        'error.platform.mainMachine.checkingEnvVariables:invocation[0]': {
            type: "error.platform.mainMachine.checkingEnvVariables:invocation[0]";
            data: unknown;
        };
        'error.platform.mainMachine.starting.idle:invocation[0]': {
            type: "error.platform.mainMachine.starting.idle:invocation[0]";
            data: unknown;
        };
        '': {
            type: "";
        };
        'error.platform.mainMachine.started.authentication.emailPassword.login:invocation[0]': {
            type: "error.platform.mainMachine.started.authentication.emailPassword.login:invocation[0]";
            data: unknown;
        };
        'error.platform.mainMachine.started.authentication.emailPassword.register:invocation[0]': {
            type: "error.platform.mainMachine.started.authentication.emailPassword.register:invocation[0]";
            data: unknown;
        };
        'error.platform.mainMachine.started.authentication.facebook.login:invocation[0]': {
            type: "error.platform.mainMachine.started.authentication.facebook.login:invocation[0]";
            data: unknown;
        };
        'error.platform.mainMachine.started.authentication.facebook.register:invocation[0]': {
            type: "error.platform.mainMachine.started.authentication.facebook.register:invocation[0]";
            data: unknown;
        };
        'error.platform.mainMachine.started.authentication.google.login:invocation[0]': {
            type: "error.platform.mainMachine.started.authentication.google.login:invocation[0]";
            data: unknown;
        };
        'error.platform.mainMachine.started.authentication.google.register:invocation[0]': {
            type: "error.platform.mainMachine.started.authentication.google.register:invocation[0]";
            data: unknown;
        };
        'error.platform.mainMachine.started.authentication.apple.login:invocation[0]': {
            type: "error.platform.mainMachine.started.authentication.apple.login:invocation[0]";
            data: unknown;
        };
        'error.platform.mainMachine.started.authentication.apple.register:invocation[0]': {
            type: "error.platform.mainMachine.started.authentication.apple.register:invocation[0]";
            data: unknown;
        };
        'error.platform.mainMachine.started.deauthentication.processing:invocation[0]': {
            type: "error.platform.mainMachine.started.deauthentication.processing:invocation[0]";
            data: unknown;
        };
        'error.platform.mainMachine.started.authentication.autoLog:invocation[0]': {
            type: "error.platform.mainMachine.started.authentication.autoLog:invocation[0]";
            data: unknown;
        };
        'done.invoke.mainMachine.started.deauthentication.processing:invocation[0]': {
            type: "done.invoke.mainMachine.started.deauthentication.processing:invocation[0]";
            data: unknown;
            __tip: "See the XState TS docs to learn how to strongly type this.";
        };
        'done.invoke.mainMachine.checkingEnvVariables:invocation[0]': {
            type: "done.invoke.mainMachine.checkingEnvVariables:invocation[0]";
            data: unknown;
            __tip: "See the XState TS docs to learn how to strongly type this.";
        };
        'xstate.after(timeBeforeAutolog)#mainMachine.started.notAuthenticated': {
            type: "xstate.after(timeBeforeAutolog)#mainMachine.started.notAuthenticated";
        };
        'xstate.init': {
            type: "xstate.init";
        };
    }, "" | "error.platform.mainMachine.checkingEnvVariables:invocation[0]" | "error.platform.mainMachine.starting.idle:invocation[0]" | "error.platform.mainMachine.started.authentication.emailPassword.login:invocation[0]" | "error.platform.mainMachine.started.authentication.emailPassword.register:invocation[0]" | "error.platform.mainMachine.started.authentication.facebook.login:invocation[0]" | "error.platform.mainMachine.started.authentication.facebook.register:invocation[0]" | "error.platform.mainMachine.started.authentication.google.login:invocation[0]" | "error.platform.mainMachine.started.authentication.google.register:invocation[0]" | "error.platform.mainMachine.started.authentication.apple.login:invocation[0]" | "error.platform.mainMachine.started.authentication.apple.register:invocation[0]" | "error.platform.mainMachine.started.deauthentication.processing:invocation[0]" | "error.platform.mainMachine.started.authentication.autoLog:invocation[0]" | "done.invoke.mainMachine.started.deauthentication.processing:invocation[0]" | "done.invoke.mainMachine.checkingEnvVariables:invocation[0]" | "xstate.after(timeBeforeAutolog)#mainMachine.started.notAuthenticated" | "xstate.init">;
}>;
export declare type Machine = typeof machine;
export declare type S_Machine = StateMachine<TContext, any, TEvent, any, any, any, any>;
