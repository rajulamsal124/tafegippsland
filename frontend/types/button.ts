import { ButtonProps } from '@chakra-ui/react';

export interface IButtonProps extends ButtonProps {
  label: string;
  variantColor?: string;
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  isDisabled?: boolean;
}

export const ButtonStyles = {
  bg: 'green.900',
  color: 'white',
  _hover: {
    bg: 'green.600',
  },
};
