<template>
    <div>
        <input class="upload-input" accept="image/*" type="file" @change="onSelect">
        <div class="test" ref="test">
            <img :src="src1" alt="">
            <img :src="src2" alt="">
        </div>
        <div ref="content" v-html="content"></div>
    </div>
</template>

<script>

    // import imagesloaded from 'imagesloaded';

    export default {
        name: 'img-test',

        data() {
            return {
                src1: '',
                src2: '',
                content: '',
                url1: 'https://public.xiaoshuihua.com/static/insurance-upload/mayuri/prod/4da24afcacb647e137b46172c5f52dba.jpg',
                url2: 'https://public.xiaoshuihua.com/static/insurance-upload/mayuri/test/440cc28690ce4a31143d0532992678190.jpg',
                imgUrls: [
                    'https://public.xiaoshuihua.com/static/insurance-upload/mayuri/test/512c3f269dffcea443e08534e40ecc8d0.jpg',
                    'https://public.xiaoshuihua.com/static/insurance-upload/mayuri/test/440cc28690ce4a31143d0532992678190.jpg',
                    'https://public.xiaoshuihua.com/static/insurance-upload/mayuri/prod/4da24afcacb647e137b46172c5f52dba.jpg',
                    'https://public.xiaoshuihua.com/static/insurance-upload/mayuri/test/93e5e5d3c1cd562510327a89fb5025780.jpg',
                    'https://public.xiaoshuihua.com/static/insurance-upload/mayuri/test/280424dd4b93b4dcf284fa959c1647e50.jpg'
                ]
            }
        },

        mounted() {
            // setTimeout(() => {
            //     console.log('time');
            //     this.src1 = 'https://public.xiaoshuihua.com/static/insurance-upload/mayuri/prod/4da24afcacb647e137b46172c5f52dba.jpg';
            // }, 3000);
            //
            // setTimeout(() => {
            //     console.log('tiem-2');
            //     this.src2 = 'https://public.xiaoshuihua.com/static/insurance-upload/mayuri/test/440cc28690ce4a31143d0532992678190.jpg';
            // }, 4000);

            // setTimeout(() => {
            //     console.log('time html');
            //     this.content = `<div><img src=${this.url1}></div><div><img src=${this.url2}></div>`;
            //     document.querySelectorAll('img').forEach((imgDom, index) => {
            //         imgDom.onload = () => {
            //             console.log('iindex', index);
            //         }
            //      })
            // }, 4000);

            // this.$refs.test.
            // imagesloaded(document.querySelectorAll('img'), () => {
            //     console.log('test');
            // })
            // const imagesLoaded = require('imagesloaded');

        },

        methods: {
            onSelect(event) {
                const {files} = event.srcElement;

                console.log('window.URL.createObjectURL(files[0]) ', window.URL.createObjectURL(files[0]));
                event.target.value = '';
            }
        }
    };

</script>

