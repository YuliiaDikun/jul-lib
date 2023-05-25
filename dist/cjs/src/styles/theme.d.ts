interface IThemeDefault {
    colors: {
        accent: string;
        white: string;
        blue: string;
        yellow: string;
        dark: string;
        mainBackground: string;
        gray: string;
    };
    fontSizes: {
        small: string;
        medium: string;
        large: string;
    };
    spacing: (factor: number) => string;
    shadows: {
        small: string;
        regular: string;
        medium: string;
    };
    animation: {
        cubicBezier: string;
    };
    media: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
}
export declare const lightTheme: IThemeDefault;
export declare const darkTheme: IThemeDefault;
export type MyThemeProps = {
    theme: IThemeDefault;
};
export {};
