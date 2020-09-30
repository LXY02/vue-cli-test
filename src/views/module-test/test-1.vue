<template>
    <div>
        test-1
        <p>
            {{ num }}
        </p>
        <p @click="onClick">click</p>
    </div>
</template>

<script>

    import {c} from './mod';

    console.log(c.show());

    c.add();

    export default {
        name: 'test-1',

        props: {
            // info: {
            //     type: Object
            // }
            // value: {
            //     required: true
            // }
            test: {
                type: Boolean
            }
        },

        data() {
            return {
                num: 1
            }
        },

        beforeUpdate() {
            console.log('child before update');
        },

        methods: {
            onClick() {
                this.num = Math.random();
            }
        }
    };

</script>

