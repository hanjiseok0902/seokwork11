
// 시/도별 자연공원 데이터
const parkData = {
  seoul: [
    {
      name: "남산공원",
      location: "중구 남산공원길",
      description: "서울의 중심에 위치한 대표적인 도심 공원으로, N서울타워와 함께 서울의 랜드마크입니다. 순환산책로와 계단길을 통해 자연을 만끽할 수 있습니다.",
      features: ["순환산책로", "계단길", "전망대", "문화시설", "야경명소"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80"
    },
    {
      name: "한강공원",
      location: "여의도구 여의동로",
      description: "한강을 따라 조성된 넓은 수변공원으로, 강변산책로에서 한강의 아름다운 경치를 감상하며 산책할 수 있습니다.",
      features: ["강변산책로", "자전거도로", "피크닉", "수상레저", "야외무대"],
      image: "https://images.unsplash.com/photo-1578728159675-6b1e05e9a43b?w=400&q=80"
    },
    {
      name: "올림픽공원",
      location: "송파구 올림픽로",
      description: "88올림픽의 유산으로 조성된 대규모 체육공원으로, 호수둘레길과 조각공원 산책로를 따라 문화예술을 감상할 수 있습니다.",
      features: ["호수둘레길", "조각공원산책로", "체육시설", "문화회관"],
      image: "https://images.unsplash.com/photo-1578725511730-0e3e6dd1f5e4?w=400&q=80"
    },
    {
      name: "월드컵공원",
      location: "마포구 월드컵로",
      description: "쓰레기 매립지를 친환경 공원으로 재탄생시킨 성공적인 도시재생 사례입니다. 생태탐방로와 억새길에서 자연의 변화를 체험할 수 있습니다.",
      features: ["생태탐방로", "억새길", "환경학습", "전망대"],
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&q=80"
    },
    {
      name: "북한산국립공원",
      location: "성북구 정릉동",
      description: "서울 북부에 위치한 국립공원으로, 인수봉과 백운대 등반로를 통해 도심 속 자연의 웅장함을 체험할 수 있습니다.",
      features: ["인수봉코스", "백운대길", "도심등산", "암벽등반", "자연학습"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
    },
    {
      name: "서울숲",
      location: "성동구 뚝섬로",
      description: "한강변에 조성된 대규모 도시숲으로, 생태숲길과 나비정원에서 도심 속 자연생태계를 관찰할 수 있습니다.",
      features: ["생태숲길", "나비정원", "사슴우리", "도시생태", "자연학습"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80"
    },
    {
      name: "양재천",
      location: "서초구 양재천로",
      description: "서초구를 흐르는 도시하천으로, 하천변 산책로와 생태공원에서 도심 속 물길을 따라 자연을 만끽할 수 있습니다.",
      features: ["하천변산책로", "생태공원", "수변산책", "자전거길", "친수공간"],
      image: "https://images.unsplash.com/photo-1578728159675-6b1e05e9a43b?w=400&q=80"
    },
    {
      name: "보라매공원",
      location: "동작구 신대방동",
      description: "공군사관학교 터에 조성된 대형공원으로, 호수산책로와 삼나무길에서 넓은 잔디밭과 함께 휴식을 즐길 수 있습니다.",
      features: ["호수산책로", "삼나무길", "잔디광장", "체육시설", "에어파크"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80"
    }
  ],
  busan: [
    {
      name: "용두산공원",
      location: "중구 용두산길",
      description: "부산의 중심가에 위치한 도심공원으로, 산책데크에서 부산타워까지 이어지는 길에서 시내 전경을 감상할 수 있습니다.",
      features: ["산책데크", "부산타워", "전망대", "꽃시계", "시내전경"],
      image: "https://images.unsplash.com/photo-1578845813990-0dc88de62325?w=400&q=80"
    },
    {
      name: "태종대공원",
      location: "영도구 전망로",
      description: "부산의 대표적인 해안절벽 공원으로, 해안산책로를 따라 걸으며 웅장한 바다 절경과 등대를 감상할 수 있습니다.",
      features: ["해안산책로", "절벽둘레길", "등대", "관음사", "유람선"],
      image: "https://images.unsplash.com/photo-1566050431328-b2c25a3cedd1?w=400&q=80"
    },
    {
      name: "금정산성공원",
      location: "금정구 산성로",
      description: "조선시대 산성과 함께하는 역사문화공원으로, 산성둘레길과 등산로를 통해 역사탐방과 자연휴양을 동시에 즐길 수 있습니다.",
      features: ["산성둘레길", "등산로", "역사탐방로", "자연휴양"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
    },
    {
      name: "을숙도공원",
      location: "사하구 낙동남로",
      description: "낙동강 하구에 위치한 생태공원으로, 습지탐방로를 따라 걸으며 철새 관찰과 자연학습을 할 수 있습니다.",
      features: ["습지탐방로", "철새관찰로", "생태학습", "자연보호"],
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80"
    },
    {
      name: "해동용궁사",
      location: "기장군 시랑리",
      description: "바닷가 절벽에 위치한 독특한 해안사찰로, 해안절벽길과 사찰 순례코스에서 바다와 불교문화를 함께 체험할 수 있습니다.",
      features: ["해안절벽길", "사찰순례코스", "바다조망", "불교문화", "파도소리"],
      image: "https://images.unsplash.com/photo-1578845813990-0dc88de62325?w=400&q=80"
    },
    {
      name: "오륙도공원",
      location: "남구 용호동",
      description: "부산의 상징인 오륙도를 조망할 수 있는 해안공원으로, 스카이워크와 해안산책로에서 동백꽃과 바다 경관을 감상할 수 있습니다.",
      features: ["스카이워크", "해안산책로", "오륙도조망", "동백꽃길", "바다경관"],
      image: "https://images.unsplash.com/photo-1566050431328-b2c25a3cedd1?w=400&q=80"
    },
    {
      name: "광안리해수욕장공원",
      location: "수영구 광안해변로",
      description: "광안대교와 함께하는 부산의 대표 해수욕장으로, 해변산책로와 요트경기장에서 도시형 해수욕장의 매력을 만끽할 수 있습니다.",
      features: ["해변산책로", "광안대교조망", "요트경기장", "야경명소", "축제공간"],
      image: "https://images.unsplash.com/photo-1578732616573-53bdc4b4b30f?w=400&q=80"
    },
    {
      name: "범어사",
      location: "금정구 범어사로",
      description: "금정산 자락에 위치한 천년고찰로, 사찰 탐방로와 계곡길을 통해 불교문화와 산림욕을 동시에 즐길 수 있습니다.",
      features: ["사찰탐방로", "계곡길", "불교문화", "산림욕", "템플스테이"],
      image: "https://images.unsplash.com/photo-1578845813990-0dc88de62325?w=400&q=80"
    }
  ],
  daegu: [
    {
      name: "앞산공원",
      location: "남구 앞산순환로",
      description: "대구의 대표적인 도심 근교 자연공원으로, 케이블카와 산림욕장에서 도시 전망과 삼림욕을 즐길 수 있습니다.",
      features: ["케이블카", "산림욕장", "등산로", "전망대", "자연학습원"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
    },
    {
      name: "수성못",
      location: "수성구 수성못길",
      description: "대구 시민들의 휴식처로 사랑받는 인공호수공원으로, 호수둘레길과 음악분수대에서 낭만적인 산책을 즐길 수 있습니다.",
      features: ["호수둘레길", "음악분수", "오리배", "카페거리", "야경명소"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
    }
  ],
  incheon: [
    {
      name: "인천대공원",
      location: "남동구 장수서로",
      description: "인천의 대표적인 종합공원으로, 호수산책로와 메타세쿼이아길에서 사계절 아름다운 풍경을 감상할 수 있습니다.",
      features: ["호수산책로", "메타세쿼이아길", "어린이동물원", "호수낚시", "캠핑장"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80"
    },
    {
      name: "송도센트럴파크",
      location: "연수구 컨벤시아대로",
      description: "국제도시 송도의 중심에 위치한 수변공원으로, 해수산책로와 인공수로에서 도시와 자연이 조화된 경관을 즐길 수 있습니다.",
      features: ["해수산책로", "인공수로", "수상택시", "국제도시", "스카이워크"],
      image: "https://images.unsplash.com/photo-1578728159675-6b1e05e9a43b?w=400&q=80"
    }
  ],
  gwangju: [
    {
      name: "무등산국립공원",
      location: "북구 무등로",
      description: "광주의 진산인 무등산의 국립공원으로, 서석대와 입석대 등반코스에서 기암괴석과 광주 시내 전망을 감상할 수 있습니다.",
      features: ["등반코스", "서석대", "입석대", "기암괴석", "시내전망"],
      image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?w=400&q=80"
    },
    {
      name: "광주호수생태원",
      location: "북구 충효동",
      description: "광주호 주변에 조성된 생태공원으로, 습지관찰로와 야생화단지에서 다양한 수생식물과 야생동물을 관찰할 수 있습니다.",
      features: ["습지관찰로", "야생화단지", "생태학습", "탐조대", "자연보전"],
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80"
    }
  ],
  daejeon: [
    {
      name: "계룡산국립공원",
      location: "중구 사정동",
      description: "대전과 충남에 걸쳐 있는 국립공원으로, 갑사와 동학사 탐방로에서 고찰과 계곡미를 함께 감상할 수 있습니다.",
      features: ["갑사탐방로", "동학사길", "계곡산책", "고찰순례", "단풍명소"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
    },
    {
      name: "유성온천공원",
      location: "유성구 온천로",
      description: "온천과 함께 조성된 도심공원으로, 족욕체험길과 온천산책로에서 치유와 휴식을 동시에 즐길 수 있습니다.",
      features: ["족욕체험길", "온천산책로", "치유정원", "야외족욕", "휴양시설"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80"
    }
  ],
  ulsan: [
    {
      name: "태화강국가정원",
      location: "중구 태화강국가정원길",
      description: "국내 최초의 국가정원으로, 십리대숲길과 강변산책로에서 생태복원의 성공사례를 체험할 수 있습니다.",
      features: ["십리대숲길", "강변산책로", "생태복원", "국가정원", "철새도래지"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80"
    },
    {
      name: "간절곶공원",
      location: "울주군 서생면",
      description: "한반도 최동남단에 위치한 해안공원으로, 해안절벽길과 등대산책로에서 일출 명소의 장관을 감상할 수 있습니다.",
      features: ["해안절벽길", "등대산책로", "일출명소", "최동남단", "바다전망"],
      image: "https://images.unsplash.com/photo-1578732616573-53bdc4b4b30f?w=400&q=80"
    }
  ],
  sejong: [
    {
      name: "베어트리파크",
      location: "세종시 전의면",
      description: "세종시의 대표적인 생태공원으로, 습지보전지역과 자연학습장에서 다양한 생태체험을 할 수 있습니다.",
      features: ["습지보전길", "자연학습장", "생태체험", "환경교육", "야생동물보호"],
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80"
    }
  ],
  gyeonggi: [
    {
      name: "수원화성공원",
      location: "수원시 팔달구 행궁로",
      description: "유네스코 세계문화유산인 화성을 둘러싼 공원으로, 성곽둘레길과 행궁탐방로에서 조선의 건축미를 감상할 수 있습니다.",
      features: ["성곽둘레길", "행궁탐방로", "세계문화유산", "야간조명", "역사체험"],
      image: "https://images.unsplash.com/photo-1578845813990-0dc88de62325?w=400&q=80"
    },
    {
      name: "경기도청소년수련원",
      location: "용인시 처인구 포곡읍",
      description: "경기도의 대표적인 자연휴양시설로, 숲속산책로와 체험학습장에서 자연과 함께하는 교육을 받을 수 있습니다.",
      features: ["숲속산책로", "체험학습장", "자연교육", "청소년수련", "야외활동"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80"
    },
    {
      name: "일산호수공원",
      location: "고양시 일산동구 호수로",
      description: "일산신도시의 중심에 위치한 인공호수공원으로, 호수둘레길과 자전거도로에서 도시 속 자연을 만끽할 수 있습니다.",
      features: ["호수둘레길", "자전거도로", "인공호수", "신도시공원", "야간조명"],
      image: "https://images.unsplash.com/photo-1578728159675-6b1e05e9a43b?w=400&q=80"
    },
    {
      name: "운길산",
      location: "남양주시 조안면",
      description: "남한강변에 위치한 아름다운 산으로, 수종사 탐방로와 강변 조망길에서 한강의 절경과 역사문화를 함께 체험할 수 있습니다.",
      features: ["수종사탐방로", "강변조망길", "한강절경", "역사문화", "자연휴양"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
    },
    {
      name: "광교호수공원",
      location: "수원시 영통구 광교호수로",
      description: "수원 신도시에 조성된 대형 호수공원으로, 호수둘레길과 생태습지에서 도시개발과 자연보전의 조화를 체험할 수 있습니다.",
      features: ["호수둘레길", "생태습지", "도시공원", "야간분수", "자연보전"],
      image: "https://images.unsplash.com/photo-1578728159675-6b1e05e9a43b?w=400&q=80"
    },
    {
      name: "두물머리",
      location: "양평군 양서면",
      description: "북한강과 남한강이 만나는 곳으로, 강변산책로와 느티나무쉼터에서 강의 합류점과 400년 된 느티나무를 감상할 수 있습니다.",
      features: ["강변산책로", "느티나무쉼터", "두강합류", "역사나무", "자연경관"],
      image: "https://images.unsplash.com/photo-1578732616573-53bdc4b4b30f?w=400&q=80"
    },
    {
      name: "한탄강지질공원",
      location: "포천시 영북면",
      description: "UNESCO 세계지질공원으로 지정된 한탄강 일대로, 주상절리길과 지질탐방로에서 화산활동으로 형성된 독특한 지형을 관찰할 수 있습니다.",
      features: ["주상절리길", "지질탐방로", "세계지질공원", "화산지형", "자연학습"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
    },
    {
      name: "물향기수목원",
      location: "오산시 수청동",
      description: "경기도에서 조성한 대표적인 수목원으로, 테마정원길과 습지생태원에서 다양한 식물과 생태계를 학습할 수 있습니다.",
      features: ["테마정원길", "습지생태원", "식물학습", "생태교육", "자연치유"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80"
    }
  ],
  gangwon: [
    {
      name: "설악산국립공원",
      location: "속초시 설악산로",
      description: "우리나라 최고의 자연경관을 자랑하는 국립공원으로, 비선대와 울산바위 등반코스에서 절경과 고산생태계를 체험할 수 있습니다.",
      features: ["비선대코스", "울산바위길", "고산생태계", "절경감상", "자연보전지역"],
      image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?w=400&q=80"
    },
    {
      name: "경포호수공원",
      location: "강릉시 경포로",
      description: "강릉의 대표적인 호수공원으로, 호수둘레길과 소나무숲길에서 동해바다와 연결된 자연경관을 감상할 수 있습니다.",
      features: ["호수둘레길", "소나무숲길", "바다연결", "자연경관", "생태습지"],
      image: "https://images.unsplash.com/photo-1578732616573-53bdc4b4b30f?w=400&q=80"
    },
    {
      name: "치악산국립공원",
      location: "원주시 소초면",
      description: "강원도 남부의 명산으로, 구룡사와 상원사 탐방로에서 고찰과 계곡의 아름다움을 함께 체험할 수 있습니다.",
      features: ["구룡사코스", "상원사길", "계곡탐방", "고찰순례", "단풍명소"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
    },
    {
      name: "오대산국립공원",
      location: "평창군 진부면",
      description: "월정사와 상원사가 위치한 불교 성지로, 전나무숲길과 선재길에서 천년의 불교문화와 울창한 산림을 체험할 수 있습니다.",
      features: ["전나무숲길", "선재길", "불교성지", "월정사", "자연휴양"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80"
    },
    {
      name: "남이섬",
      location: "춘천시 남산면",
      description: "북한강 위의 반달 모양 섬으로, 메타세쿼이아길과 자작나무길에서 사계절 아름다운 수목과 강의 경치를 감상할 수 있습니다.",
      features: ["메타세쿼이아길", "자작나무길", "섬관광", "강변경치", "자연휴양"],
      image: "https://images.unsplash.com/photo-1578728159675-6b1e05e9a43b?w=400&q=80"
    },
    {
      name: "정동진해변공원",
      location: "강릉시 강동면",
      description: "세계에서 바다와 가장 가까운 기차역으로 유명한 곳으로, 해안산책로와 일출명소에서 동해의 장관을 감상할 수 있습니다.",
      features: ["해안산책로", "일출명소", "기차역", "동해조망", "해변산책"],
      image: "https://images.unsplash.com/photo-1578732616573-53bdc4b4b30f?w=400&q=80"
    },
    {
      name: "강원도립화목원",
      location: "춘천시 사북면",
      description: "춘천의 대표적인 수목원으로, 야생화원과 습지원에서 강원도의 다양한 식물상과 생태계를 학습할 수 있습니다.",
      features: ["야생화원", "습지원", "식물학습", "생태교육", "자연치유"],
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80"
    },
    {
      name: "대관령양떼목장",
      location: "평창군 대관령면",
      description: "고원지대에 조성된 목축체험장으로, 목장길과 초원산책로에서 양떼와 함께 고원의 목가적 풍경을 체험할 수 있습니다.",
      features: ["목장길", "초원산책로", "양떼체험", "고원풍경", "목가적경관"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80"
    }
  ],
  chungbuk: [
    {
      name: "속리산국립공원",
      location: "보은군 속리산면",
      description: "법주사와 함께하는 불교문화의 성지로, 법주사탐방로와 문장대 등반코스에서 종교문화와 자연경관을 함께 체험할 수 있습니다.",
      features: ["법주사탐방로", "문장대코스", "불교문화", "고찰순례", "자연휴양"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
    },
    {
      name: "청주청남대",
      location: "청주시 상당구 문의면",
      description: "전직 대통령의 별장으로 사용되었던 곳으로, 호수산책로와 숲길에서 역사와 자연이 어우러진 경관을 감상할 수 있습니다.",
      features: ["호수산책로", "숲길산책", "역사체험", "자연휴양", "호수조망"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80"
    }
  ],
  chungnam: [
    {
      name: "대천해수욕장공원",
      location: "보령시 신흑동",
      description: "서해안의 대표적인 해수욕장 공원으로, 해안산책로와 갯벌체험장에서 서해의 해양생태계를 체험할 수 있습니다.",
      features: ["해안산책로", "갯벌체험장", "해양생태", "해수욕", "머드축제"],
      image: "https://images.unsplash.com/photo-1566050431328-b2c25a3cedd1?w=400&q=80"
    },
    {
      name: "계룡산국립공원",
      location: "공주시 계룡면",
      description: "충남의 진산으로 불리는 명산으로, 갑사와 신원사 탐방로에서 고찰문화와 계곡미를 함께 감상할 수 있습니다.",
      features: ["갑사탐방로", "신원사길", "계곡산책", "고찰문화", "자연휴양"],
      image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?w=400&q=80"
    }
  ],
  jeonbuk: [
    {
      name: "내장산국립공원",
      location: "정읍시 내장산동",
      description: "우리나라 최고의 단풍명소로 유명한 국립공원으로, 내장사 탐방로와 단풍터널에서 가을의 절경을 감상할 수 있습니다.",
      features: ["내장사탐방로", "단풍터널", "가을절경", "고찰순례", "자연휴양"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
    },
    {
      name: "모악산도립공원",
      location: "김제시 금산면",
      description: "원불교의 성지인 모악산의 도립공원으로, 금산사 탐방로와 종교순례길에서 종교문화와 자연을 함께 체험할 수 있습니다.",
      features: ["금산사탐방로", "종교순례길", "원불교성지", "문화체험", "자연휴양"],
      image: "https://images.unsplash.com/photo-1578845813990-0dc88de62325?w=400&q=80"
    }
  ],
  jeonnam: [
    {
      name: "지리산국립공원",
      location: "구례군 마산면",
      description: "우리나라 최초의 국립공원으로, 노고단과 천왕봉 등반코스에서 한반도 남부의 생태계 보고를 체험할 수 있습니다.",
      features: ["노고단코스", "천왕봉길", "생태계보고", "자연보전", "고산생태"],
      image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?w=400&q=80"
    },
    {
      name: "순천만국가정원",
      location: "순천시 순천만길",
      description: "순천만 습지와 연결된 국가정원으로, 습지탐방로와 갈대밭길에서 국제적으로 인정받은 생태보전지역을 체험할 수 있습니다.",
      features: ["습지탐방로", "갈대밭길", "생태보전", "국가정원", "철새도래지"],
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80"
    },
    {
      name: "담양대나무숲",
      location: "담양군 담양읍",
      description: "전국 최대의 대나무 군락지로, 죽녹원 산책로와 메타세쿼이아길에서 대나무의 신비로운 숲을 체험할 수 있습니다.",
      features: ["죽녹원산책로", "메타세쿼이아길", "대나무숲", "자연치유", "산림욕"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80"
    }
  ],
  gyeongbuk: [
    {
      name: "경주국립공원",
      location: "경주시 진현동",
      description: "신라 천년의 고도 경주의 역사공원으로, 첨성대와 대릉원 산책로에서 찬란한 신라문화유산을 감상할 수 있습니다.",
      features: ["첨성대길", "대릉원산책로", "신라문화", "역사유적", "문화체험"],
      image: "https://images.unsplash.com/photo-1578845813990-0dc88de62325?w=400&q=80"
    },
    {
      name: "주왕산국립공원",
      location: "청송군 부동면",
      description: "기암괴석과 계곡미로 유명한 국립공원으로, 주왕계곡과 급수대 탐방로에서 독특한 지질경관을 감상할 수 있습니다.",
      features: ["주왕계곡길", "급수대탐방로", "기암괴석", "계곡미", "지질경관"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
    },
    {
      name: "포항해수욕장공원",
      location: "포항시 북구 흥해읍",
      description: "동해안의 대표적인 해수욕장 공원으로, 해안산책로와 일출전망대에서 동해 일출의 장관을 감상할 수 있습니다.",
      features: ["해안산책로", "일출전망대", "동해일출", "해수욕", "해양레저"],
      image: "https://images.unsplash.com/photo-1578732616573-53bdc4b4b30f?w=400&q=80"
    }
  ],
  gyeongnam: [
    {
      name: "지리산국립공원",
      location: "하동군 화개면",
      description: "하동 화개장터와 연결된 지리산 구간으로, 쌍계사와 불일폭포 탐방로에서 차문화와 계곡미를 함께 체험할 수 있습니다.",
      features: ["쌍계사탐방로", "불일폭포길", "차문화체험", "계곡탐방", "자연휴양"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
    },
    {
      name: "한려해상국립공원",
      location: "통영시 한산면",
      description: "남해안의 아름다운 다도해를 품은 해상국립공원으로, 케이블카와 해안절벽길에서 한려수도의 절경을 감상할 수 있습니다.",
      features: ["케이블카", "해안절벽길", "다도해절경", "해상국립공원", "섬관광"],
      image: "https://images.unsplash.com/photo-1566050431328-b2c25a3cedd1?w=400&q=80"
    },
    {
      name: "가야산국립공원",
      location: "합천군 가야면",
      description: "해인사와 팔만대장경으로 유명한 가야산으로, 해인사 탐방로와 상왕봉 등반코스에서 불교문화와 자연경관을 함께 체험할 수 있습니다.",
      features: ["해인사탐방로", "상왕봉코스", "팔만대장경", "불교문화", "자연휴양"],
      image: "https://images.unsplash.com/photo-1578845813990-0dc88de62325?w=400&q=80"
    }
  ],
  jeju: [
    {
      name: "한라산국립공원",
      location: "제주시 아라일동",
      description: "제주도의 중심에 위치한 우리나라 최고봉으로, 다양한 등반코스와 탐방로를 통해 고산식물과 아름다운 자연경관을 감상할 수 있습니다.",
      features: ["등반코스", "고산탐방로", "고산식물", "백록담", "자연보호"],
      image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?w=400&q=80"
    },
    {
      name: "성산일출봉",
      location: "서귀포시 성산읍",
      description: "제주도 동쪽 끝에 위치한 화산분화구로, 정상등반로와 해안산책로에서 일출 명소의 장관을 감상할 수 있는 세계자연유산입니다.",
      features: ["정상등반로", "해안산책로", "일출명소", "화산분화구", "세계유산"],
      image: "https://images.unsplash.com/photo-1578732616573-53bdc4b4b30f?w=400&q=80"
    },
    {
      name: "곶자왈공원",
      location: "제주시 애월읍",
      description: "제주 특유의 곶자왈 생태계를 보존한 자연공원으로, 원시림탐방로를 따라 걸으며 독특한 생태환경을 체험할 수 있습니다.",
      features: ["원시림탐방로", "곶자왈길", "생태체험", "자연학습"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80"
    },
    {
      name: "우도해양도립공원",
      location: "제주시 우도면",
      description: "제주 본섬 동쪽에 위치한 아름다운 섬으로, 해안둘레길과 목초지산책로를 통해 해양생태계와 목초지 경관을 감상할 수 있습니다.",
      features: ["해안둘레길", "목초지산책로", "해양생태", "해수욕장", "섬관광"],
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&q=80"
    }
  ]
};

// DOM 요소들
const citySelect = document.getElementById('city-select');
const parkList = document.getElementById('park-list');

// 초기 메시지 표시
function showInitialMessage() {
  parkList.innerHTML = '<div class="no-selection">시/도를 선택하면 해당 지역의 자연공원 정보를 확인할 수 있습니다.</div>';
}

// 공원 카드 생성 함수
function createParkCard(park) {
  const card = document.createElement('div');
  card.className = 'park-card';
  
  const featuresHTML = park.features.map(feature => 
    `<span class="feature-tag">${feature}</span>`
  ).join('');
  
  card.innerHTML = `
    <div class="park-image">
      <img src="${park.image}" alt="${park.name}" loading="lazy">
    </div>
    <div class="park-content">
      <div class="park-name">${park.name}</div>
      <div class="park-location">📍 ${park.location}</div>
      <div class="park-description">${park.description}</div>
      <div class="park-features">${featuresHTML}</div>
    </div>
  `;
  
  return card;
}

// 공원 목록 표시 함수
function displayParks(cityCode) {
  parkList.innerHTML = '';
  
  if (!cityCode || !parkData[cityCode]) {
    showInitialMessage();
    return;
  }
  
  const parks = parkData[cityCode];
  
  parks.forEach(park => {
    const parkCard = createParkCard(park);
    parkList.appendChild(parkCard);
  });
  
  // 애니메이션 효과
  const cards = parkList.querySelectorAll('.park-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

// 이벤트 리스너 등록
citySelect.addEventListener('change', function() {
  const selectedCity = this.value;
  displayParks(selectedCity);
});

// 페이지 로드 시 초기 메시지 표시
document.addEventListener('DOMContentLoaded', function() {
  showInitialMessage();
});
