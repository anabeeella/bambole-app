import { Box } from '@chakra-ui/react'

const EditorButton = ({ children, onClick, selected, bg, title }) => {
  return (
    <Box
      title={title}
      bg={bg}
      _hover={{
        border: `1px solid black`,
        transform: 'translateY(-2px)',
        transition: 'all 0.2s ease-in-out',
      }}
      border={selected ? '1px solid black' : '2px solid transparent'}
      boxShadow={selected ? '-3px 3px 0 black' : 'none'}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="60px"
      width="60px"
      cursor="pointer"
      p={2}
      onClick={onClick}
      transition="all 0.2s ease-in-out"
    >
      {children}
    </Box>
  )
}

export default EditorButton
