<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="test">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
      mounted() {

      },

      methods: {

      },
  }

</script>

<style lang="stylus" rel="stylesheet/scss" scoped>
  .test {
    display flex
    width: 100%
    height: 80px
    background: linear-gradient(to bottom, #00f 50%, #0f0 50%);

    .left {
      flex 1
      height 80px
      border-radius 0 20px 0 0
      background-color: #0f0
    }

    .right {
      width 100px
      height 80px
      background-color #00f
      border-radius 0 0 0 20px
    }
  }
</style>
