import { star } from '../assets/icons';

const ProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-col flex-1 w-full max-sm:w-full'>
      <img
        src={imgURL}
        alt={name}
        width={280}
        height={280}
        className='object-contain'
      />
      <div className='mt-8 flex justify-start gap-2.5 items-center'>
        <img src={star} alt='rating' width={24} height={24} />
        <p className='text-slate-gray text-xl font-montserrat leading-normal'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 text-2xl font-semibold leading-normal font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        {price}
      </p>
    </div>
  );
};

export default ProductCard;
