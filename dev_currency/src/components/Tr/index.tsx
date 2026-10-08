import { type ComponentProps } from "react";

type TrProps = ComponentProps<"tr">;

export function Tr({ children, className = "", ...rest }: TrProps) {
  return (
    <tr
      className={`bg-primaryOpace font-bold h-12 rounded-lg ${className}`}
      {...rest}
    >
      {children}
    </tr>
  );
}
