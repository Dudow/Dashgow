import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SidebarFloatingProvider } from "../contexts/SidebarFloatingContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarFloatingProvider>
        <Component {...pageProps} />;
      </SidebarFloatingProvider>
    </ChakraProvider>
  );
}

export default MyApp;
