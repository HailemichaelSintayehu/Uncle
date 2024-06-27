import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb';
import BlogArea from './BlogArea';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';
import { useGetAppliancesQuery } from '@/redux/api';

const BlogMain = () => {
   
    return (
        <>
            <BreadCrumb title='Blog'/>
            <BlogArea/>
            <SidebarMain />
        </>
    );
};

export default BlogMain;