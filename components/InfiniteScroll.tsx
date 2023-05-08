import React, {
  useEffect,
  useRef,
} from 'react';

interface Props {
  children: React.ReactNode;
  onScrollEnd: () => void;
}

function InfiniteScroll(props: Props) {
  const {
    onScrollEnd
  } = props

  const endDivRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
      const intersectionObserver = new IntersectionObserver((entries) => {
          if (entries.some((entry) => entry.isIntersecting)) onScrollEnd();
        });

        intersectionObserver.observe(endDivRef.current);

        return () => intersectionObserver.disconnect();
  }, [endDivRef, onScrollEnd]);
  return (
      <div className='infite-scroll-container'>
          {props.children}
          <div ref={endDivRef} className='end-div' />
      </div>
  )
}
export default InfiniteScroll;