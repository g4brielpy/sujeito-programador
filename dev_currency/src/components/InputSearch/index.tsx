import { type ComponentProps } from "react";

type InputSearchProps = ComponentProps<"input">;

export function InputSearch({ className = "", ...rest }: InputSearchProps) {
  return (
    <input
      type="text"
      name="name-cript"
      required
      placeholder="Digite o nome da Crypto"
      {...rest}
      className={`
            bg-primaryOpace text-white rounded-md px-4 h-12
            flex-1 outline-none border-none
            transition-shadow duration-300 ease-in-out
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600
            ${className}
          `}
    />
  );
}
