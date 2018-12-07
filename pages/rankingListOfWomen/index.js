// pages/rankingListOfMan/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //点击导航栏
  buttonClick: function (e) {
    var that = this;
    var ids = e.currentTarget.dataset.type;  //获取自定义的id  
    that.setData({
      id: ids  //把获取的自定义id赋给当前组件的id(即获取当前组件)  
    })
  }
})