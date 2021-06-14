import React from "react";
import Shops from "pages/shops/ShopsList";

const HomePresentation: React.FC = () => {
  return (
    <div>
      <a href="/admin/shops">매장 등록하기</a>
      <Shops />
    </div>
  );
};

export default HomePresentation;
