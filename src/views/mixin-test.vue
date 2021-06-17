<template>
    <div>
        test
        <p @click="testBtn">lalall</p>
        <p @click="test">lalall----</p>
        <p @click="testA">testA</p>
        <p @click="testB">testB</p>
    </div>
</template>

<script>
    import mixinA from '../mixins/mixinA';
    import mixinB from '../mixins/mixinB';

    export default {
        name: 'MixinTest',
        mixins: [mixinA(), mixinB()],
        mounted() {
            this.$emit('test');
            this.$on('test', () => {
                console.log('mounted test');
            })
        },
        methods: {
            testBtn() {
                console.log('btn');
                this.$on('test', () => {
                    console.log('test');
                })
            },

            // test() {
            //     console.log('test');
            // }
        }
    };

</script>

