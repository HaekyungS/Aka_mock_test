interface problems {
  number: String;
  problem: String;
  ex: Array<String>;
}

export const problems: Array<problems> = [
  {
    number: "첫번째",
    problem: "아카이로 류님의 생일은? (이건 맞춰야겠지?)",
    ex: ["2002년 11월 01일", "2001년 11월 11일", "2002년 11월 10일", "2002년 11월 11일"],
  },
  {
    number: "두번째",
    problem: "2023년 04월 30일, 류 vs 잭 지식결투 당시, 류님이 전화 찬스로 전화를 걸었던 사람은?",
    ex: ["공파리파님", "바하님", "오뉴님", "아버지"],
  },
  {
    number: "세번째",
    problem:
      "2023년 05월 14일, 12시간 시간팔이 방송에서 메이드 방송 중 단원들에게 '너 뭐 돼?' 를 시전하다 애교를 두번 하였다. 그 당시 펀딩 최종 금액은?(미션 성공을 눌렀을 때 기준)",
    ex: ["3,160,000원", "3,150,000원", "3,000,000원", "3,090,000원"],
  },
  {
    number: "네번째",
    problem:
      "2023년 07월 06일 발로란트 켠왕 방송 때, 룰렛 금액 및 총 방송 시간은?(보기는 룰렛 금액, 총 방송시간 순입니다.)",
    ex: ["3,000원 , 13시간", "3,000원 , 10시간", "5,000원 , 13시간", "3,000원 , 12시간"],
  },
  {
    number: "다섯번째",
    problem:
      "류님의 국밥 공겜 시리즈 중 유일하게 중도 포기했던 Night Security(야간경비)에서 류님이 포기한 층 수는?",
    ex: ["9층", "5층", "8층", "7층"],
  },
  {
    number: "여섯번째",
    problem: "류님이 방송에서 '영~차'를 처음한 날의 컨텐츠가 유튜브 영상으로 업로드된 날짜는?",
    ex: ["2023년 08월 02일", "2023년 07월 19일", "2023년 07월 25일", "2023년 08월 10일"],
  },
  {
    number: "일곱번째",
    problem:
      "2023년 07월 12일 젤리카 방송에서 '자동차 충돌(소규모)'에 해당하는 효과음이 아닌 것은?",
    ex: ["예나, 선정이 딸이에요..", "운전 똑바로 안해?!", "피유우웅~", "경찰서 가고 싶어?!"],
  },
  {
    number: "여덟번째",
    problem:
      "2023년 07월 23일 레볼루션 하트 단체합방 중 거짓말 탐지기를 할 때, 류님이 받았던 질문이 아닌 것은?",
    ex: [
      "자신이 귀엽다고 생각하시나요?",
      "이 세상 모든 여자분들과 연애해봤다",
      "나는 레볼루션하트가 나때문에 떴다고 생각한다",
      "잭님을 사랑하시나요?",
    ],
  },
  {
    number: "아홉번째",
    problem: "류님 유튜브 제목과 컨텐츠명이 다른 것은?(보기는 제목, 컨텐츠명 순입니다.)",
    ex: [
      "미안ㅋㅋ, 쪼꼬게임",
      "나 이제 숢잘마셔ㅓ, 술룰렛",
      "후욱.. 후욱.. 뉴비.., 아웃라스트",
      "그 형에 그 동생, 좀보이드",
    ],
  },
  {
    number: "열번째",
    problem:
      "2023년 09월 25일, 초중고 생활기록부 탐방에서 고등학교 3학년 1학기 성적표에서 볼 수 있는 성적 등급 끼리 묶인 것은?",
    ex: ["B, E", "D, E", "C, D, E", "B, C, E"],
  },
  {
    number: "열한번째",
    problem: "2023년 10월 15일 반캠 술방 중 류님이 전화를 걸지 않은 멤버는?",
    ex: ["헤르님", "하로님", "이현님", "베르님"],
  },
];

export const warningMessage: Array<String> = [
  "2023년 11월 01일 리레볼루션의 귀염둥이 막내 류님의 생일을 맞아, 류님과 관련한 문제들로 모의고사를 준비하였습니다.",
  "문제는 총 11개의 객관식 문제들로 구성되어 있습니다.",
  "모든 문제는 류님의 나무위키, 생방송, 유튜브 를 기반으로 출제하였습니다.",
  "본 사이트는 PC 기준으로 제작되었기에 PC로 진행하시길 권장드립니다.",
  "모든 문제는 이전 문제로의 이동을 지원하지 않습니다. 뒤로가기를 할 경우, 홈으로 이동됨을 유의하여 주시길 바랍니다.",
  "사이트 버그 등에 대한 문제는 X(전 트위터)의 푸슝을 통해 문의하여 주시길 바랍니다.",
  "좋은 결과가 나오길 기원합니다! 재밌게 즐겨주세요!🤗",
];

export const number = [2, 0, 0, 2, "-", 1, 1, 0, 1];
