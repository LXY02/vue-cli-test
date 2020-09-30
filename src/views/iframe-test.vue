<template>
    <div>
        <p>test--</p>
        <input type="number" v-model="number" @input="checkValue">
        <input type="number" v-model="number2" @input="test">
        <button @click="clickT">click</button>
        <!--<iframe class="test" src="https://public.yangqianguan.com/static/insurance-upload/mayuri/prod/03f6ee6eaac81b5a6f1f577fa7beddc6.pdf"></iframe>-->
        <!--<iframe src="https://bbs.csdn.net/topics/190054949" class="test"></iframe>-->
    </div>
</template>

<script>

    export default {
        name: 'iframe-test',

        data() {
            return {
                number: 111,
                number2: null
            }
        },

        watch: {
            number2(newVal, oldVal) {
                console.log('----- ', newVal, oldVal);
                console.log(typeof this.number2, this.number2);
            }
        },

        methods: {
            checkValue() {
                const vm = this;
                vm.number = vm.dealAmountValue(vm.number);
            },

            dealAmountValue(value) {
                console.log('value ', value);
                value = value.replace(/^0*(0\.|[1-9])/, '$1');
                value = value.replace(/[^\d.]/g, ''); // 清除"数字"和"."以外的字符
                value = value.replace(/^\./g, ''); // 验证第一个字符是数字而不是字符
                value = value.replace(/\.{1,}/g, '.'); // 只保留第一个.清除多余的
                value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
                value = value.replace(/^(-)*(\d*)\.(\d\d\d\d).*$/, '$1$2.$3'); // 只能输入4个小数
                value = value.indexOf('.') > 0
                    ? `${value.split('.')[0].substring(0, 10)}.${value.split('.')[1]}`
                    : value.substring(0, 10);
                return value;
            },

            clickT() {
                console.log('---- ', this.number, this.number2);
            },

            test(e) {
                console.log('e ', e);
            },

            testDeal() {
                console.log('this.number2 ', this.number2);
                // this.number2 = this.number2.split(/\.+/).slice(0, 2).reduce((str, curStr, index) => {
                //     if (index === 0) {
                //         str += (curStr.match(/(^0*)([1-9]\d{0,9})?.*/) || [])
                //             .slice(1, 3)
                //             .reduce((str, curStr, index, arr) => {
                //                 if (arr[1] !== undefined && index === 1) {
                //                     return curStr;
                //                 }
                //
                //                 if (arr[1] === undefined && arr[0] !== undefined && index === 0) {
                //                     return '0';
                //                 }
                //
                //                 return str;
                //             }, '');
                //     }
                //
                //     if (index === 1) {
                //         str += '.' + curStr.slice(0, 4);
                //     }
                //
                //     return str;
                // }, '');
            }
        }
    };

</script>

<style lang="stylus" rel="stylesheet/scss" scoped>
    .test {
        width: 200px
        height: 400px
    }

    input {
        display: block;
        width: 200px;
        border: 1px solid red;
    }
</style>
