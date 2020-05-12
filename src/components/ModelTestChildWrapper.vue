<template>
    <div class="model-test-child-wrapper">
        <p>{{ info.name }}</p>
        <!--<model-test-child v-model="info"></model-test-child>-->
        <model-test-child :info="testData"></model-test-child>

        <div v-if="info.age === 14">**********</div>
    </div>
</template>

<script>

    import ModelTestChild from './ModelTestChild';

    export default {
        name: 'ModelTestChildWrapper',

        components: {
            ModelTestChild
        },

        props: {
            info: {
                type: Object
            }
        },

        data() {
            return {
                testData: {
                    test: 'test',
                    age: 12
                }
            }
        },

        mounted() {
            console.log('---- ', this.$attrs);
        }
    };

</script>

<style lang='stylus' scoped>
    .model-test-child-wrapper {
        margin: 20px;
        border: 1px solid red;
    }
</style>
