import {
  FormControl,
  FormLabel,
  Input as InputBase,
  InputProps as InputBaseProps,
} from "@chakra-ui/react";

interface inputProps extends InputBaseProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: inputProps) {
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <InputBase
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: "gray.900",
        }}
        {...rest}
      />
    </FormControl>
  );
}
