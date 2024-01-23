import { Ref } from "vue";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";
import { useMediaQuery } from "./useMediaQuery";

type ScreenSize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type Breakpoints = Record<ScreenSize, number>;

// @ts-ignore
const tailwind = resolveConfig(tailwindConfig);

const twBreakpoints = tailwind.theme.screens as { string: `${string}px` };

// remove px and convert it to numbers
const breakpoints = Object.keys(twBreakpoints).reduce(
  (acc, key) => ({
    ...acc,
    [key]: twBreakpoints[key],
  }),
  {}
);

export type UseBreakpointsReturn = {
  greater: (k: ScreenSize) => Readonly<Ref<boolean>>;
  smaller: (k: ScreenSize) => Readonly<Ref<boolean>>;
  between: (a: ScreenSize, b: ScreenSize) => Readonly<Ref<boolean>>;
  smallScreen: Readonly<Ref<boolean>>;
  mediumScreen: Readonly<Ref<boolean>>;
  largeScreen: Readonly<Ref<boolean>>;
  extralargeScreen: Readonly<Ref<boolean>>;
} & Record<ScreenSize, Ref<boolean>>;

export function useBreakpoints(): UseBreakpointsReturn {
  const greater = (k: ScreenSize) => {
    return useMediaQuery(`(min-width: ${breakpoints[k]})`);
  };
  const between = (a: ScreenSize, b: ScreenSize) => {
    return useMediaQuery(
      `(min-width: ${breakpoints[a]}) and (max-width: ${breakpoints[b]})`
    );
  };
  const smaller = (k: ScreenSize) =>
    useMediaQuery(`(max-width: ${breakpoints[k]})`);

  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => greater(k as ScreenSize),
      enumerable: true,
      configurable: true,
    });
    return shortcuts;
  }, {} as Record<ScreenSize, Ref<boolean>>);
  return {
    greater,
    smaller,
    between,
    smallScreen: smaller("sm"),
    mediumScreen: between("sm", "lg"),
    largeScreen: greater("lg"),
    extralargeScreen: greater("xl"),
    ...shortcutMethods,
  };
}
