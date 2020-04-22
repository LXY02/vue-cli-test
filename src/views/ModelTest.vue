<template>
    <div class="model-test">
        <p>model-test</p>
        <model-test-child-wrapper
            v-for="(item, index) in arr" :key="index" :info="item"
            :test="test"
        >
        </model-test-child-wrapper>
    </div>
</template>

<script>

    import ModelTestChildWrapper from '../components/ModelTestChildWrapper';

    export default {
        name: 'ModelTest',

        components: {
            ModelTestChildWrapper
        },

        data() {
            return {
                test: 123,
                arr: [
                    {name: 'aaa', age: 10},
                    {name: 'bb', age: 12},
                    {name: 'ccccc', age: 14}
                ]
            }
        }
    };

</script>

<style lang='scss' scoped>

</style>
