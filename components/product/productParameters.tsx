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
        "w-full flex flex-col md:flex-row flex-nowrap border-mutedtext-light border-b h-auto md:h-10 text-center md:text-left items-center justify-center " +
        (inverted ? "bg-white" : "bg-mutedtext-light")
      }
    >
      <div className="w-1/2 px-4 pt-2 md:p-4 font-bold md:font-normal">
        {name}
      </div>
      <div className="w-1/2 px-4 pb-2 md:p-4">{value}</div>
    </div>
  );
};

export default ProductParameter;
