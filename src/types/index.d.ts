import {CSSProperties, HTMLAttributes} from "react";

/**
 * @see https://github.com/datnt19213/package-react-gradient-outline
 *
 * @param {string} style - Custom styles for the outer container.
 * @param {string} contentStyle - Styles applied to the inner content container.
 * @param {string} contentClass - Additional class names for the inner content.
 * @param {string} className - Additional class names for the outer container.
 * @param {string} id - The ID of the outer container.
 * @param {function} onClick - A callback function that is called when the outer container is clicked.
 * @param {number} strokeWidth - The width of the stroke around the content.
 * @param {number} borderRadius - The border radius of the outer container.
 * @param {string[]} gradientColors - An array of colors to be used in the gradient.
 * @param {string[]} hoverGradientColors - An array of colors to be used in the gradient when the container is hovered over.
 * @param {number} gradientAngle - The angle of the gradient.
 * @param {boolean} allowHover - A boolean that determines whether the gradient should change when the container is hovered over.
 * @param {React.ReactNode} children - The content to be rendered inside the container.
 * @returns {ReactElement} - The rendered component.
 *
 */

export type GradientOutlineProps = {
  children: React.ReactNode;
  strokeWidth?: number;
  borderRadius?: number;
  gradientColors?: string[];
  hoverGradientColors?: string[];
  gradientAngle?: number;
  allowHover?: boolean;
  className?: string;
  contentClass?: string;
  style?: CSSProperties;
  contentStyle?: CSSProperties;
  id: string;
  onClick?: () => void;
} & HTMLAttributes<HTMLDivElement>;
