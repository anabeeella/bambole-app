const Button = {
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: '0',
    border: '1px solid',
    borderColor: 'black',
  },
  variants: {
    solid: {
      bg: 'white',
      color: 'black',
      _hover: {
        color: 'white',
        bg: 'brand.primary.600',
        border: '1px solid',
        borderColor: 'black',
        boxShadow: '-6px 6px 0 black',
      },
    },
    outline: {
      border: '1px solid',
      borderColor: 'black',
      color: 'brand.primary.500',
      _hover: {
        bg: 'brand.primary.50',
        borderColor: 'black',
        boxShadow: '-6px 6px 0 black',
      },
    },
    ghost: {
      bg: 'transparent',
      color: 'black',
      border: 'none',
    },
  },
  defaultProps: {
    variant: 'solid',
  },
}

export default Button
