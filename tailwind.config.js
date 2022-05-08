module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#000000',
            h2: {
              paddingBottom: theme('spacing.1'),
              borderBottom: `1px solid ${theme('colors.gray.200')}`,
            },
            li: {
              '&::marker': {
                color: theme('colors.gray.500'),
              },
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              borderRadius: theme('borderRadius.sm'),
              padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
              fontWeight: false,
            },
            'code::before': false,
            'code::after': false,
            'pre code::before': false,
            'pre code::after': false,
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
