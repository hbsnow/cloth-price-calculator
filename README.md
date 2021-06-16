# template-nextjs-tailwindcss

## plugin

- [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)

```js
const config = {
  plugins: [require("@tailwindcss/forms")],
};
```

## フォントの追加

```js
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  theme: {
    extend: {},
    fontFamily: {
      sans: defaultTheme.fontFamily.sans,
      title: ["Nunito", ...defaultTheme.fontFamily.sans],
    },
  },
};
```
