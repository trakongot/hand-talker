"use client";

import theme from "@/app/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";


interface Props {
  children: React.ReactNode;
}

export const InitializeChakra = (props: Props) => {
  const { children } = props;

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
