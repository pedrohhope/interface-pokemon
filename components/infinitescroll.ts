import { SetStateAction, Dispatch } from "react";

export const infiniteScroll = (
  setCurrentPage: Dispatch<SetStateAction<number>>,
  setLimits: Dispatch<SetStateAction<number>>,
  sentinel: Element
) => {
  const intersectionObserver = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      setCurrentPage((currentPageInsideState) => currentPageInsideState + 1);
      setLimits((setLimitState) => setLimitState + 9);
    }
  });

  intersectionObserver.observe(sentinel);

  return () => intersectionObserver.disconnect();
};
