<template>
    <div class="child-a">
        <p>{{ value.age }} --- {{ value.test }}</p>
        <div @click="select">ModelTestChildA</div>
    </div>
</template>

<script>

    export default {
        name: 'ModelTestChildA',

        props: {
            value: {
                required: true
            }
        },

        mounted() {
            this.$emit('input', this.value);
        },

        methods: {
            select() {
                console.log('select');
                this.$emit('input', {
                    ...this.value,
                    age: 14
                });
            }
        }
    };

</script>

<style lang='stylus' scoped>
    .child-a {
        background-color: #bdff86;
    }
</style>
