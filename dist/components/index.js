var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { useState, useEffect, useRef } from "react";
const GradientOutline = (_a) => {
    var { children, id, style, contentStyle, contentClass, allowHover = true, strokeWidth = 1.5, borderRadius = 24, hoverGradientColors = ["#E6CAA4", "#E9B84E"], gradientColors = [
        "rgba(255, 255, 255, 0.08)",
        "rgba(255, 255, 255, 0.1)",
        "rgba(255, 255, 255, 0.4)",
        "rgba(255, 255, 255, 0)",
        "rgba(255, 255, 255, 0)",
    ], gradientAngle = 135, className = "", onClick } = _a, props = __rest(_a, ["children", "id", "style", "contentStyle", "contentClass", "allowHover", "strokeWidth", "borderRadius", "hoverGradientColors", "gradientColors", "gradientAngle", "className", "onClick"]);
    const [isHovered, setIsHovered] = useState(false);
    const gradientId = `gradient-${id}`;
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 100, height: 100 });
    useEffect(() => {
        if (!containerRef.current)
            return;
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
    return (React.createElement("div", Object.assign({ ref: containerRef, id: id, onClick: onClick, onMouseEnter: () => allowHover && setIsHovered(true), onMouseLeave: () => allowHover && setIsHovered(false), className: ` ${className}`, style: Object.assign(Object.assign({ position: "relative", overflow: "hidden", display: "inline-block" }, style), { borderRadius }) }, props),
        React.createElement("div", { className: ` ${contentClass}`, style: Object.assign({ position: "relative", zIndex: 1, width: "100%", height: "100%" }, contentStyle) }, children),
        React.createElement("svg", { width: "100%", height: "100%", style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 2,
            }, viewBox: `0 0 ${dimensions.width} ${dimensions.height}`, preserveAspectRatio: "none" },
            React.createElement("defs", null,
                React.createElement("linearGradient", { id: gradientId, x1: Math.cos((gradientAngle * Math.PI) / 180), y1: Math.sin((gradientAngle * Math.PI) / 180), x2: 1 - Math.cos((gradientAngle * Math.PI) / 180), y2: 1 - Math.sin((gradientAngle * Math.PI) / 180) }, colors.map((color, index) => (React.createElement("stop", { key: index, offset: `${(index / (colors.length - 1)) * 100}%`, stopColor: color }))))),
            React.createElement("rect", { x: strokeWidth / 2, y: strokeWidth / 2, width: dimensions.width - strokeWidth, height: dimensions.height - strokeWidth, rx: borderRadius, ry: borderRadius, stroke: `url(#${gradientId})`, strokeWidth: strokeWidth, fill: "none" }))));
};
export default GradientOutline;
//# sourceMappingURL=index.js.map