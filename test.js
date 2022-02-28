window.onload = function() {
    var cnt = 3; // 비교 인원
    // 이름 리스트 ( 임시 ) 
    const names = ["이재명", "심상정", "윤석열"]
    var comparisonItem = [];
    var exploreQuery = "geo=KR&q=";

    for (let i=0 ; i<3 ; i++ ) {
        // 1명 data 생성 후 리스트에 추가
        var data = new Object();
        data.keyword = names[i];
        data.geo = "KR";
        data.time = "today 1-m";
        comparisonItem.push(data)

        encoded = encodeURI(names[i]);
        exploreQuery += encoded += ",";
    }

    exploreQuery += "&date=today 1-m,today 1-m";
    var jsonData = JSON.stringify(comparisonItem);

    trends.embed.renderExploreWidget("TIMESERIES", 
    {"comparisonItem":comparisonItem, "category":0,"property":""}, 
    {"exploreQuery":"geo=KR&q=%EC%9D%B4%EC%9E%AC%EB%AA%85,%EC%8B%AC%EC%83%81%EC%A0%95&date=today 1-m,today 1-m","guestPath":"https://trends.google.co.kr:443/trends/embed/"});    
}