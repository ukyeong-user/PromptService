import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header"; // 공통 헤더 가져오기
import "./MainLayout.css";

function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        {/* 이 부분에 각 페이지(Hub, Archive, Maker)가 렌더링됩니다 */}
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
