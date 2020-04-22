<template>
    <div>
        matching
        <div v-html="htmlStr"></div>
    </div>
</template>

<script>

    export default {
        name: 'Matching',

        data() {
            return {
                htmlStr: ''
            }
        },

        mounted() {
            this.setHtmlStr();
        },

        methods: {
            setHtmlStr() {
                const str = '您当前存在多个潜在风险，风险抵御能力很弱，请尽快为自己加强防护。\\n\\n意外风险：生活中意外随时发生，交通意外是所有意外中占比最高的一种，您本人出行方式存在意外隐患，请注意防范。\\n\\n医疗风险：重疾险的意义在于失能收入补偿，另外需要搭配高免赔额的高额医疗险，来报销医疗费用。\\n\\n养老风险：对于这个阶段的家庭，除了抵御风险，更重要的是要开始考虑养老的问题，进行退休后的规划。\\n\\n家庭风险：活着和健康的活着，是对自己和家人最好的交代。任意一个条件不满足，家庭都会出现动荡。保险没办法保证这两条，但能保证发生这两件事之后，家庭可以获得有足够的经济补偿让原本的生活不受影响，所以，买重疾险，额度不高等于白买';

                const matchingRules = {
                    defaultHtmlTag: ['<strong>', '</strong>'],
                    customerList: [
                        {
                            target: '足够的经济',
                            htmlTag: ['<span style="color: #2D7BFF; font-size: 20px">', '</span>']
                        },
                        {
                            target: '加强防护'
                        },
                        {
                            target: '医疗风险'
                        },
                        {
                            target: '意外风险',
                            htmlTag: ['<strong>', '</strong>']
                        }
                    ]
                };
                this.htmlStr = matchingRules.customerList.reduce((htmlStr, perRule) => {
                    let panter = new RegExp(perRule.target, 'g');
                    const htmlTag = perRule.htmlTag ? perRule.htmlTag : matchingRules.defaultHtmlTag;
                    return htmlStr.replace(panter, htmlTag[0] + perRule.target + htmlTag[1]);
                }, str);
            }
        }
    };

</script>

<style lang='scss' scoped>

</style>
