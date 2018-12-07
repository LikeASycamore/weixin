// pages/douban/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var API_URL = 'http://localhost:8888/coming_soon';
    //即将上映
    wx.request({
      url: API_URL,
      data: {},
      header: {
        "Content-Type": "json"
      },
      success: function(res) {
        that.setData({
          title1: res.data.title,
          subjects1: res.data.subjects,
        });
        console.log(res.data);
      }
    });


    //正在上映
    wx.request({
      url: "http://localhost:8888/in_theaters",
      data: {},
      header: {
        "Content-Type": "json"
      },
      success: function(res2) {
        that.setData({
          title2: res2.data.title,
          subjects2: res2.data.subjects,
        });
        console.log(res2.data);
      }
    });

    //top250
    wx.request({
      url: "http://localhost:8888/Top250",
      data: {},
      header: {
        "Content-Type": "json"
      },
      success: function(res3) {
        that.setData({
          title3: res3.data.title,
          subjects3: res3.data.subjects,
        });
        console.log(res3.data);
      }
    });

    // 北美票房榜
    wx.request({
      url: "http://localhost:8888/us_box",
      data: {},
      header: {
        "Content-Type": "json"
      },
      success: function(res4) {
        that.setData({
          title4: res4.data.title,
          subjects4: res4.data.subjects,
        });
        console.log(res4.data);
        console.log(1);
      }
    });

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

  },
  toDetailPage: function(e) {
    var index = e.currentTarget.dataset.index;
    var type = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: '../movie/index?index=' + index + "&&type=" + type
    })
  }
})