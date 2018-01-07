// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    statuses: {},
    hide_footer: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let app = getApp();
    let store = app.globalData.store;
    let entry = options.entry;

    if (wx.showLoading) {
      wx.showLoading({
        title: "加载中...",
        mask: true
      })
    }

    store.fetch_daily(`${options.entry.replace(/\.daily/ig, '')}`).then(data => {
      this.setData({
       'date': entry,
       'statuses': data,
       'hide_footer': false
      })

      if ( wx.hideLoading ) {
        setTimeout(() => wx.hideLoading(), 200)
      }
    })
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

  previewImage: function (evt) {
    let _src = evt.target.dataset.src
    wx.previewImage({
      current: _src, // 当前显示图片的http链接
      urls: [_src] // 需要预览的图片http链接列表
    })
  },

  goToDetail (evt) {
    let id = evt.currentTarget.dataset.statusid;
    let entry = evt.currentTarget.dataset.entry;
    wx.navigateTo({
      url: '/pages/detail/index?statusid=' + id + '&entry=' + entry
    })
  }
})