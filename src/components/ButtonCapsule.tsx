interface ButtonCapsuleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  bgColor: string;
  fontColor: string;
  marginTop?: string;
}

const ButtonCapsule: React.FC<ButtonCapsuleProps> = ({
  text,
  bgColor,
  fontColor,
  marginTop,
  ...props
}) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: fontColor,
        marginTop: marginTop,
      }}
      className="h-[70px] w-[190px] py-[24px] px-[48px] rounded-[170px] cursor-pointer text-medium font-[18px]"
      {...props}
    >
      {text}
    </button>
  );
};

export default ButtonCapsule;
