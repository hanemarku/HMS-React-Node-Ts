// src/card-context.tsx
import { createStylesContext } from "@chakra-ui/system";
var [CardStylesProvider, useCardStyles] = createStylesContext("Card");

export {
  CardStylesProvider,
  useCardStyles
};
