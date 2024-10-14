import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo e información general */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Our Company</h2>
            <p className="text-sm">
              We are a company dedicated to offering quality solutions for
              companies and businesses.
            </p>
          </div>
          {/* Enlaces rápidos */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Quick links</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Redes sociales */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">follow us</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="#" aria-label="Facebook">
                  <svg
                    className="w-6 h-6 fill-current text-white hover:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.73 0-1.325.595-1.325 1.325v21.351c0 .73.595 1.324 1.325 1.324h11.49v-9.294h-3.127v-3.622h3.127v-2.671c0-3.1 1.894-4.787 4.661-4.787 1.325 0 2.463.099 2.795.143v3.24h-1.917c-1.505 0-1.796.715-1.796 1.762v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.325-.595 1.325-1.324v-21.35c0-.73-.595-1.325-1.325-1.325z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  <svg
                    className="w-6 h-6 fill-current text-white hover:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.565-2.005.974-3.127 1.195-.896-.957-2.173-1.555-3.591-1.555-2.717 0-4.917 2.2-4.917 4.917 0 .385.043.76.126 1.122-4.083-.205-7.702-2.16-10.126-5.13-.423.725-.666 1.565-.666 2.465 0 1.701.866 3.2 2.181 4.081-.803-.025-1.56-.246-2.22-.615v.062c0 2.374 1.688 4.354 3.925 4.802-.411.111-.844.171-1.292.171-.315 0-.623-.03-.924-.086.623 1.943 2.432 3.355 4.575 3.394-1.677 1.313-3.791 2.097-6.09 2.097-.395 0-.785-.023-1.17-.068 2.172 1.392 4.751 2.205 7.522 2.205 9.025 0 13.96-7.481 13.96-13.961 0-.213-.004-.426-.014-.637.959-.692 1.794-1.56 2.451-2.548l-.047-.02z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <svg
                    className="w-6 h-6 fill-current text-white hover:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.346 3.608 1.321.974.975 1.258 2.242 1.32 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.346 2.633-1.32 3.608-.975.974-2.242 1.258-3.608 1.32-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.346-3.608-1.32-.974-.975-1.258-2.242-1.32-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.062-1.366.346-2.633 1.32-3.608.975-.974 2.242-1.258 3.608-1.32 1.265-.058 1.645-.069 4.849-.069m0-2.163c-3.259 0-3.67.014-4.947.072-1.278.059-2.575.346-3.631 1.401-1.056 1.056-1.342 2.353-1.401 3.631-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.059 1.278.346 2.575 1.401 3.631 1.056 1.056 2.353 1.342 3.631 1.401 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.278-.059 2.575-.346 3.631-1.401 1.056-1.056 1.342-2.353 1.401-3.631.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.059-1.278-.346-2.575-1.401-3.631-1.056-1.056-2.353-1.342-3.631-1.401-1.277-.058-1.688-.072-4.947-.072z" />
                    <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Derechos reservados */}
        <div className="text-center text-gray-400 text-sm mt-6">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
