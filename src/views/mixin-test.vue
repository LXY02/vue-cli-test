<template>
    <div>
        test
        <p @click="testBtn">lalall</p>
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
            }
        }
    };

</script>

