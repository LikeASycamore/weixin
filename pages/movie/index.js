// pages/movie/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subject:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var index = options.index;
    var type = options.type;

    console.log(type);

    var url = "";
    switch (type) {
      case '0':
        url = "http://localhost:8888/coming_soon";
        break;
      case '1':
        url = "http://localhost:8888/in_theaters";
        break;
      case '2':
        url = "http://localhost:8888/Top250";
        break;
      case '3':
        url = "http://localhost:8888/us_box";
        break;
    }

    var that = this;
    wx.request({
      url: url,
      success: function(res) {

        var subjects = res.data.subjects;
        var subject = subjects[index];

        console.log(subject);
        that.setData({
          subject: subject
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})