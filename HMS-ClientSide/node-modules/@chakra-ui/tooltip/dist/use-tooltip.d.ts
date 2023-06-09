import * as _chakra_ui_react_types from '@chakra-ui/react-types';
import { PropGetter } from '@chakra-ui/react-types';
import { UsePopperProps } from '@chakra-ui/popper';

interface UseTooltipProps extends Pick<UsePopperProps, "modifiers" | "gutter" | "offset" | "arrowPadding" | "direction" | "placement"> {
    /**
     * Delay (in ms) before showing the tooltip
     * @default 0ms
     */
    openDelay?: number;
    /**
     * Delay (in ms) before hiding the tooltip
     * @default 0ms
     */
    closeDelay?: number;
    /**
     * If `true`, the tooltip will hide on click
     * @default true
     */
    closeOnClick?: boolean;
    /**
     * If `true`, the tooltip will hide while the mouse is down
     * @deprecated - use `closeOnPointerDown` instead
     */
    closeOnMouseDown?: boolean;
    /**
     * If `true`, the tooltip will hide while the pointer is down
     * @default true
     */
    closeOnPointerDown?: boolean;
    /**
     * If `true`, the tooltip will hide on pressing Esc key
     * @default true
     */
    closeOnEsc?: boolean;
    /**
     * Callback to run when the tooltip shows
     */
    onOpen?(): void;
    /**
     * Callback to run when the tooltip hides
     */
    onClose?(): void;
    /**
     * Custom `id` to use in place of `uuid`
     */
    id?: string;
    /**
     * If `true`, the tooltip will be shown (in controlled mode)
     * @default false
     */
    isOpen?: boolean;
    /**
     * If `true`, the tooltip will be initially shown
     * @default false
     */
    defaultIsOpen?: boolean;
    /**
     * @default false
     */
    isDisabled?: boolean;
    /**
     * @default false
     */
    closeOnScroll?: boolean;
    /**
     * @default 10
     */
    arrowSize?: number;
    arrowShadowColor?: string;
}
declare function useTooltip(props?: UseTooltipProps): {
    isOpen: boolean;
    show: () => void;
    hide: () => void;
    getTriggerProps: PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getTooltipProps: PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getTooltipPositionerProps: PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getArrowProps: PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getArrowInnerProps: PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
};
declare type UseTooltipReturn = ReturnType<typeof useTooltip>;

export { UseTooltipProps, UseTooltipReturn, useTooltip };
