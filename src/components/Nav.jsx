import headerLogo from "/images/header-logo.svg";
import hamburger from "/icons/hamburger.svg";
import { navLinks } from "../constants/index";

console.log(navLinks);
export const Nav = () => {
  return (
    // z-10 z-index:10
    <header className="padding-x py-8 absolute z-10 w-full">
      {/*  max-width: 1440px; margin: 0 auto; */}
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="header logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  // line-height: 1.5;
                  className="font-montserrat leading-normal text-lg"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};
