import { ComponentStyleConfig } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontSize: "10pt",
    fontWeight: 600,
    _focus: {
      boxShadow: "none",
    },
    textAlign: "center",
    borderRadius: ".25rem",
    padding: "8px 14px",
    boxSizing: "border-box",
    textDecor: "none",
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
    },
  },
  variants: {
    oauth: {
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
    animated: {
      bg: "purple.400",
      border: "1px solid transparent",
      boxShadow: "rgba(0, 0, 0, 0.02) 0 1px 3px 0",
      color: "white",
      transition: "all 250ms",
      _hover: {
        bg: "purple.500",
        boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 12px",
        transform: "translateY(-1px)",
        textDecor: "none",
      },
      _focus: {
        bg: "purple.500",
        boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 12px",
      },
      _active: {
        bg: "purple.600",
        boxShadow: "rgba(0, 0, 0, .06) 0 2px 4px",
        transform: "translateY(0)",
      },
    },
    animatedWhite: {
      bg: "white",
      border: "1px solid transparent",
      boxShadow: "rgba(0, 0, 0, 0.02) 0 1px 3px 0",
      color: "black",
      transition: "all 250ms",
      _hover: {
        bg: "gray.50",
        boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 12px",
        transform: "translateY(-1px)",
        textDecor: "none",
      },
      _focus: {
        bg: "gray.50",
        boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 12px",
      },
      _active: {
        bg: "gray.100",
        boxShadow: "rgba(0, 0, 0, .06) 0 2px 4px",
        transform: "translateY(0)",
      },
    },
    animatedWhiteOutline: {
      bg: "transparent",
      border: "1px solid white",
      boxShadow: "rgba(0, 0, 0, 0.02) 0 1px 3px 0",
      color: "white",
      transition: "all 250ms",
      _hover: {
        borderColor: "gray.50",
        boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 12px",
        transform: "translateY(-1px)",
        color: "gray.50",
        textDecor: "none",
      },
      _focus: {
        bg: "rgba(255, 255, 255, 0.1)",
        borderColor: "gray.50",
        boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 12px",
      },
      _active: {
        bg: "rgba(255, 255, 255, 0.1)",
        boxShadow: "gray.100",
        transform: "translateY(0)",
      },
    },
    animatedOutline: {
      bg: "transparent",
      border: "1px solid",
      borderColor: "purple.400",
      boxShadow: "rgba(0, 0, 0, 0.02) 0 1px 3px 0",
      color: "purple.400",
      transition: "all 250ms",
      _hover: {
        borderColor: "purple.500",
        boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 12px",
        transform: "translateY(-1px)",
        color: "purple.500",
        textDecor: "none",
      },
      _focus: {
        bg: "rgba(255, 255, 255, 0.1)",
        borderColor: "purple.500",
        boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 12px",
      },
      _active: {
        bg: "rgba(255, 255, 255, 0.1)",
        boxShadow: "gray.100",
        transform: "translateY(0)",
      },
    },
  },
};

export default Button;
