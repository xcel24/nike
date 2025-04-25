import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { statistics, shoes } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
import { useState } from 'react';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col min-h-screen gap-10 max-container'
    >
      {/* Description */}
      <div
        className='flex flex-col justify-center 
      items-start xl:w-2/5 w-full max-xl:padding-x pt-28'
      >
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer Collections
        </p>
        <h1
          className='text-8xl mt-10 font-palanquin 
        max-sm:text-[72px] max-sm:leading-[82px] font-bold'
        >
          <span className='xl:bg-white xl:whitespace-nowrap z-10 relative pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red mt-3 inline-block'>Nike</span> Shoes
        </h1>
        <p className='mt-6 mb-14 font-montserrat text-slate-gray text-lg leading-8 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label='Shop Now' iconURL={arrowRight} />
        <div
          className='flex mt-20 gap-16 
        w-full justify-start items-start flex-wrap'
        >
          {statistics.map((stat) => (
            <div key={stat.label}>
              <h3 className='text-4xl font-palanquin font-bold'>
                {stat.value}
              </h3>
              <p className='font-montserrat text-slate-gray text-lg mt-2'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className='flex-1 flex justify-center items-center xl:min-h-screen 
      max-xl:py-40 bg-primary bg-hero bg-center relative'
      >
        <img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={500}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImage={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
