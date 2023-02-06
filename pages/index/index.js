Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  data: {
    scrolls: ['/images/scroll-01.jpg','/images/scroll-02.jpg','/images/scroll-03.jpg'],
    images: ['/images/home-off.png', '/images/home-on.png', '/images/home-on.png'],
  },
  onShow(){
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        active: 0
      })
    }}
})