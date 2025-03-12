// import { useEffect, useMemo } from "react";
// import { useMediaQuery } from "react-responsive";
// import createPersistedState from "use-persisted-state";
// const useColorSchemeState = createPersistedState("colorScheme");
//
// export function useColorScheme() {
//     const systemPrefersDark = useMediaQuery(
//         {
//             query: "(prefers-color-scheme: dark)",
//         },
//         undefined
//     );
//
//     const [isDark, setIsDark] = useColorSchemeState();
//     const value = useMemo(
//         () => (isDark === undefined ? !!systemPrefersDark : isDark),
//         [isDark, systemPrefersDark]
//     );
//
//     useEffect(() => {
//         if (value) {
//             document.body.classList.add("dark");
//         } else {
//             document.body.classList.remove("dark");
//         }
//     }, [value]);
//
//     return {
//         isDark: value,
//         setIsDark,
//     };
// }

import { useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import useLocalStorageState from "use-local-storage-state"; // Use this instead of use-persisted-state

export function useColorScheme() {
    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)",
        },
        undefined
    );

    const [isDark, setIsDark] = useLocalStorageState("colorScheme", {
        defaultValue: undefined,
    });

    const value = useMemo(
        () => (isDark === undefined ? systemPrefersDark : isDark),
        [isDark, systemPrefersDark]
    );

    useEffect(() => {
        if (value) {
            document.documentElement.classList.add("dark"); // Use <html>, not <body>
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [value]);

    return {
        isDark: value,
        setIsDark,
    };
}
