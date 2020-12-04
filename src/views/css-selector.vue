<template>
    <div class="container">
        <h1>test</h1>
        <div class="outer">
            <div class="test-1">
                aaaaaa
            </div>
        </div>
        <div class="outer">
            <div class="test-2">
                bbbb
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'css-selector'
    };

</script>

<style lang='stylus' scoped>
    .container {
        .outer {
            padding: 20px;

            & > div {
                width: 50%;
            }

            & > div:not(.test-1) {
                background-color: #abcdef;
            }
        }

    }
</style>
