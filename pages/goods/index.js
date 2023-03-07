// pages/goods/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrolls: ['/images/scroll-01.jpg','/images/scroll-02.jpg','/images/scroll-03.jpg'],
    images: ['/images/home-off.png', '/images/home-on.png', '/images/home-on.png'],
    // 地址选中
    show: false,
    actions: [
      {
        name: '重庆理工大学',
        subname: '花溪校区',
      },
      {
        name: '重庆理工大学',
        subname: '杨家坪校区',
      },
      {
        name: '重庆理工大学',
        subname: '两江校区',
      },
    ]
  },

  onClose: function(params) {
    if (this.data.show) {
      this.setData({ show: false })
    }else {
      this.setData({ show: true })
    }
    
  },

  onSelect: function(event) {
    console.log(event.detail);
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

  }
})