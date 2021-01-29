<template>
    <div v-if="visible">
        this is a test message  <span @click="cancle">close</span>
    </div>
</template>

<script>

    export default {
        name: 'message',

        data() {
            return {
                visible: false
            }
        },

        methods: {
            cancle() {
                console.log('** close');
                this.reject();
            }
        },
    };

</script>
