import React from "react";

function Footer() {
  return (
    <footer className="bg-[#1e0a00] rounded-lg shadow mx-1">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-white">
            <h2>Foo<span>die</span></h2>
            <p>Food order now super easy for everyone.
              Let&apos;s order your food through our website and enjoy your ordering.
            </p>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className="flex flex-col">
              <h3 className="text-white">Company</h3>
              <a href="#" className="hover:underline me-4 md:me-6">
                Home
              </a>
              <a href="#" className="hover:underline me-4 md:me-6">
                About Us
              </a>
              <a href="#" className="hover:underline me-4 md:me-6">
                Contact Us
              </a>
            </li>
            <li className="flex flex-col">
              <h3 className="text-white">Features</h3>
              <a href="#" className="hover:underline me-4 md:me-6">
                Blog
              </a>
              <a href="#" className="hover:underline me-4 md:me-6">
                Support
              </a>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy
              </a>
              <a href="#" className="hover:underline me-4 md:me-6">
                Security
              </a>
            </li>
            <li  className="flex flex-col">
              <h3 className="text-white">Support</h3>
              <a href="#" className="hover:underline me-4 md:me-6">
                +254758982500
              </a>
              <a href="#" className="hover:underline me-4 md:me-6">
                newton@gmail.com
              </a>
              <a href="#" className="hover:underline me-4 md:me-6">
                Kibera, Nairobi Kenya
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
