
  import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
  import type { RootState } from "../store";
import { Order, ProductsType, ProductsTypeId } from "@/interFace/interFace";
  
  export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:3001/api/",
      prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.session as string;
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
      },
    }),
    endpoints: (builder) => ({
      login: builder.mutation<{ message:string, user:any, session:{token:string}}, { email:string, password:string }>({
        query: (credentials) => ({
          url: `login`,
          method: "POST",
          body:{...credentials}
        }),
      }),
      register: builder.mutation<any, { firstname:string, lastname:string, email:string, phone:string, password:string }>({
        query: (user) => ({
          url: `register`,
          method: "POST",
          body:{...user}
        }),
      }),
      getAppliances: builder.query<ProductsType[], void>({
        query: () => `appliances`,
        transformResponse(baseQueryReturnValue:any, meta, arg) {

             const appliances = baseQueryReturnValue.appliances.map((appliance:any) => {
              const {
                id,
                item_name,
                full_retail_price,
                featured_image,
                image,
                size,
                M3_rental_price,
                M6_rental_price,
                M12_rental_price,
                M18_rental_price,
                M24_rental_price,
                in_stock,
                rating,
                category,
                brand,
                description,
                reviews,
                condition,
                warranty,
                model,
                key_features,
                buy,
                product_description,
                discount,
               } = appliance
               return {
                id:id,
                title:item_name,
                rating: rating,
                totalProduct: in_stock,
                category:category,
                brand:brand,
                productImg:featured_image,
                images: image,
                retail_price:full_retail_price,
                M3_rental_price: M3_rental_price,
                M6_rental_price: M6_rental_price,
                M12_rental_price: M12_rental_price,
                M18_rental_price: M18_rental_price,
                M24_rental_price: M24_rental_price,
                size: size,
                description:description,
                condition:condition,
                reviews:reviews,
                model:model,
                warranty:warranty,
                features:key_features,
                buy:buy,
                product_description: product_description,
                discount:discount,
              }
             })

             return appliances;


        },
      }),
      getApplianceById: builder.query<ProductsTypeId, number>({
        query: (id) => `appliances/${id}`,
        transformResponse(baseQueryReturnValue:ProductsTypeId, meta, arg):ProductsTypeId {
          const {
            id,
            item_name,
            full_retail_price,
            featured_image,
            image,
            size,
            M3_rental_price,
            M6_rental_price,
            M12_rental_price,
            M18_rental_price,
            M24_rental_price,
            M3_non_discount,
            M6_non_discount,
            M12_non_discount,
            M18_non_discount,
            M24_non_discount,
           in_stock,
            rating,
            category,
            brand,
            description,
            reviews,
            condition,
            warranty,
            model,
            key_features,
            buy,
            product_description,
           } = baseQueryReturnValue
           return {
            id:id,
            title:item_name,
            rating: rating,
            totalProduct: in_stock,
            category:category,
            brand:brand,
            productImg:featured_image,
            images: image,
            retail_price:full_retail_price,
            M3_rental_price: M3_rental_price,
            M6_rental_price: M6_rental_price,
            M12_rental_price: M12_rental_price,
            M18_rental_price: M18_rental_price,
            M24_rental_price: M24_rental_price,
            M3_non_discount: M3_non_discount,
            M6_non_discount: M6_non_discount,
            M12_non_discount:M12_non_discount,
            M18_non_discount:M18_non_discount,
            M24_non_discount:M24_non_discount,
            size: size,
            description:description,
            condition:condition,
            reviews:reviews,
            model:model,
            warranty:warranty,
            features:key_features,
            buy,
            product_description: product_description,
            featured_image,
            image,
            item_name, full_retail_price, in_stock, key_features
          }
        },
      }),
      updateProfile: builder.mutation<{user:any}, { firstname:string, lastname:string, email:string, phone:string }>({
        query: (profile) => ({
          url: `update-profile`,
          method: "PUT",
          body:{...profile}
        }),
      }),
      createStripeSession: builder.mutation<string, { appliance_id:number, price:number, quantity:number}[]>({
        query: (items) => ({
          url:'stripe/checkout',
          method: "POST",
          body: {
            items:items,

          }
        }),

        transformResponse(baseQueryReturnValue:any, meta, arg) {
            return baseQueryReturnValue.url
        },
      }),
      createSubscription: builder.mutation<void,  { name:string, image:string, price:number, quantity:number, plan:number,option:string,email:string,
        phone_number:string,
        residential_address:string,
        delivery_address:string,
        preferred_delivery_date:string,
        preferred_communication_method:string}[]>({
        query: (subscriptions) => ({
          url:`subscriptions`,
          method:'POST',
          body:{
            subscriptions:subscriptions
          }
        })
      }),
      cancelSubscription: builder.mutation<void, {itemId:string, subscriptionId:string}>({
        query: ({itemId, subscriptionId}) => ({
          url:`subscriptions`,
          method:'DELETE',
          body:{
            subscriptionItemId:itemId, 
            subscriptionId:subscriptionId
          }
        })
      }),

      getUserSubscriptions: builder.query<{ id:string, stripe_subscription_item_id:string,stripe_subscription_id:string, name:string, image:string, price:number, quantity:number, plan:number,option:string,email:string,
        phone_number:string,
        residential_address:string,
        delivery_address:string,
        preferred_delivery_date:string,preferred_communication_method:string}[], any>({
        query:() => `subscriptions`
      }),
      getOrder: builder.query<any, void>({
        query: () => 'orders',
      }),
      getUserByEmail: builder.query<any, string>({
        query:(email) => `getUserByEmail/${email}`
      }),
      createContactUs: builder.mutation<void, {name: string, phone: string, email: string, message: string}>({
        query: (data) => ({
            url: 'createContactUs',
            method: 'POST',
            body: data,
        })
    }),
      forgetPassword: builder.mutation<void, {email: string}>({
        query: (data) => ({
            url: 'forgetpassword',
            method: 'POST',
            body: data,
        })
    }),
    emailSubscription: builder.mutation<void, {email: string}>({
        query: (data) => ({
            url: 'EmailSubscription',
            method: 'POST',
            body: data,
        })
    }),
      changePassword: builder.mutation<void, {password: string, newPassword: string}>({
        query: (data) => ({
            url: 'changePassword',
            method: 'PUT',
            body: data,
        })
    }),
      changePasswordVerfiedPassword: builder.mutation<void, {newPassword: string, email: any}>({
        query: (data) => ({
            url: 'changePasswordVerification',
            method: 'PUT',
            body: data,
        })
    }),
      checkVerfiedCode: builder.mutation<void, {code: string}>({
        query: (data) => ({
            url: 'checkVerfiedCode',
            method: 'PUT',
            body: data,
        })
    }),
      sendVerificationCode: builder.mutation<void, {email: string}>({
        query: (data) => ({
            url: 'sendVerificationCode',
            method: 'PUT',
            body:data,
        })
    }),
    }),
  });
  
  export const {
    useRegisterMutation,
    useLoginMutation,
    useGetAppliancesQuery,
    useGetApplianceByIdQuery,
    useUpdateProfileMutation,
    useCreateStripeSessionMutation,
    useCreateSubscriptionMutation,
    useGetUserSubscriptionsQuery,
    useCancelSubscriptionMutation,
    // contact api
    useCreateContactUsMutation,
    useForgetPasswordMutation,
    useEmailSubscriptionMutation,
    //contact api
    // change password api
    useChangePasswordMutation,
    useChangePasswordVerfiedPasswordMutation,
    useCheckVerfiedCodeMutation,
    useSendVerificationCodeMutation,
    //change password api
    //get user by email
    useGetUserByEmailQuery,
    //orders
    useGetOrderQuery,
    //
  } = apiSlice;
  