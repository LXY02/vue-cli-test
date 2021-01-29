<template>
    <div>
        <hr>
        <p>child</p>
        {{ info.name }}
    </div>
</template>

<script>

    export default {
        name: 'child',

        props: {
            info: {
                type: Object,
                validator(info) {
                    return 'name' in info;
                }
            }
        }
    };

</script>
