import {
  DescendantsManager
} from "./chunk-P6SLLHUK.mjs";
import {
  cast,
  useSafeLayoutEffect
} from "./chunk-N7WDF4QK.mjs";

// src/use-descendant.ts
import { createContext } from "@chakra-ui/react-context";
import { mergeRefs } from "@chakra-ui/react-use-merge-refs";
import { useRef, useState } from "react";
function useDescendants() {
  const descendants = useRef(new DescendantsManager());
  useSafeLayoutEffect(() => {
    return () => descendants.current.destroy();
  });
  return descendants.current;
}
var [DescendantsContextProvider, useDescendantsContext] = createContext({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function useDescendant(options) {
  const descendants = useDescendantsContext();
  const [index, setIndex] = useState(-1);
  const ref = useRef(null);
  useSafeLayoutEffect(() => {
    return () => {
      if (!ref.current)
        return;
      descendants.unregister(ref.current);
    };
  }, []);
  useSafeLayoutEffect(() => {
    if (!ref.current)
      return;
    const dataIndex = Number(ref.current.dataset["index"]);
    if (index != dataIndex && !Number.isNaN(dataIndex)) {
      setIndex(dataIndex);
    }
  });
  const refCallback = options ? cast(descendants.register(options)) : cast(descendants.register);
  return {
    descendants,
    index,
    enabledIndex: descendants.enabledIndexOf(ref.current),
    register: mergeRefs(refCallback, ref)
  };
}
function createDescendantContext() {
  const ContextProvider = cast(DescendantsContextProvider);
  const _useDescendantsContext = () => cast(useDescendantsContext());
  const _useDescendant = (options) => useDescendant(options);
  const _useDescendants = () => useDescendants();
  return [
    ContextProvider,
    _useDescendantsContext,
    _useDescendants,
    _useDescendant
  ];
}

export {
  createDescendantContext
};
