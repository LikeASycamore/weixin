//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    "name": "zhangSan",
    "age": "21"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  
})
