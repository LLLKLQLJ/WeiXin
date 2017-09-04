//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      '../image/dd.jpg',
      '../image/ff.jpg',
      '../image/hh.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navItems:[
      {
        name:'堂食',
        url:'dishes'
      },
      {
        name:'外卖',
        url:'take',
        isSplot:true
      },
      {
        name:'外带',
        url:'out'
      },
      {
        name:'订单',
        url:'bill'
      },
      {
        name:'帐单',
        url:'bill',
        isSplot:true
      },
      {
        name:'报表',
        url:'bill'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }
    
})
