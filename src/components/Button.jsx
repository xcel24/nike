const Button = ({ label, iconURL }) => {
  return (
    <button className='button'>
      {label}
      <img
        src={iconURL}
        alt='Arrow Right'
        className='ml-2 w-5 h-5 rounded-full'
      />
    </button>
  );
};

export default Button;
