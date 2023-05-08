export const infiniteScroll = (setCurrentPage, sentinel) => {
  const intersectionObserver = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      setCurrentPage((currentPageInsideState) => currentPageInsideState + 1);
    }
  });

  intersectionObserver.observe(sentinel);

  return () => intersectionObserver.disconnect();
}
