import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        files: ["**/*.ts", "**/*.cts", "**/*.mts"],
        plugins: {
            "@typescript-eslint": tseslint.plugin,
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: true,
            },
        },
        rules: {
            "prefer-const": "error",
            "no-constant-binary-expression": "error",
            "@typescript-eslint/no-explicit-any": "error"
        },
    },
);