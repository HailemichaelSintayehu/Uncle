'use client'
import { useCreateSubscriptionMutation } from '@/redux/api'
import { useAppSelector ,useAppDispatch } from '@/redux/hooks'
import { clear_cart } from '@/redux/slices/cartSlice'
import React, { useEffect, useState } from 'react'

type Props = {}

const Page = (props: Props) => {
    const dispatch = useAppDispatch()
    const [createSubscription] = useCreateSubscriptionMutation()
    const cartProducts = useAppSelector(state => state.cart.cartProducts)
  console.log(cartProducts,"cartProducts")
    useEffect(() => {
      const postSubscription = async () => {
          try {
              const response = await createSubscription(cartProducts.map(product => ({
                  name:product.title,
                  image:product.productImg,
                  price:product.price as number,
                  quantity:product.totalCart as number,
                  plan:product.plan as number,
                  option:product.option as string,
                  email: product.email as string,
                  phone_number:  product.phone_number as string,
                  residential_address:  product.residential_address as string,
                  delivery_address: product.delivery_address as string,
                  preferred_delivery_date: product.preferred_delivery_date as string,
                  preferred_communication_method:  product.preferred_communication_method as string,
                
              }))).unwrap()
              dispatch(clear_cart())
          } catch (error) {
              console.log(error)
          }
      }
        postSubscription()
    },[])
  return (
    <section className="error-area">
    <div className="container container-small">
      <div className="row">
        <div className="col-lg-12">
          <div className="error-content">
            <h3>THANK YOU</h3>
            <p>Payment Is Successfully Processsed And Your Order Is On The Way </p>
            {/* <p>Transaction ID:1254284759352</p> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Page




            