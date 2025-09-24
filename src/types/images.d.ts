declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.webp";
declare module "*.avif";
declare module "*.svg" {
  import * as React from "react";
  const src: React.FunctionComponent<React.SVGProps<SVGSVGElement>> & {
    src: string;
  };
  export default src;
}
