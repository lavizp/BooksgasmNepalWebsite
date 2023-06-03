import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import Wrapper from '@/components/shared/wraper';
import Form from '@/components/checkout/form';
import OrderSection from '@/components/checkout/orderSection';
import Head from 'next/head';
import { useFormik } from 'formik';
import * as Yup from "yup";

function Checkout() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      city: "Kathmandu",
      address: "",
      landmark: ""
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address"),
      number: Yup.number().required("Phone number is required") ,
      address: Yup.string().required("Address is Required")
      }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      // router.push({ pathname: "/success", query: values });
    },
  });
    const { cartItems } = useSelector((state: any) => state.cart);
    const subTotal: number = useMemo(() => {
        let total = 0;
        cartItems.forEach((element: any) => {
            total += (element.quantity*element.oneQuantity)
        });
        return total
    }, [cartItems]);
  return (
    <>
    <Head>
      <title>Checkout</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Wrapper>
      <div className='h-auto items-center flex justify-between md:flex-row flex-col'>
        <Form formik={formik}/>
        <OrderSection total={subTotal} delivery={9}/>

      </div>

    </Wrapper>
    </>
  )
}

export default Checkout