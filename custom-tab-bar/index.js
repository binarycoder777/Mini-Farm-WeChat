Page({
  data: {
    active: 0,
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({
      active: event.detail
    })
    // 导航到对应tabbar
    if (event.detail == 0) {
      wx.switchTab({
        url: '/pages/index/index',
      })
    }else if (event.detail == 1) {
      wx.switchTab({
        url: '/pages/category/index',
      })
    }else if (event.detail == 2) {
      wx.switchTab({
        url: '/pages/cart/index',
      })
    }else if (event.detail == 3) {
      wx.switchTab({
        url: '/pages/my/index',
      })
    }
  },
});