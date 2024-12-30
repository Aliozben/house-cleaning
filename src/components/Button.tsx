import Image from "next/image";
import {title} from "process";

type ButtonProps = {
  text: string;
  type: "button" | "submit";
  icon?: string;
  variant: string;
  onClick?: () => void;
};

export default function Button({
  text,
  type,
  icon,
  variant,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{text}</label>
    </button>
  );
}
