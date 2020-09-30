<template>
    <div class="yqg-ruler">
        <yqg-ruler
                :maxNum='100'
                :minNum='25'
        />

        <!--<ruler-2-->
                <!--:NowNum='85'-->
                <!--:maxNum='100'-->
                <!--:minNum='25'-->
                <!--:numSize="20"-->
                <!--:ruleWidth='30'-->
        <!--/>-->
    </div>
</template>

<script>
    import YqgRuler from '../components/yqg-ruler';
    // import Ruler2 from '../components/ruler-2';

    export default {
        name: 'cs-ruler',

        components: {
            YqgRuler
            // Ruler2
        }
    }

</script>

<style lang="stylus" rel="stylesheet/scss" scoped>
</style>
