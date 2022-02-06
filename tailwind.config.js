module.exports = {
  purge: [
    './src/views/**/*.vue',
    './src/components/**/*.vue',
    './src/**/*.vue'
  ],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'primary-100': '#287DB2',
      'primary-200': '#2774A3',
      white: '#FFFFFF',
      'gray-50': '#F9FAFB',
      'gray-100': '#F8F8F8',
      'gray-200': '#F5F5F5',
      'gray-300': '#E9E9E9',
      'gray-400': '#D1D1D1',
      // 'gray-500': '#BFBFBF',
      // 'gray-600': '#B4B4B4',
      // 'gray-700': '#8D8D8D',
      // 'gray-800': '#777777',
      'gray-900': '#5B5B5B',
      black: '#252525',
      error: '#D0011B',
      transparent: 'transparent'
    },
    fontFamily: {
      sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['serif']
    },
    extend: {}
  },
  plugins: []
}
