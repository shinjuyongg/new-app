// src/components/KakaoMap.js

import React, { useEffect } from "react";

const KakaoMap = () => {
  useEffect(() => {
    // 카카오 맵 API 스크립트 로드
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_JS_KEY&autoload=false";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울 중심 좌표
          level: 3, // 지도 확대 레벨
        };

        const map = new window.kakao.maps.Map(container, options);

        // 마커 추가 (선택 사항)
        const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.9780);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "500px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    ></div>
  );
};

export default KakaoMap;
