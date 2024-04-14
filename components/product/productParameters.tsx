interface ProductParameterProps {
  name: string;
  value: string;
  inverted?: boolean;
}

const ProductParameter: React.FC<ProductParameterProps> = ({
  name,
  value,
  inverted,
}) => {
  return (
    <div
      className={
        "w-full flex flex-row flex-nowrap border-[#dedede] border-b h-10 items-center justify-center " +
        (inverted ? "bg-white" : "bg-[#dedede]")
      }
    >
      <div className="w-1/2 p-4">{name}</div>
      <div className="w-1/2 p-4">{value}</div>
    </div>
  );
};

export default ProductParameter;
