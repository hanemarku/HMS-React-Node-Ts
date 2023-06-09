import {
  Visibility
} from "./chunk-DZU5YH7Z.mjs";
import {
  useQuery
} from "./chunk-R3K6W4OF.mjs";

// src/hide.tsx
import { jsx } from "react/jsx-runtime";
function Hide(props) {
  const { children, ssr } = props;
  const query = useQuery(props);
  return /* @__PURE__ */ jsx(Visibility, { breakpoint: query, hide: true, ssr, children });
}
Hide.displayName = "Hide";

export {
  Hide
};
