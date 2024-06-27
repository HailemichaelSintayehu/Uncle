import WrapperStyleThree from '@/layout/WrapperStyleThree'
import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <WrapperStyleThree>
        {children}
    </WrapperStyleThree>
  )
}

export default Layout