"use client";
import { type AriaButtonOptions, useButton } from "@react-aria/button";
import type { PressEvent } from "@react-aria/interactions";
import {
  type ElementType,
  type PropsWithChildren,
  useEffect,
  useId,
  useInsertionEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/app/lib/utils";

const COORDS_DURATION = 550;

const Button = (
  props: PropsWithChildren &
    UICommon.StyleProps &
    AriaButtonOptions<ElementType>,
) => {
  const keyframesId = useId();
  const { children, className, style, onPress, ...rest } = props;
  const { elementType: Element = "button" } = rest;
  const [coords, setCoords] = useState<
    { x: number; y: number; timestamp: number }[]
  >([]);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const handlePress = (e: PressEvent) => {
    const timestamp = Date.now();
    setCoords((prev) => [...prev, { x: e.x, y: e.y, timestamp }]);
    timeout.current = setTimeout(() => {
      setCoords((prev) =>
        prev.filter((coord) => coord.timestamp !== timestamp),
      );
    }, COORDS_DURATION);
  };

  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(
    {
      ...rest,
      onPress: (e) => {
        handlePress(e);
        onPress?.(e);
      },
    },
    ref,
  );

  useEffect(() => {
    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, []);

  useInsertionEffect(() => {
    console.log(keyframesId);
    const keyframes = `
      @keyframes ripple {
        from {
          scale: 0;
          opacity: 1;
        }
        to {
          scale: 6;
          opacity: 0;
        }
      }
    `;
    const style = document.createElement("style");
    style.id = keyframesId;
    style.textContent = keyframes;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [keyframesId]);

  return (
    <Element
      {...buttonProps}
      ref={ref}
      className={cn(
        "relative px-4 py-2 rounded-md text-white cursor-pointer transition-colors bg-primary hover:bg-primary-hover active:bg-primary-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:bg-disabled-bg disabled:cursor-not-allowed disabled:text-disabled",
        className,
      )}
      style={style}
    >
      {coords.map((coord) => (
        <div
          key={coord.timestamp}
          className="absolute inset-0 h-8 w-8 rounded-full bg-white/60"
          style={{
            animation: "ripple 0.6s ease-out",
            translate: "-50% -50%",
            left: coord.x,
            top: coord.y,
          }}
        />
      ))}
      {children}
    </Element>
  );
};

export default Button;
