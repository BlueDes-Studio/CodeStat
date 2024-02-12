import React from "react";

export interface BrandingProps {
  /**
   * scale for the branding in px
   */
  scale: number;
}

/**
 * Scalable branding sign
 */
export const Branding: React.FC<BrandingProps> = ({ scale }) => {
  return <img src="/branding.svg" className={`scale-${scale}`} />;
};
