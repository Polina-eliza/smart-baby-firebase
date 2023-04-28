import ProductCard from '../UI/ProductCard';

const ProductsList = ({data}) => {
  return (
    <>
      {data?.map(item => (
          <ProductCard item={item}/>
      ))}
    </>
  );
};

export default ProductsList;