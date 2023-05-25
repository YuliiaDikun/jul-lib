declare const _default: {
    testEnvironment: string;
    transform: {
        "^.+\\.tsx?$": string;
    };
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': string;
        '\\.(css|less|sass|scss)$': string;
    };
    setupFilesAfterEnv: string[];
};
export default _default;
