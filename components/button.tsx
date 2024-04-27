interface ButtonProps {
  children: React.ReactNode;
  link: string;
  inverse: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, link, inverse }) => {
  return (
    <a href={link}>
      <div
        className={`px-6 py-2 border-2 transition-all duration-300 text-center ${
          !inverse
            ? "bg-orange border-orange text-white hover:bg-red hover:border-red"
            : "bg-transparent border-orange text-orange hover:bg-orange hover:border-orange hover:text-white"
        }`}
      >
        {children}
      </div>
    </a>
  );
};

export default Button;
