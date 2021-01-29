<template>
    <div>
        <div @click="test">click me</div>
    </div>
</template>

<script>

    import Message from './modal/message';

    export default {
        name: 'modal-test',

        methods: {
            test() {
                this.$modal.open(Message).catch(err => err);
            }
        }
    };

</script>


