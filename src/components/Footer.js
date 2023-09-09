import React from "react";
import {
  UilFacebook,
  UilTwitter,
  UilInstagram,
} from "@iconscout/react-unicons";

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white">
        <section className="container mx-auto py-8">
          <div className="lg:flex md:flex sm:flex lg:justify-between md:justify-between sm:justify-center flex-wrap">
            <div className="mb-4 lg:w-1/4 md:w-1/4 sm:w-full">
              <div className="mb-4">
                <h4 className="text-lg font-semibold">Customer services</h4>
                <ul className="mt-2">
                  <li>
                    <a href="#" className="text-sm">
                      Find a Store
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      FAQ
                    </a>
                  </li>
                  {/* Add more customer service links here */}
                </ul>
              </div>
            </div>
            <div className="mb-4 lg:w-1/4 md:w-1/4 sm:w-full">
              <div className="mb-4">
                <h4 className="text-lg font-semibold">Information</h4>
                <ul className="mt-2">
                  <li>
                    <a href="https://iti.gov.eg/iti/home" className="text-sm">
                      About ITI
                    </a>
                  </li>
                  <li>
                    <a href="https://iti.gov.eg/iti/home" className="text-sm">
                      Work at ITI
                    </a>
                  </li>
                  {/* Add more information links here */}
                </ul>
              </div>
            </div>
            <div className="mb-4 lg:w-1/4 md:w-1/4 sm:w-full">
              <div className="mb-4">
                <h4 className="text-lg font-semibold">Follow ITI</h4>
                <div className="mt-2 flex">
                  <a
                    href="https://www.facebook.com/ITI.eg"
                    target="_blank"
                    className="mr-4 "
                    rel="noopener"
                  >
                    <UilFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/iti.channel/"
                    target="_blank"
                    className="mr-4 "
                    rel="noopener"
                  >
                    <UilInstagram />
                  </a>
                  <a
                    href="https://twitter.com/iti_channel?lang=en"
                    target="_blank"
                    className="mr-4 "
                    rel="noopener"
                  >
                    <UilTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm">
              © ITI Racing Limited 2023. All rights reserved.
            </p>
          </div>
        </section>
      </footer>
    </>
  );
}
