import React from 'react'
import { useFormik } from "formik";
import Head from "next/head";

function Form({formik} : {formik: any}) {

  return (
    <>

    <form
      onSubmit={formik.handleSubmit}
      className="bg-white flex rounded-lg font-latoRegular min-w-[50%]"
      >
      <div className="flex-1 text-gray-700  p-20">
        <h1 className="text-3xl pb-2 font-latoBold">
          Checkout
        </h1>
        <p className="text-lg  text-gray-500">
          Mention your data for delivery purposes. Thank you for choosing Booksgasm
        </p>
        <div className="mt-6 ">
          {/* Name input field */}
          <div className="pb-4">
            <label
              htmlFor="name"
              className={`block font-latoBold text-sm pb-2 ${
                formik.touched.name && formik.errors.name
                ? "text-red-400"
                : ""
              } `}
              >
              {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : "Name"}
            </label>
            <p className="text-sm font-latoBold text-red-400 "></p>
            <input
              className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 "
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              />
          </div>
          {/* Number input field */}
          <div className="pb-4">
            <label
              htmlFor="name"
              className={`block font-latoBold text-sm pb-2 ${
                formik.touched.number && formik.errors.number
                ? "text-red-400"
                  : ""
                } `}
                >
              {formik.touched.number && formik.errors.number
                ? formik.errors.number
                : "Number"}
            </label>
            <p className="text-sm font-latoBold text-red-400 "></p>
            <input
              className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 "
              type="number"
              name="number"
              placeholder="Enter your phone number"
              onChange={formik.handleChange}
              value={formik.values.number}
              onBlur={formik.handleBlur}
              />
          </div>
          {/* Email input field */}
          <div className="pb-4">
            <label
              htmlFor="email"
              className={`block font-latoBold text-sm pb-2 ${
                formik.touched.email && formik.errors.email
                ? "text-red-400"
                : ""
              }`}
              >
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : "Email"}
            </label>

            <p></p>
            <input
              className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
              type="email"
              name="email"
              placeholder="Enter your email address"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              />
          </div>
          {/* City input field */}
          <div className="pb-4">
            <label
              htmlFor="city"
              className="block font-latoBold text-sm pb-2"
              >
              City
            </label>
            <select
              className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
              name="city"
              onChange={formik.handleChange}
              value={formik.values.city}
              >
              <option>Kathmandu</option>
              <option>Bhaktapur</option>
              <option>Lalitpur</option>
            </select>
          </div>
          {/* Address input field */}
          <div className="pb-4">
            <label
              htmlFor="email"
              className={`block font-latoBold text-sm pb-2 ${
                formik.touched.address && formik.errors.address
                ? "text-red-400"
                : ""
              }`}
            >
              {formik.touched.address && formik.errors.address
                ? formik.errors.address
                : "Address"}
            </label>

            <p></p>
            <input
              className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
              type="text"
              name="address"
              placeholder="Enter your email address"
              onChange={formik.handleChange}
              value={formik.values.address}
              onBlur={formik.handleBlur}
              />
          </div>
        </div>
      </div>

    </form>
            </>
  )
}

export default Form