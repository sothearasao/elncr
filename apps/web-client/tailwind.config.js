const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join, resolve } = require('node:path');

const medusaUiPath = resolve(
  require.resolve('@medusajs/ui'),
  '../..',
  '**/*.{js,jsx,ts,tsx}'
);

module.exports = {
  presets: [require('@medusajs/ui-preset')],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,js,jsx,html}'
    ),
    medusaUiPath,
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        nycd: ['Nothing You Could Do', 'cursive'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.01em' }],
        '3xl': ['1.875rem', { lineHeight: '1.333', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.277', letterSpacing: '-0.01em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
  ],
};
