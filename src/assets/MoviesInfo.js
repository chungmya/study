const data = [ 
  {
    title:"노랑",
    year: 2023,
    category:"액션, 드라마",
    textRed:"color: red",
    like : 0,
    imgUrl : "/assets/01.jpg",
  },
  {
    title:"아쿠아맨과 로스트 킹덤",
    year: 2023,
    category:"액션, 판타지, 어드벤쳐",
    like : 0,
    imgUrl : '/assets/02.jpg',
  },
  {
    title:"쥬라기",
    year: 2025,
    category:"액션, 판타지, 어드벤쳐",
    like : 0,
    imgUrl : "/assets/03.jpg",
  },
]


//이거 하나만 내보낸다.
export default data;

// 여러개 내보낼때
// export { data, ..., ... };