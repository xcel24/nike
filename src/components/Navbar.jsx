import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import { hamburger } from '../assets/icons';

const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='Logo' width={130} height={29} />
        </a>
        <ul className='flex flex-1 justify-center items-start gap-16 max-lg:hidden'>
          {navLinks.map((link) => {
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray'
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='Icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
