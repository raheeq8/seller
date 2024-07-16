import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [id, setId] = useState("");
  useEffect(() => {
    const newId = `${uuidv4()}${uuidv4()}`;
    setId(newId);
  }, []);
  return (
    <div className=" p-4">
      <div className="homeHero">
        <div className="heromWrapper">
          <div className="flex flex-col items-start pt-[7%] px-6 justify-start">
            <h1 className="text-white font-bold text-[26px]">
              Now you can sell on Eliph store
            </h1>
            <p className="text-white font-semibold">
              Join Eliphstore and unlock the potential of your business. Reach <br />
              millions of customers, increase your sales, and grow your brand <br />
              with our easy-to-use platform.
            </p>
            <Link
              className=" border-none rounded-[50px] px-5 py-3 mt-3 bg-white text-blue-700"
              to={`/seller/register/${id}`}
            >
              <button className=" font-bold">Register Now</button>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold my-4">Welcome to Our Website</h1>
      <p className="mb-4">
        Here's how you can become a seller on our website...
      </p>
      <div className="flex flex-col">
        <div className=" mb-5">
          <h3 className="text-[18px] font-bold mb-1">
            How can I start selling on Eliphstore?
          </h3>
          <p className="text-[18px]">
            To register as a Seller, simply visit the Eliphstore Seller
            Registration page and fill out the necessary information. You can
            also view a detailed tutorial on Eliphstore seller{" "}
            <Link
              className="font-bold text-blue-500"
              to={`/seller/register/${id}`}
            >
              Sign-up
            </Link>{" "}
            here.
          </p>
        </div>
        <div className=" mb-5">
          <h3 className="text-[18px] font-bold mb-1">
            What types of products can I sell on Eliphstore?
          </h3>
          <p className="text-[18px]">
            Eliphstore offers over 30 main categories of goods you can sell,
            including fashion, electronics, FMCG, lifestyle, health & beauty,
            and more. However, there are certain items that are prohibited by
            law or cultural norms, which sellers must refrain from listing. For
            a full list of prohibited items, view here.
          </p>
        </div>
        <div className=" mb-5">
          <h3 className="text-[18px] font-bold mb-1">
            What is the Eliphstore Seller Center?
          </h3>
          <p className="text-[18px]">
            The Eliphstore Seller Center is a dedicated platform for sellers to
            receive orders and sell across Pakistan. By registering your
            products and uploading them on Eliphstore’s marketplace, you can
            easily manage your sales and receive payments directly in your
            account. For more information about the Seller Center, click here.
          </p>
        </div>
        <div className=" mb-5">
          <h3 className="text-[18px] font-bold mb-1">
            How do I list my products on Eliphstore?
          </h3>
          <p className="text-[18px]">
            Listing your products on Eliphstore is simple. Log in to your Seller
            Center account, navigate to the product listing section, and follow
            the step-by-step instructions. You can find more details here.
          </p>
        </div>
        <div className=" mb-5">
          <h3 className="text-[18px] font-bold mb-1">
            What are the seller fees on Eliphstore?
          </h3>
          <p className="text-[18px]">
            Eliphstore charges a commission fee for each sale, which varies
            depending on the product category. For a detailed breakdown of fees,
            check out the fee structure here.
          </p>
        </div>
        <div className=" mb-5">
          <h3 className="text-[18px] font-bold mb-1">
            How do I handle shipping on Eliphstore?
          </h3>
          <p className="text-[18px]">
            Eliphstore offers various shipping options through our logistics
            partners. You can select the shipping method that best fits your
            needs. Learn more about our shipping solutions here.
          </p>
        </div>
        <div className=" mb-5">
          <h3 className="text-[18px] font-bold mb-1">
            How can I manage returns and refunds on Eliphstore?
          </h3>
          <p className="text-[18px]">
            Managing returns and refunds is straightforward through the
            Eliphstore Seller Center. Make sure to follow our policies and
            guidelines, which you can read about in detail here.
          </p>
        </div>
        <div className=" mb-5">
          <h3 className="text-[18px] font-bold mb-1">
            Can I promote my products on Eliphstore?
          </h3>
          <p className="text-[18px]">
            Yes, Eliphstore provides several advertising options to help you
            increase the visibility of your products. Explore our advertising
            solutions here.
          </p>
        </div>
        <div className=" mb-5">
          <h3 className="text-[18px] font-bold mb-1">
            What support is available for Eliphstore sellers?
          </h3>
          <p className="text-[18px]">
            Eliphstore offers extensive support, including a help center, live
            chat, and email support for all sellers. Contact our support team
            here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
