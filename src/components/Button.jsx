const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center 
    gap-2 ${backgroundColor ? backgroundColor : 'bg-coral-red'} ${
        textColor ? textColor : 'text-white'
      } px-7 py-4 
    font-montserrat border text-lg leading-none 
    rounded-full ${
      borderColor ? borderColor : 'border-coral-red'
    }cursor-pointer ${fullWidth && 'w-full'}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt='Arrow Right'
          className='ml-2 w-5 h-5 rounded-full'
        />
      )}
    </button>
  );
};

export default Button;
