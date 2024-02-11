import React, { PropsWithChildren } from "react";

export interface AppWrapperProps {
  /**
   * overlays the app logo on the background
   */
  overlayLogo: boolean;
  /**
   * makes the default app bg visible
   */
  visibile: boolean;
}

type Props = PropsWithChildren<AppWrapperProps>;

/**
 * Creates a wrapper for the app with a default bg ui and
 * auth session logic implemented
 */
export const AppWrapper: React.FC<Props> = ({
  overlayLogo = true,
  visibile = true,
  children,
}) => {
  if (!visibile) return <div className="h-screen w-screen"></div>;
  return (
    <>
      <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center overflow-hidden bg-bgPrimary">
        {overlayLogo && <img src="/bg-overlay-logo.svg" />}
      </div>
      <div className="absolute left-0 top-0 h-screen w-screen">{children}</div>
    </>
  );
};
