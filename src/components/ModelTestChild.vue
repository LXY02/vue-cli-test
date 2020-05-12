<template>
    <div class="model-test-child">
        <!--<p>{{ value.name }}</p>-->
        <model-test-child-a v-model="info"></model-test-child-a>
    </div>
</template>

<script>

    import ModelTestChildA from './ModelTestChildA';

    export default {
        name: 'ModelTestChild',

        components: {
            ModelTestChildA
        },

        props: {
            info: {
                type: Object
            }
            // value: {
            //     required: true
            // }
        },

        mounted() {
            // this.$emit('input', this.value);
            console.log('**** ', this.$attrs);
        }
    };

</script>

<style lang='stylus' scoped>
    .model-test-child {
        background-color: #abcdef;
    }
</style>
