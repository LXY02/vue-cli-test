<!-- @author xinyiliang -->
<!-- @email xinyiliang@yangqianguan.com -->
<!-- @date 2021/5/12 6:32 PM -->
<!-- @desc other-child.vue -->

<template>
    <div v-if="visible">
        other-child
        <div class="b-dialog">
            <div v-for="(item, index) in child" :key="index" class="item" ref="testChild">{{item}}</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'OtherChild',

        data() {
            console.log('data');
            return {
                visible: false,
                child: ['a', 'b', 'c', 'd']
            }
        },

        beforeCreate() {
            console.log('beforeCreate');
        },

        created() {
            console.log('created');
        },

        beforeMount() {
            console.log('beforeMount this.$data ', this.$data);
        },

        mounted() {
            console.log('other mounted', this.visible);
            console.log('----', this.$refs.testChild);

            // this.visible = true;

            this.$nextTick(() => {
                console.log('nextTick', this.$refs.testChild, this.visible);
            });

            setTimeout(() => {
                console.log('timeout', this.$refs.testChild);
            }, 0);

            // this.visible = true;
            console.log('mounted end');
        },

        // beforeUpdate() {
        //     console.log('beforeUpdate ', this.visible);
        // },

        updated() {
            console.log('updated ', this.visible);

        }
    };

</script>
