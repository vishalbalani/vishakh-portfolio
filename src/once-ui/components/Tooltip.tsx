"use client";

import React from "react";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
  label: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({ 
  label, 
  position = "top" 
}) => {
  return (
    <div 
      className={`${styles.tooltip} ${styles[position]}`}
      role="tooltip"
    >
      {label}
    </div>
  );
};

export default Tooltip;