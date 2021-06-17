<template>
    <div>
        <p @click="test">click me</p>
    </div>
</template>

<script>

    export default {
        name: 'FormTest',

        data() {
            return {
                testStr: ''
            };
        },


        methods: {
            test() {
                const div = document.createElement('div');
                div.innerHTML = this.testStr;
                document.body.appendChild(div);
            }
        },
    };

</script>
