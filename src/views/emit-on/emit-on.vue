<template>
    <div>
        emit-on
        <p @click="test1">test</p>
    </div>
</template>

<script>

    export default {
        name: 'EmitOn',

        data() {
            return {
                isReady: false
            };
        },

        mounted() {
            setTimeout(() => {
                console.log('timeout');
                this.$emit('testInit');
                this.isReady = true;
            }, 4000);

            // window.addEventListener('click', this.test1);
            // window.removeEventListener('click', this.test1);
            // window.addEventListener('click', this.test2);
            // this.$once('vueTest', () => {
            //     console.log('--- ');
            // });
        },

        methods: {
            async test1() {
                console.log('test-1');
                if (!this.isReady) {
                    await new Promise((resolve) => this.$on('testInit', resolve));
                }
                console.log('test-1-end');
                // this.$emit('vueTest');
            },

            test2() {
                console.log('test-2');
            },

            async testBtnInit() {
                if (!this.isReady) {
                    await new Promise((resolve) => this.$on('testInit', () => {
                        console.log('on test init');
                        resolve();
                    }));
                }

                setTimeout(() => {
                    console.log('*********8 timeout');
                    this.$emit('test');
                }, 2000);
            },

            async testBtn() {
                console.log('test click');

                // this.testBtnInit();
                // await new Promise((resolve) => this.$on('test', () => {
                //     console.log('on test' + new Date().getTime());
                //     resolve();
                // }));
                //
                // console.log('-----');
            }
        }
    };

</script>

<style lang='scss' scoped>

</style>
