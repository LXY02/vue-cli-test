<template>
    <div>
        <input class="upload-input" accept="image/*" type="file" @change="onSelect">
    </div>
</template>

<script>

    export default {
        name: 'img-test',

        methods: {
            onSelect(event) {
                const {files} = event.srcElement;

                console.log('window.URL.createObjectURL(files[0]) ', window.URL.createObjectURL(files[0]));
                event.target.value = '';
            }
        }
    };

</script>

