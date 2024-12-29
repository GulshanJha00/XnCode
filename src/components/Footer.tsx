import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-900  text-white py-8">
      <div className="flex flex-col mx-10 px-6 md:px-12">
        <div className="flex items-center justify-between mb-6">
          <div className="text-2xl font-bold w-full text-center">
            <span className="text-blue-500 mx-auto ">XnCode</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:place-content-center sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>
            <h3 className="font-semibold text-lg text-center lg:text-start mb-4">
              Quick Links
            </h3>
            <ul className="list-disc list-inside">
              <li>
                <Link href="#" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-center lg:text-start text-lg mb-4">
              Resources
            </h3>
            <ul className="list-disc list-inside">
              <li>
                <Link href="#" className="hover:text-blue-500">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500">
                  API
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-center lg:text-start mb-4">
              Social
            </h3>
            <div className="flex justify-center items-center space-x-4">
              <Link
                href="#"
                className="text-xl text-blue-500 hover:text-blue-600"
              >
                <FaFacebook />
              </Link>
              <Link
                href="#"
                className="text-xl text-blue-400 hover:text-blue-500"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                className="text-xl text-pink-500 hover:text-pink-600"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="text-xl text-blue-700 hover:text-blue-800"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-center lg:text-start text-lg mb-4">
            More
            </h3>
            <ul className="list-disc list-inside">
              <li>
                <Link href="#" className="hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500">
                  Licence
                </Link>
              </li>
            </ul>
          </div>

          
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>
            &copy; 2024 <span className="font-semibold">XnCode</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
