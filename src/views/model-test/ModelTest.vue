<template>
    <div class="model-test">
        <p>model-test</p>
        <!--<model-test-child-wrapper-->
            <!--v-for="(item, index) in arr" :key="index" :info="item"-->
            <!--:test="test"-->
        <!--&gt;-->
        <!--</model-test-child-wrapper>-->
        <model-test-child v-model="testO.test"/>
        <change-test v-model="changeInfo" @change="change"/>
    </div>
</template>

<script>

    // import ModelTestChildWrapper from '../components/ModelTestChildWrapper';
    import ModelTestChild from '../../components/ModelTestChild';
    import ChangeTest from './change-test';

    export default {
        name: 'ModelTest',

        components: {
            // ModelTestChildWrapper
            ModelTestChild,
            ChangeTest
        },

        data() {
            return {
                testO: {
                    origin: 'o',
                    test: {
                        name: 'test',
                        age: {
                            now: 111,
                            type: 'lal'
                        }
                    }
                },
                arr: [
                    {name: 'aaa', age: 10},
                    {name: 'bb', age: 12},
                    {name: 'ccccc', age: 14}
                ],
                changeInfo: 333
            }
        },

        methods: {
            change(data) {
                console.log('change happen', data);
            }
        },
    };

</script>

<style lang='stylus' scoped>

</style>
