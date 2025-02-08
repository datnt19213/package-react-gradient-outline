import React from "react";
import {FC, useState, useEffect, useRef} from "react";
import {GradientOutlineProps} from "../types/index";

const GradientOutline: FC<GradientOutlineProps> = ({
  children,
  id,
  style,
  contentStyle,
  contentClass,
  allowHover = true,
  strokeWidth = 1.5,
  borderRadius = 24,
  hoverGradientColors = ["#E6CAA4", "#E9B84E"],
  gradientColors = [
    "rgba(255, 255, 255, 0.08)",
    "rgba(255, 255, 255, 0.1)",
    "rgba(255, 255, 255, 0.4)",
    "rgba(255, 255, 255, 0)",
    "rgba(255, 255, 255, 0)",
  ],
  gradientAngle = 135,
  className = "",
  onClick,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const gradientId = `gradient-${id}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({width: 100, height: 100});

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const colors = isHovered ? hoverGradientColors : gradientColors;

  return (
    <div
      ref={containerRef}
      id={id}
      onClick={onClick}
      onMouseEnter={() => allowHover && setIsHovered(true)}
      onMouseLeave={() => allowHover && setIsHovered(false)}
      className={` ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        display: "inline-block",
        ...style,
        borderRadius,
      }}
      {...props}
    >
      <div
        className={` ${contentClass}`}
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          ...contentStyle,
        }}
      >
        {children}
      </div>
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 2,
        }}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1={Math.cos((gradientAngle * Math.PI) / 180)}
            y1={Math.sin((gradientAngle * Math.PI) / 180)}
            x2={1 - Math.cos((gradientAngle * Math.PI) / 180)}
            y2={1 - Math.sin((gradientAngle * Math.PI) / 180)}
          >
            {colors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (colors.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
        </defs>
        <rect
          x={strokeWidth / 2}
          y={strokeWidth / 2}
          width={dimensions.width - strokeWidth}
          height={dimensions.height - strokeWidth}
          rx={borderRadius}
          ry={borderRadius}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          fill="none"
        />
      </svg>
    </div>
  );
};

export default GradientOutline;
