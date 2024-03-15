import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

const IconWrapper = ({ children, size }) => (
  <span style={{ fontSize: size }}>{children}</span>
);

IconWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number.isRequired,
};

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Service
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal relative"
      >
        <a href="#" className="flex items-center">
          Pricing
          <div className="absolute top-full left-0 bg-white shadow-md py-2 px-4 mt-1 z-10 hidden">
            <a href="#" className="block py-1">Option 1</a>
            <a href="#" className="block py-1">Option 2</a>
            <a href="#" className="block py-1">Option 3</a>
          </div>
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 text-black">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-2 cursor-pointer py-1.5 font-medium text-4xl"
        >
          Foo<span className="text-[#E14B00]">die</span>
        </Typography>
        <div className="flex items-center gap-2">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex">
            <Button variant="text" size="sm" className="hidden lg:inline-block">
              <IconWrapper size={24}>
                <FiUser className="text-[#E14B00]" />
              </IconWrapper>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <IconWrapper size={24}>
                <IoCartOutline className="text-[#E14B00]" />
              </IconWrapper>
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <div>
          <Button fullWidth variant="text" className="sm:inline-block">
            <IconWrapper size={32}>
              <FiUser className="text-[#E14B00]" />
            </IconWrapper>
          </Button>
          <Button variant="gradient" size="sm" className="sm:inline-block">
            <IconWrapper size={32}>
              <IoCartOutline className="text-[#E14B00]" />
            </IconWrapper>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
