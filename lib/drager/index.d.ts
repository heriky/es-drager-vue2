import { App, Plugin } from 'vue-demi';
export type { DragData, DragerProps } from './src/drager';
import Drager from './src/drager.vue';
export declare const install: (app: App) => void;
export { Drager as ESDrager };
declare const _default: Plugin & {
    new (...args: any[]): {
        $: import("vue-demi").ComponentInternalInstance;
        $data: {};
        $props: {
            top?: number | undefined;
            left?: number | undefined;
            tag?: string | import("vue-demi").Component | undefined;
            resizable?: boolean | undefined;
            rotatable?: boolean | undefined;
            boundary?: boolean | undefined;
            disabled?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
            zIndex?: number | undefined;
            angle?: number | undefined;
            color?: string | undefined;
            minWidth?: number | undefined;
            minHeight?: number | undefined;
            maxWidth?: number | undefined;
            maxHeight?: number | undefined;
            selected?: boolean | undefined;
            snapToGrid?: boolean | undefined;
            gridX?: number | undefined;
            gridY?: number | undefined;
            scaleRatio?: number | undefined;
            disabledKeyEvent?: boolean | undefined;
            border?: boolean | undefined;
            equalProportion?: boolean | undefined;
            checkCollision?: boolean | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
            onDrag?: ((...args: any[]) => any) | undefined;
            "onDrag-start"?: ((...args: any[]) => any) | undefined;
            "onDrag-end"?: ((...args: any[]) => any) | undefined;
            onResize?: ((...args: any[]) => any) | undefined;
            "onResize-start"?: ((...args: any[]) => any) | undefined;
            "onResize-end"?: ((...args: any[]) => any) | undefined;
            onRotate?: ((...args: any[]) => any) | undefined;
            "onRotate-start"?: ((...args: any[]) => any) | undefined;
            "onRotate-end"?: ((...args: any[]) => any) | undefined;
            readonly aspectRatio?: number | undefined;
            readonly resizeList?: import("./src/drager").IDotSide[] | undefined;
            key?: string | number | symbol | undefined;
            ref?: import("vue-demi").VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            class?: unknown;
            style?: unknown;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue-demi").Slot<any> | undefined;
        }>;
        $root: import("vue-demi").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue-demi").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue-demi").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue-demi").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "change" | "drag" | "drag-start" | "drag-end" | "resize" | "resize-start" | "resize-end" | "rotate" | "rotate-start" | "rotate-end", ...args: any[]) => void;
        $el: any;
        $options: import("vue-demi").ComponentOptionsBase<Readonly<import("vue-demi").ExtractPropTypes<{
            tag: {
                type: import("vue-demi").PropType<string | import("vue-demi").Component>;
                default: string;
            };
            resizable: {
                type: BooleanConstructor;
                default: boolean;
            };
            rotatable: {
                type: BooleanConstructor;
                default: boolean;
            };
            boundary: {
                type: BooleanConstructor;
            };
            disabled: BooleanConstructor;
            width: {
                type: NumberConstructor;
                default: number;
            };
            height: {
                type: NumberConstructor;
                default: number;
            };
            left: {
                type: NumberConstructor;
                default: number;
            };
            top: {
                type: NumberConstructor;
                default: number;
            };
            zIndex: {
                type: NumberConstructor;
                default: number;
            };
            angle: {
                type: NumberConstructor;
                default: number;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            minWidth: {
                type: NumberConstructor;
                default: number;
            };
            minHeight: {
                type: NumberConstructor;
                default: number;
            };
            maxWidth: {
                type: NumberConstructor;
                default: number;
            };
            maxHeight: {
                type: NumberConstructor;
                default: number;
            };
            aspectRatio: {
                type: NumberConstructor;
            };
            selected: BooleanConstructor;
            snapToGrid: BooleanConstructor;
            gridX: {
                type: NumberConstructor;
                default: number;
            };
            gridY: {
                type: NumberConstructor;
                default: number;
            };
            scaleRatio: {
                type: NumberConstructor;
                default: number;
            };
            disabledKeyEvent: BooleanConstructor;
            border: {
                type: BooleanConstructor;
                default: boolean;
            };
            resizeList: {
                type: import("vue-demi").PropType<import("./src/drager").IDotSide[]>;
            };
            equalProportion: {
                type: BooleanConstructor;
            };
            checkCollision: {
                type: BooleanConstructor;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            onDrag?: ((...args: any[]) => any) | undefined;
            "onDrag-start"?: ((...args: any[]) => any) | undefined;
            "onDrag-end"?: ((...args: any[]) => any) | undefined;
            onResize?: ((...args: any[]) => any) | undefined;
            "onResize-start"?: ((...args: any[]) => any) | undefined;
            "onResize-end"?: ((...args: any[]) => any) | undefined;
            onRotate?: ((...args: any[]) => any) | undefined;
            "onRotate-start"?: ((...args: any[]) => any) | undefined;
            "onRotate-end"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, ("change" | "drag" | "drag-start" | "drag-end" | "resize" | "resize-start" | "resize-end" | "rotate" | "rotate-start" | "rotate-end")[], string, {
            top: number;
            left: number;
            tag: string | import("vue-demi").Component;
            resizable: boolean;
            rotatable: boolean;
            boundary: boolean;
            disabled: boolean;
            width: number;
            height: number;
            zIndex: number;
            angle: number;
            color: string;
            minWidth: number;
            minHeight: number;
            maxWidth: number;
            maxHeight: number;
            selected: boolean;
            snapToGrid: boolean;
            gridX: number;
            gridY: number;
            scaleRatio: number;
            disabledKeyEvent: boolean;
            border: boolean;
            equalProportion: boolean;
            checkCollision: boolean;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue-demi").DebuggerEvent) => void) | ((e: import("vue-demi").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue-demi").DebuggerEvent) => void) | ((e: import("vue-demi").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue-demi").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue-demi").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue-demi").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue-demi").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue-demi").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue-demi").WatchOptions<boolean> | undefined): import("vue-demi").WatchStopHandle;
    } & Readonly<import("vue-demi").ExtractPropTypes<{
        tag: {
            type: import("vue-demi").PropType<string | import("vue-demi").Component>;
            default: string;
        };
        resizable: {
            type: BooleanConstructor;
            default: boolean;
        };
        rotatable: {
            type: BooleanConstructor;
            default: boolean;
        };
        boundary: {
            type: BooleanConstructor;
        };
        disabled: BooleanConstructor;
        width: {
            type: NumberConstructor;
            default: number;
        };
        height: {
            type: NumberConstructor;
            default: number;
        };
        left: {
            type: NumberConstructor;
            default: number;
        };
        top: {
            type: NumberConstructor;
            default: number;
        };
        zIndex: {
            type: NumberConstructor;
            default: number;
        };
        angle: {
            type: NumberConstructor;
            default: number;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        minWidth: {
            type: NumberConstructor;
            default: number;
        };
        minHeight: {
            type: NumberConstructor;
            default: number;
        };
        maxWidth: {
            type: NumberConstructor;
            default: number;
        };
        maxHeight: {
            type: NumberConstructor;
            default: number;
        };
        aspectRatio: {
            type: NumberConstructor;
        };
        selected: BooleanConstructor;
        snapToGrid: BooleanConstructor;
        gridX: {
            type: NumberConstructor;
            default: number;
        };
        gridY: {
            type: NumberConstructor;
            default: number;
        };
        scaleRatio: {
            type: NumberConstructor;
            default: number;
        };
        disabledKeyEvent: BooleanConstructor;
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        resizeList: {
            type: import("vue-demi").PropType<import("./src/drager").IDotSide[]>;
        };
        equalProportion: {
            type: BooleanConstructor;
        };
        checkCollision: {
            type: BooleanConstructor;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        onDrag?: ((...args: any[]) => any) | undefined;
        "onDrag-start"?: ((...args: any[]) => any) | undefined;
        "onDrag-end"?: ((...args: any[]) => any) | undefined;
        onResize?: ((...args: any[]) => any) | undefined;
        "onResize-start"?: ((...args: any[]) => any) | undefined;
        "onResize-end"?: ((...args: any[]) => any) | undefined;
        onRotate?: ((...args: any[]) => any) | undefined;
        "onRotate-start"?: ((...args: any[]) => any) | undefined;
        "onRotate-end"?: ((...args: any[]) => any) | undefined;
    } & import("vue-demi").ShallowUnwrapRef<{}> & {} & import("vue-demi").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue-demi").ComponentOptionsBase<Readonly<import("vue-demi").ExtractPropTypes<{
    tag: {
        type: import("vue-demi").PropType<string | import("vue-demi").Component>;
        default: string;
    };
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    rotatable: {
        type: BooleanConstructor;
        default: boolean;
    };
    boundary: {
        type: BooleanConstructor;
    };
    disabled: BooleanConstructor;
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    left: {
        type: NumberConstructor;
        default: number;
    };
    top: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    angle: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    minWidth: {
        type: NumberConstructor;
        default: number;
    };
    minHeight: {
        type: NumberConstructor;
        default: number;
    };
    maxWidth: {
        type: NumberConstructor;
        default: number;
    };
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    aspectRatio: {
        type: NumberConstructor;
    };
    selected: BooleanConstructor;
    snapToGrid: BooleanConstructor;
    gridX: {
        type: NumberConstructor;
        default: number;
    };
    gridY: {
        type: NumberConstructor;
        default: number;
    };
    scaleRatio: {
        type: NumberConstructor;
        default: number;
    };
    disabledKeyEvent: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    resizeList: {
        type: import("vue-demi").PropType<import("./src/drager").IDotSide[]>;
    };
    equalProportion: {
        type: BooleanConstructor;
    };
    checkCollision: {
        type: BooleanConstructor;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onDrag?: ((...args: any[]) => any) | undefined;
    "onDrag-start"?: ((...args: any[]) => any) | undefined;
    "onDrag-end"?: ((...args: any[]) => any) | undefined;
    onResize?: ((...args: any[]) => any) | undefined;
    "onResize-start"?: ((...args: any[]) => any) | undefined;
    "onResize-end"?: ((...args: any[]) => any) | undefined;
    onRotate?: ((...args: any[]) => any) | undefined;
    "onRotate-start"?: ((...args: any[]) => any) | undefined;
    "onRotate-end"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, ("change" | "drag" | "drag-start" | "drag-end" | "resize" | "resize-start" | "resize-end" | "rotate" | "rotate-start" | "rotate-end")[], "change" | "drag" | "drag-start" | "drag-end" | "resize" | "resize-start" | "resize-end" | "rotate" | "rotate-start" | "rotate-end", {
    top: number;
    left: number;
    tag: string | import("vue-demi").Component;
    resizable: boolean;
    rotatable: boolean;
    boundary: boolean;
    disabled: boolean;
    width: number;
    height: number;
    zIndex: number;
    angle: number;
    color: string;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    selected: boolean;
    snapToGrid: boolean;
    gridX: number;
    gridY: number;
    scaleRatio: number;
    disabledKeyEvent: boolean;
    border: boolean;
    equalProportion: boolean;
    checkCollision: boolean;
}, {}, string, {}> & import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps;
export default _default;
