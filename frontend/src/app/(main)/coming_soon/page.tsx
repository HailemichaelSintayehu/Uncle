import React from 'react'
import Link from "next/link";
import MetaData from '@/hooks/useMetaData';
import SidebarMain from '@/components/SharedComponents/Sidebars/SidebarMain';
type Props = {}

const Page = (props: Props) => {
  return (
    <>
      <MetaData pageTitle="404">
      <main>
        <section className="error-area">
            <div className="container container-small">
            <div className="row">
                <div className="col-lg-12">
                <div className="error-content">
                    {/* <div className="error-number">404</div> */}
                    <h2 className="error-text">
                      Coming Soon!!
                    </h2>
                    <p>
                    The feature you are looking for is not available yet.Stay tuned for the launch of our new website. We can&apos;t wait to share it with you!
                    </p>
                    <div className="error-btn">
                    <Link href="/" className="fill-btn">
                        Back to Homepage
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        <SidebarMain/>      
      </main>
      </MetaData>
    </>  )
}

export default Page