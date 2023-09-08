import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <section className="container mx-auto py-8">
          <div className="lg:flex md:flex sm:flex lg:justify-between md:justify-between sm:justify-center">
            <div className="mb-4 lg:w-1/4 md:w-1/4 sm:w-full">
              <div className="mb-4">
                <h4 className="text-lg font-semibold">Customer services</h4>
                <ul className="mt-2">
                  <li>
                    <a href="#">Find a Store</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                  <li>
                    <a href="#">Repair Service</a>
                  </li>
                  <li>
                    <a href="#">Product Care</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-4 lg:w-1/4 md:w-1/4 sm:w-full">
              <div className="mb-4">
                <h4 className="text-lg font-semibold">Information</h4>
                <ul className="mt-2">
                  <li>
                    <a href="https://iti.gov.eg/iti/home">About ITI</a>
                  </li>
                  <li>
                    <a href="https://iti.gov.eg/iti/home">Work at ITI</a>
                  </li>
                  <li>
                    <a href="https://iti.gov.eg/iti/home">
                      Industry Purchase Program
                    </a>
                  </li>
                  <li>
                    <a href="https://iti.gov.eg/iti/home">Press Enquiries</a>
                  </li>
                  <li>
                    <a href="https://iti.gov.eg/iti/home">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-4 lg:w-1/4 md:w-1/4 sm:w-full">
              <div className="mb-4">
                <h4 className="text-lg font-semibold">Follow ITI</h4>
                <div className="mt-2">
                  <a
                    href="https://www.facebook.com/ITI.eg"
                    target="_blank"
                    className="mr-4 "
                    rel="noopener"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/iti.channel/"
                    target="_blank"
                    className="mr-4 "
                    rel="noopener"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://twitter.com/iti_channel?lang=en"
                    target="_blank"
                    className="mr-4 "
                    rel="noopener"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-center">
              © ITI Racing Limited 2023. All rights reserved.
            </p>
          </div>
        </section>
      </footer>
    </>
  );
}
