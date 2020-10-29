<template>
    <div class="model-test-child">
        <!--<p>{{ value.name }}</p>-->
        <!--<model-test-child-a v-model="info" :info-sync.sync="infoSync"></model-test-child-a>-->
        <model-test-child-a v-model="value.age"></model-test-child-a>
        <p @click="testFunc">test-------------</p>
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
            // info: {
            //     type: Object
            // }
            value: {
                required: true
            },
            test: {
                type: Boolean
            }
        },

        data() {
            return {
                ttt: 111,
                info: {
                    name: 'test',
                    age: {
                        now: 13311,
                        type: 'lal'
                    }
                },
                infoSync: {}
            }
        },

        mounted() {
            // this.$emit('input', this.value);
            console.log('**** ', this.$attrs);
        },

        methods: {
            testFunc() {
                console.log('test-child ');
                this.$emit('input', {
                    ...this.value,
                    test: 'test' + Math.random()
                })
            }
        },
    };

</script>

<style lang='stylus' scoped>
    .model-test-child {
        background-color: #abcdef;
    }
</style>
