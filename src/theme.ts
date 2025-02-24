import { createSystem, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    breakpoints: {},
    tokens: {
      colors: {},
    },
    semanticTokens: {
      colors: {},
    },
    keyframes: {},
  },
});

export default createSystem(config);
