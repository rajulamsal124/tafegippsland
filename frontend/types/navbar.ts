// types/navbar.ts
export interface LogoProps {
  // Define your props here, for example:
  width?: number;
  height?: number;
  fill?: string;
  // Add other prop types as required
}
export interface NavItemProps {
  label: string;
  subLabel?: string;
  children?: Array<NavItemProps>;
  href?: string;
}