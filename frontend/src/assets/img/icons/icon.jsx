import { ICONS } from "./mapIcon";

export function Icon({ name, className, title,  }) {
  const Component = ICONS[name];
  if (!Component) return null;

  const ariaHidden = title ? undefined : true;
  const role = title ? "img" : undefined;

  return <Component className={className} title={title} aria-hidden={ariaHidden} role={role} />;
}