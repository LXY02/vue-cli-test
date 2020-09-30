<template>
    <div class="child-a">
        <p>{{ value.age }} --- {{ value.test }}</p>
        <div @click="select">ModelTestChildA</div>
        <p @click="changeA">click me</p>
        <ul v-if="value.arr">
            <li v-for="(num) in value.arr" :key="num">{{ num }}</li>
        </ul>
        <hr>
        <p @click="syncTest">sync - 1</p>
        <p @click="syncTest2">sync - 2</p>
        <ul v-if="infoSync.arr">
            <li v-for="(num) in infoSync.arr" :key="num.name">sync-{{ num.name }}-{{ num.age }}</li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'ModelTestChildA',

        props: {
            value: {
                required: true
            },

            infoSync: {
                type: Object
            }
        },

        mounted() {
            this.$emit('input', this.value);
        },

        methods: {
            select() {
                console.log('select');
                this.$emit('input', {
                    age: 14,
                    arr: [1,2]
                });
            },

            changeA() {
                this.$emit('input', {
                    arr: [3,4,5]
                })
            },

            syncTest() {
                this.$emit('update:infoSync', {
                    arr: [{name: 'a', age: 1},{name: 'ab', age: 12}]
                })
            },

            syncTest2() {
                this.infoSync.arr[1].name='ccc';
                this.$emit('update:infoSync', this.infoSync)
            }
        }
    };

</script>

<style lang='stylus' scoped>
    .child-a {
        background-color: #bdff86;
    }
</style>
