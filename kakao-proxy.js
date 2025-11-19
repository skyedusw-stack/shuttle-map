// Kakao Maps SDK Proxy Loader for GitHub Pages
(function() {
    var script = document.createElement("script");
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=e0ed84b38bd53c1a90ebfc15b786cad4&libraries=services";
    script.onload = function() {
        console.log("Kakao SDK loaded through proxy");
        window.kakaoProxyLoaded = true;
    };
    script.onerror = function() {
        console.error("Kakao SDK failed to load via proxy");
    };
    document.head.appendChild(script);
})();
