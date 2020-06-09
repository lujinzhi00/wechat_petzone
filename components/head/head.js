// components/head/head.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    open:true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hid_bar:function(e)
    {
      var that =this;
      if(this.data.open)
      {
        that.setData({
          open:false
        });
      }else
      {
        that.setData({
          open:true
        });
      }
    }
  }
})
