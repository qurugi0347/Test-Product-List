import React, {useEffect, useMemo} from "react";

interface ScrollCallbackProps {
  onBottom?: () => any;
  onTop?: () => any;
}

const useScroll = (elementId: string, options: ScrollCallbackProps) => {
  const {onBottom, onTop} = options;

  useEffect(() => {
    const element = document.getElementById(elementId) as HTMLElement;
    if (!element) return;
    const onScrollEvent = () => {
      if (element.clientHeight + element.scrollTop === element.scrollHeight) {
        if (onBottom) onBottom();
      }
      if (element.scrollTop === 0) {
        if (onTop) onTop();
      }
    };

    element.addEventListener("scroll", onScrollEvent);
    return () => {
      element.removeEventListener("scroll", onScrollEvent);
    };
  }, [elementId]);
  return {
    scrollToTop: () => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollTo(0, 0);
      }
    },
  };
};

export default useScroll;
