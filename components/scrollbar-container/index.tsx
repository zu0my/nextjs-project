"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, type PropsWithChildren } from "react";
import styles from "./index.module.css";

interface ScrollbarContainerProps extends PropsWithChildren {
  scroll?: {
    x?: boolean;
    y?: boolean;
  };
}

const ScrollbarContainer = (props: ScrollbarContainerProps) => {
  const { children, scroll } = props;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      let timer: NodeJS.Timeout | null = null;
      const toggleClassList = () => {
        timer && clearTimeout(timer);

        scrollContainerRef.current?.classList.add(styles["scrollbar-color"]);

        timer = setTimeout(() => {
          scrollContainerRef.current?.classList.remove(
            styles["scrollbar-color"],
          );
        }, 500);
      };

      scrollContainerRef.current.addEventListener("scroll", toggleClassList);

      return () => {
        scrollContainerRef.current?.removeEventListener(
          "scroll",
          toggleClassList,
        );
      };
    }
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className={cn(
        styles.scrollbar,
        scroll?.y ? "overflow-y-scroll" : "overflow-y-clip",
        scroll?.x ? "overflow-x-scroll" : "overflow-x-clip",
      )}
    >
      {children}
    </div>
  );
};

export default ScrollbarContainer;
