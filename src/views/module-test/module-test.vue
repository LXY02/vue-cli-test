<template>
    <div>
        <p>module-test</p>
        <test-1 test></test-1>
        <test-2></test-2>
    </div>
</template>

<script>

    import Test1 from './test-1';
    import Test2 from './test-2';

    export default {
        name: 'module-test',
        components: {
            Test1,
            Test2
        },

        beforeUpdate() {
            console.log('before update');
        }
    };

</script>

