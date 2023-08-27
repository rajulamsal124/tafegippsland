import { Button as ChakraButton } from '@chakra-ui/react';
import { IButtonProps, ButtonStyles } from '@/types/button';

const Button: React.FC<IButtonProps> = ({
  label,
  variantColor,
  type = 'button', // default to 'button'
  onClick,
  isDisabled = false,
  ...props
}) => {
  const hoverColor = variantColor
    ? `lighten(${variantColor}, 10%)`
    : ButtonStyles._hover.bg;

  return (
    <ChakraButton
      type={type}
      onClick={onClick}
      isDisabled={isDisabled}
      {...ButtonStyles}
      bg={variantColor || ButtonStyles.bg}
      _hover={{ ...ButtonStyles._hover, bg: hoverColor }}
      {...props}
    >
      {label}
    </ChakraButton>
  );
};

export default Button;
