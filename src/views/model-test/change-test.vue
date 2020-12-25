<template>
    <div>
        <p>
            <span @click="changeValue">click me</span>
            {{ info }}
        </p>
    </div>
</template>

<script>

    export default {
        name: 'change-test',

        model: {
            prop: 'info',
            event: 'change'
        },

        props: {
            info: {
                type: Number,
                default: 0
            },
        },

        methods: {
            changeValue() {
                this.$emit('change', Math.random())
            }
        },
    };

</script>

<style lang='stylus' scoped>

</style>
