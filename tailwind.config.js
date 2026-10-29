/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { tech: { bg: '#0b0e10', surface: '#12171a', line: '#293035', muted: '#9ba5ac', ink: '#f1f2ef', signal: '#b4d5bf' } },
    fontFamily: { sans: ['Arial', 'Helvetica Neue', 'sans-serif'], mono: ['SFMono-Regular', 'Consolas', 'monospace'] },
    fontSize: { display: ['clamp(3.5rem, 7.5vw, 8rem)', { lineHeight: '.96', letterSpacing: '-.065em' }] },
  } }, plugins: [],
};
