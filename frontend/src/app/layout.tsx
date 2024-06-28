if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap")
};
import "../style/index.scss";
import './globals.css';
import AppProvider from '@/contextApi/AppProvider';
import ReduxProvider from '@/redux/provider';
import { Toaster } from "sonner";
import Script from "next/script";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="UNCLE provides affordable, flexible access to modern household essentials through a rental subscription model. Instead of paying a large upfront cost, customers can enjoy high-quality appliances and furniture by paying manageable monthly or yearly fees." />
          <meta name="robots" content="noindex, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-GGMD7PRKME"
          ></Script>
          <Script id="google-analytics">
            {`
            window.dataLayer = window.dataLayer || []; 
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date()); 
            gtag('config', 'G-GGMD7PRKME');
          `}
          </Script>
        </head>

        <body suppressHydrationWarning={true}>
          <ReduxProvider>
            <AppProvider>
              {children}
            </AppProvider>
            <Toaster position="top-center" richColors />
          </ReduxProvider>
        </body>
      </html >
    </>
  )
}
