import React from "react";

type Props = {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  fullWidth?: string;
  onClick?: () => void;
};

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
  onClick,
}: Props) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-3 md:px-7 py-2.5 md:py-4 font-montserrat text:xs md:text-lg leading-none font-medium ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} border-2`
          : "bg-coral-red  text-white border-coral-red"
      } rounded-full ${fullWidth || "w-full"}
      `}
      onClick={onClick}
    >
      {label}
      {iconUrl ? (
        <img
          src={iconUrl}
          alt="btn-Icon"
          className="ml-1 md:ml-2 w-4 h-4 md:w-5 md:h-5"
        />
      ) : null}
    </button>
  );
};

export default Button;
