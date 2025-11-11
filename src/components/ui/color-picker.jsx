import {
  ColorPicker as ChakraColorPicker,
  For,
  Span,
  Stack,
  Text,
  VStack,
  Box,
  Button,
  Input,
} from '@chakra-ui/react'
import * as React from 'react'
import { LuCheck } from 'react-icons/lu'

export const ColorPickerRoot = ({ children }) => (
  <Stack spacing={2}>{children}</Stack>
)

export const ColorPickerTrigger = ({ color, onClick }) => (
  <Button
    w="40px"
    h="40px"
    p={0}
    bg={color}
    onClick={onClick}
    _hover={{ transform: 'scale(1.1)' }}
  />
)

export const ColorPickerContent = ({ children }) => (
  <Box p={4} bg="white" borderRadius="md" shadow="lg">
    {children}
  </Box>
)

export const ColorPickerInput = ({ value, onChange }) => (
  <Input value={value} onChange={onChange} placeholder="#000000" />
)

export const ColorPickerSliders = ({ children }) => (
  <Stack spacing={2}>{children}</Stack>
)

export const ColorPickerEyeDropper = ({ onSelect }) => (
  <Button onClick={onSelect}>Pick Color</Button>
)

export const ColorPickerChannelSlider = React.forwardRef(
  function ColorPickerSlider(props, ref) {
    return (
      <ChakraColorPicker.ChannelSlider ref={ref} {...props}>
        <ChakraColorPicker.TransparencyGrid size="0.6rem" />
        <ChakraColorPicker.ChannelSliderTrack />
        <ChakraColorPicker.ChannelSliderThumb />
      </ChakraColorPicker.ChannelSlider>
    )
  }
)

export const ColorPickerSwatchTrigger = React.forwardRef(
  function ColorPickerSwatchTrigger(props, ref) {
    const { swatchSize, children, ...rest } = props
    return (
      <ChakraColorPicker.SwatchTrigger
        ref={ref}
        style={{ ['--color']: props.value }}
        {...rest}
      >
        {children || (
          <ChakraColorPicker.Swatch boxSize={swatchSize} value={props.value}>
            <ChakraColorPicker.SwatchIndicator>
              <LuCheck />
            </ChakraColorPicker.SwatchIndicator>
          </ChakraColorPicker.Swatch>
        )}
      </ChakraColorPicker.SwatchTrigger>
    )
  }
)

const formatMap = {
  rgba: ['red', 'green', 'blue', 'alpha'],
  hsla: ['hue', 'saturation', 'lightness', 'alpha'],
  hsba: ['hue', 'saturation', 'brightness', 'alpha'],
  hexa: ['hex', 'alpha'],
}

export const ColorPickerChannelInputs = React.forwardRef(
  function ColorPickerChannelInputs(props, ref) {
    const channels = formatMap[props.format]
    return (
      <ChakraColorPicker.View flexDirection="row" ref={ref} {...props}>
        {channels.map(channel => (
          <VStack gap="1" key={channel} flex="1">
            <ColorPickerChannelInput
              channel={channel}
              px="0"
              height="7"
              textStyle="xs"
              textAlign="center"
            />
            <Text textStyle="xs" color="fg.muted" fontWeight="medium">
              {channel.charAt(0).toUpperCase()}
            </Text>
          </VStack>
        ))}
      </ChakraColorPicker.View>
    )
  }
)

export const ColorPickerChannelSliders = React.forwardRef(
  function ColorPickerChannelSliders(props, ref) {
    const channels = formatMap[props.format]
    return (
      <ChakraColorPicker.View {...props} ref={ref}>
        <For each={channels}>
          {channel => (
            <Stack gap="1" key={channel}>
              <Span
                textStyle="xs"
                minW="5ch"
                textTransform="capitalize"
                fontWeight="medium"
              >
                {channel}
              </Span>
              <ColorPickerChannelSlider channel={channel} />
            </Stack>
          )}
        </For>
      </ChakraColorPicker.View>
    )
  }
)

export const ColorPickerLabel = ChakraColorPicker.Label
export const ColorPickerControl = ChakraColorPicker.Control
export const ColorPickerValueText = ChakraColorPicker.ValueText
export const ColorPickerValueSwatch = ChakraColorPicker.ValueSwatch
export const ColorPickerChannelInput = ChakraColorPicker.ChannelInput
export const ColorPickerSwatchGroup = ChakraColorPicker.SwatchGroup
