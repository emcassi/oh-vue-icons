import * as vue_demi from 'vue-demi';

interface CustomizeIconType {
  name: string;
  width: number;
  height: number;
  minX?: number;
  minY?: number;
  raw?: string;
  attr?: ObjType;
  points?: string;
  polygons?: ObjType[];
  d?: string;
  paths?: ObjType[];
}

interface ObjType {
  [key: string]: string;
}

declare type IconsType = {
    [key: string]: CustomizeIconType;
};
declare const addIcons: (...data: CustomizeIconType[]) => void;
declare const listIcons: () => IconsType;
declare const OhVueIcon: vue_demi.DefineComponent<{
    name: {
        type: StringConstructor;
        validator: (val: string) => boolean;
    };
    title: StringConstructor;
    fill: StringConstructor;
    scale: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    animation: {
        validator: (val: string) => boolean;
    };
    hover: BooleanConstructor;
    flip: {
        validator: (val: string) => boolean;
    };
    speed: {
        validator: (val: string) => boolean;
    };
    label: StringConstructor;
    inverse: BooleanConstructor;
}, {
    children: vue_demi.Ref<any[]>;
    icon: vue_demi.ComputedRef<CustomizeIconType | null>;
    klass: vue_demi.ComputedRef<{
        "ov-icon": boolean;
        "ov-inverse": boolean;
        "ov-flip-horizontal": boolean;
        "ov-flip-vertical": boolean;
        "ov-flip-both": boolean;
        "ov-spin": boolean;
        "ov-spin-pulse": boolean;
        "ov-wrench": boolean;
        "ov-ring": boolean;
        "ov-pulse": boolean;
        "ov-flash": boolean;
        "ov-float": boolean;
        "ov-hover": boolean;
        "ov-fast": boolean;
        "ov-slow": boolean;
    }>;
    style: vue_demi.ComputedRef<false | {
        fontSize: string;
    }>;
    width: vue_demi.ComputedRef<number>;
    height: vue_demi.ComputedRef<number>;
    box: vue_demi.ComputedRef<string>;
    attribs: vue_demi.ComputedRef<any>;
    raw: vue_demi.ComputedRef<string | null>;
    outerScale: vue_demi.Ref<number>;
    x: vue_demi.Ref<number | null>;
    y: vue_demi.Ref<number | null>;
}, unknown, {}, {}, vue_demi.ComponentOptionsMixin, vue_demi.ComponentOptionsMixin, Record<string, any>, string, vue_demi.VNodeProps & vue_demi.AllowedComponentProps & vue_demi.ComponentCustomProps, Readonly<{
    name?: unknown;
    title?: unknown;
    fill?: unknown;
    scale?: unknown;
    animation?: unknown;
    hover?: unknown;
    flip?: unknown;
    speed?: unknown;
    label?: unknown;
    inverse?: unknown;
} & {
    scale: string | number;
    hover: boolean;
    inverse: boolean;
} & {
    name?: string | undefined;
    fill?: string | undefined;
    title?: string | undefined;
    animation?: unknown;
    flip?: unknown;
    speed?: unknown;
    label?: string | undefined;
}>, {
    scale: string | number;
    hover: boolean;
    inverse: boolean;
}>;

export { OhVueIcon, addIcons, listIcons };