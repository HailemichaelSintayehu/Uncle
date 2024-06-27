import SidebarMain from "@/components/SharedComponents/Sidebars/SidebarMain";
import OrderTrackModal from "@/components/profile/studentProfile/OrderTrackModal";
import UserProfileMain from "@/components/profile/studentProfile/UserProfileMain";
import MetaData from "@/hooks/useMetaData";
import React from "react";

const UserProfilePage = () => {
  return (
    <>
      <MetaData pageTitle="Profile">
          <main>
            <UserProfileMain />
            <OrderTrackModal />
            <SidebarMain/>
          </main>
      </MetaData>
    </>
  );
};

export default UserProfilePage;
