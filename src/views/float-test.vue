<template>
    <div>
        <div class="outer">
            <div class="left">
                aaaaaaaaaaaaaaaaaaaaaaaa
            </div>
            <div class="right">
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'float-test'
    };

</script>

<style lang='stylus' scoped>
    .outer {
        width: 200px;
        word-break: break-all;
        background-color: #abcdef;

        &:after {
            clear: both;
        }

        .left {
            width: 100px;
            float: left;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-break: break-all;
        }

        .right {
            word-break: break-all;
            /*width: 100px;*/
            /*float: left;*/

        }
    }
</style>
