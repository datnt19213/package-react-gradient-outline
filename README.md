# GradientOutline

A React component that adds a customizable animated gradient outline effect to any element.

###### [Demo](https://react-gradient-outline-demo-xaad.vercel.app/)

## Installation

Before using this package, you need to install ** Tailwind CSS ** in your project:

```sh
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

Add the following to your `tailwind.config.js` file:

```js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

Add the following to your `postcss.config.js` file:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

or go to the documentation [Tailwind Installation Using PostCSS](https://tailwindcss.com/docs/installation/using-postcss)

After tailwind is installed, you can install the package:

```sh
yarn add gradient-outline
```

or using npm:

```sh
npm install gradient-outline
```

## Usage

```tsx
import React from "react";
import Gline from "gradient-outline";

const App = () => {
  return (
    <Gline borderRadius={16} strokeWidth={2} className="w-full ">
      <button className="p-4 text-white bg-black">Click Me</button>
    </Gline>
  );
};

export default App;
```

## Props

| Prop                  | Type            | Default Value        | Description                                     |
| --------------------- | --------------- | -------------------- | ----------------------------------------------- |
| `id`                  | `string`        | `undefined`          | Unique identifier for the component.            |
| `style`               | `CSSProperties` | `{}`                 | Custom styles for the outer container.          |
| `contentStyle`        | `CSSProperties` | `{}`                 | Styles applied to the inner content container.  |
| `contentClass`        | `string`        | `""`                 | Additional class names for the inner content.   |
| `allowHover`          | `boolean`       | `true`               | Enables hover effect to change gradient colors. |
| `strokeWidth`         | `number`        | `1.5`                | Width of the gradient border stroke.            |
| `borderRadius`        | `number`        | `24`                 | Border radius of the outline.                   |
| `hoverGradientColors` | `string[]`      | `[#E6CAA4, #E9B84E]` | Gradient colors when hovered.                   |
| `gradientColors`      | `string[]`      | `[...]`              | Default gradient colors.                        |
| `gradientAngle`       | `number`        | `135`                | Angle of the gradient direction.                |
| `className`           | `string`        | `""`                 | Additional class names for the outer container. |
| `onClick`             | `() => void`    | `undefined`          | Click handler.                                  |

## Features

- Customizable animated gradient border
- Resizable with automatic dimension tracking
- Configurable gradient colors and angles
- Supports hover state changes

## License

MIT
