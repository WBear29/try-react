import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "yellow.200",
        color: "gray.800",
      },
      p: {
        fontSize: { base: "md", md: "lg"},
        lineHeight: "tall"
      }
    }
  }
});

export default theme;