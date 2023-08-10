<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getData()">test axios 请求数据</button>
    <p>这是请求到的数据{{ testData.list }}</p>
  </div>
</template>
<script>
import { reactive, inject } from 'vue'
// import API from "../api/config/base"
import { getTestArr } from '../api/test'

export default {
  name: 'About-test',
  setup() {
    const axios = inject('$axios')
    //数据
    const testData = reactive({
      list: []
    })

    //测试请求方法
    const getData = function () {
      // axios({
      //     url:'/test',
      //     method:'get'
      // }).then((res)=>{
      //     alert('请求成功!');
      //     testData.list = res.data.dataList;
      // });
      getTestArr().then((res) => {
        alert('请求成功!')
        testData.list = res.data.dataList
      })
    }
    return {
      testData,
      getData
    }
  }
}
</script>
