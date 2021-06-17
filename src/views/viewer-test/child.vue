<!-- @author xinyiliang -->
<!-- @email xinyiliang@yangqianguan.com -->
<!-- @date 2021/4/13 12:30 PM -->
<!-- @desc child.vue -->

<template>
    <div>
        <div>child-----</div>
        <div>child-----</div>
        <img v-for="(img, index) in images" :key="index" :src="img" alt="">
    </div>
</template>

<script>

    export default {
        name: 'child',

        props: {
            images: Array
        }
    };

</script>
