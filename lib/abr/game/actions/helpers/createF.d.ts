import type { MoveArray } from '../../../../ebr/game/actions/moveArray';
export declare function createF(value: MoveArray): import("@bemedev/fstate/machine").Machine<undefined, {
    value: {
        first?: number | undefined;
        second?: number | undefined;
        third?: number | undefined;
        fourth?: number | undefined;
    };
    merged: {
        fourth: boolean;
        third: boolean;
        second: boolean;
    };
}, import("@bemedev/fstate").DFS<undefined, {
    value: {
        first?: number | undefined;
        second?: number | undefined;
        third?: number | undefined;
        fourth?: number | undefined;
    };
    merged: {
        fourth: boolean;
        third: boolean;
        second: boolean;
    };
}, {
    type: "sync";
    transitions: ({
        conditions: string;
        target: string;
        actions?: undefined;
    } | {
        conditions: string;
        target: string;
        actions: string[];
    } | {
        target: string;
        conditions?: undefined;
        actions?: undefined;
    })[];
} | {
    type: "sync";
    transitions: ({
        conditions: string;
        target: string;
        actions?: undefined;
    } | {
        conditions: string[];
        target: string;
        actions: string[];
    } | {
        conditions: string;
        target: string;
        actions: string[];
    } | {
        target: string;
        conditions?: undefined;
        actions?: undefined;
    })[];
} | {
    type: "sync";
    transitions: ({
        conditions: string;
        target: string;
        actions?: undefined;
    } | {
        conditions: string[];
        target: string;
        actions: string[];
    } | {
        conditions: string;
        target: string;
        actions: string[];
    } | {
        target: string;
        conditions?: undefined;
        actions?: undefined;
    })[];
} | {
    type: "final";
    transitions?: undefined;
}>>;
