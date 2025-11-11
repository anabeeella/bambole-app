const Input = {
  baseStyle: {},
  variants: {
    outline: {
      field: {
        borderRadius: '0',
        border: '1px solid black',
        _hover: {
          border: '1px solid black',
        },
        _focusVisible: {
          border: '1px solid black',
          boxShadow: '-3px 3px black',
        },
      },
    },
  },
  defaultProps: {
    variant: 'outline',
  },
}

export default Input
