<template>
    <div>
        <p>validator</p>
        <child :info="info"></child>
    </div>
</template>

<script>

    import Child from './component/child';

    export default {
        name: 'props-validator',

        components: {
            Child
        },

        data() {
            return {
                info: {name: 'aa'}
            }
        },
    };

</script>

