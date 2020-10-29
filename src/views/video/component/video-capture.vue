<template>
    <div>
        <!--<video ref="video" id="video" :src="src" preload @loadeddata="loadeddata" controls></video>-->
        <video ref="video" id="video" preload @loadeddata="loadeddata" controls></video>
        <input type="file" @change="onSelect">
        <button @click="createVideoCapture">click</button>
    </div>
</template>

<script>

    import Video from './video.mp4';

    export default {
        name: 'VideoCapture',
        props: {
            src: String
        },
        data() {
            return {
                Video
            };
        },
        methods: {
            onSelect({target: {files}}) {
                console.log('files', files);
                this.$refs.video.src = window.URL.createObjectURL(files[0]);
            },

            loadeddata(data) {
                // return;
                console.log('data', data);
                // const src = this.createVideoCapture(data);
                // console.log('---', src);
            },

            createVideoCapture() {
                // const canvas = document.createElement('canvas');
                // const ctx = canvas.getContext('2d');
                // ctx.drawImage(this.$refs.video, 0, 0);
                // const src = canvas.toDataURL('image/jpeg');
                // console.log('src ', src);
                // return src;
                let video = document.getElementById("video");
                let canvas = document.createElement("canvas");
                let img = document.createElement("img");
                let ctx = canvas.getContext("2d");

                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                img.src = canvas.toDataURL();
                document.body.append(img);
            }
        },
    };

</script>

<style lang='scss' scoped>

</style>
