<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p @click="test">reject test</p>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
      mounted() {
          window.addEventListener('error', args => {
                  console.log(
                      'error event:', args
                  );
                  return true;
              },
              true // 利用捕获方式
          );

          // 如果“unhandledrejection”事件处理程序源自不同的脚本原点,则会被忽略
          window.addEventListener("unhandledrejection", e => {
              console.log('unhandledrejection---- ',e);
              throw e.reason
          });
      },

      methods: {
          test() {
              Promise.reject('lalal')
          }
      },
  }

</script>
