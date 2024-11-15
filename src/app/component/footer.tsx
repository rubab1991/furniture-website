import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faFacebook, faSquareXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="stripe-pattern shadow-2xl p-8 bg-black text-black">
      <ul className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Panto Section */}
        <li className="text-2xl font-bold p-4 rounded-lg">
          Panto
          <p className="font-light text-base text-gray-900 mt-2">
            The advantage of hiring a workspace with us is that it gives you
            comfortable service and all-around facilities.
          </p>
        </li>

        {/* Services Section */}
        <li className="p-4 rounded-lg">
          <h3 className="text-orange-500 text-xl font-semibold">Services</h3>
          <ul className="mt-2 space-y-1">
            <li className="text-gray-900 font-light text-base">Email Marketing</li>
            <li className="text-gray-900 font-light text-base">Campaigns</li>
            <li className="text-gray-900 font-light text-base">Branding</li>
          </ul>
        </li>

        {/* Furniture Section */}
        <li className="p-4 rounded-lg">
          <h3 className="text-orange-500 text-xl font-semibold">Furniture</h3>
          <ul className="mt-2 space-y-1">
            <li className="text-gray-900 font-light text-base">Beds</li>
            <li className="text-gray-900 font-light text-base">Chairs</li>
            <li className="text-gray-900 font-light text-base">All</li>
          </ul>
        </li>

        {/* Follow Section */}
        <li className="p-4 rounded-lg">
          <h3 className="text-orange-500 text-xl font-semibold">Follow</h3>
          <ul className="space-y-4 mt-4">
            <li className="flex items-center space-x-2">
              <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-900 w-6 h-6" />
              </Link>
              <p className="text-gray-900">Facebook</p>
            </li>
            <li className="flex items-center space-x-2">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSquareXTwitter} className="text-black hover:text-gray-700 w-6 h-6" />
              </Link>
              <p className="text-gray-900">Twitter</p>
            </li>
            <li className="flex items-center space-x-2">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-red-600 hover:text-red-900 w-6 h-6" />
              </Link>
              <p className="text-gray-900">Instagram</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
