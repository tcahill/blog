export interface Theme {
    background: string;
    secondaryBackground: string;
    primary: string;
    secondary: string;
    tertiary: string;
    link: string;
    hover: string;
}

export const lightTheme: Theme = {
    background: "#E0E1DD",
    secondaryBackground: "#000000",
    primary: "#0D1B2A",
    secondary: "#1d2d44",
    tertiary: "#748cab",
    link: "#ffffff:",
    hover: "#f19502",
};

export const darkTheme: Theme = {
    background: "#17181f",
    secondaryBackground: "#23242f",
    primary: "#d4d4d4",
    secondary: "#848484",
    tertiary: "#F19502",
    link: "#e6e6e6",
    hover: "#ff55aa",
};

export const theme = darkTheme;
