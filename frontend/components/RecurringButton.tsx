import { useRadio, Box, useRadioGroup, HStack } from '@chakra-ui/react';
import * as React from 'react';

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const { setValue } = props;

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as='label'>
      <input
        {...input}
        onChange={() => {
          setValue(
            props.children[0]
              ? props.children.substring(2) == 'Month'
              : 12 * props.children[0]
          );
        }}
      />
      <Box
        {...checkbox}
        fontWeight='semibold'
        borderWidth='1px'
        borderRadius='md'
        bg='#FEFFFE'
        borderColor='#D3D3D3'
        width={115}
        px={5}
        py={2}
        _checked={{
          boxShadow: '0 0 1px 2px #FECD5B',
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export function RecurringButton({ setValue }: any) {
  const options = ['1 Month', '1 Year'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    // onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio} setValue={setValue}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}
