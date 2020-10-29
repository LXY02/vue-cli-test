<template>
    <div class="outer">
        <div style="margin-bottom: 20px">
            inner-scroll
            <p>
                ---- {{ isDisabledBtn }}
            </p>
        </div>
        <div class="inner" v-html="htmlContent" ref="htmlContent" @scroll="contentScroll"></div>
    </div>
</template>

<script>

    export default {
        name: 'inner-scroll',

        data() {
            return {
                isDisabledBtn: true,
                htmlContent: ''
            };
        },

        mounted() {
            this.htmlContent = '<div style="color: #F8AD00;padding: 10px 8px;line-height: 1.2;font-size: 14px;background-color: #FFF7E6;margin-bottom: 18px;">健康保重大疾病保险（少儿版）条款</div><div style="font-size: 14px;color: #333;font-weight: bold;margin: 18px 0 10px;line-height: 1.1;">第九条 责任免除</div><span style="white-space:normal;color:#000000;">因下述一种或多种情形导致被保险人患本合同所列的重大疾病、中症疾病、轻症疾病、特定疾病的，本公司不承担给付保险金和豁免保险费的责任：</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#000000;">（一）投保人对被保险人的故意杀害、故意伤害；</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#000000;">（二）被保险人故意犯罪或者抗拒依法采取的刑事强制措施；</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#000000;">（三）被保险人自本合同生效日或者最后复效日（以较迟者为准）起2年内自杀，但被保险人自杀时为无民事行为能力人的除外；</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#000000;">（四）被保险人醉酒，斗殴，故意自伤，服用、吸食或注射毒品；</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#000000;">（五）被保险人酒后驾驶，无合法有效驾驶证驾驶，或驾驶无有效行驶证的机动车；</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#000000;">（六）被保险人患先天性疾病、先天性畸形、遗传性疾病（但符合本合同“附表一：重大疾病列表”“附表二：中症疾病列表”“附表三：轻症疾病列表”“附表四：特定疾病列表”中疾病定义的除外）；</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#000000;">（七）被保险人患艾滋病或感染艾滋病病毒（但符合本合同“附表一：重大疾病列表”中疾病定义的除外）；</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#000000;">（八）战争、军事冲突、暴乱或武装叛乱；</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#000000;">（九）核爆炸、核辐射或核污染。</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#000000;">被保险人因上述第（一）项情形患本合同所列的重大疾病、中症疾病、轻症疾病、特定疾病的，本公司向被保险人退还本合同的现金价值，本合同终止。</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#000000;">被保险人因上述其他情形患本合同所列的重大疾病、中症疾病、轻症疾病、特定疾病的，本公司向投保人退还本合同的现金价值，本合同终止。</span><br style="white-space:normal;" />\\n<br style="white-space:normal;" />\\n<span style="color:#000000;"></span><div style="font-size: 14px;color: #333;font-weight: bold;margin: 18px 0 10px;line-height: 1.1;">第十条 其他免责条款</div><span style="white-space:normal;">除以上“第九条 责任免除”外，本合同中还有其他免除本公司责任的条款，详见本合同“第三条 犹豫期”“第四条 明确说明与如实告知”“第七条 等待期”“第八条 保险责任”“第十三条 宽限期”“第十八条 年龄性别错误”“第二十条 合同中止与复效”“第二十一条 合同解除”“第二十二条 保险事故通知”“第二十三条 保险金及豁免保险费申请”“第二十八条 释义”“附表一：重大疾病列表”“附表二：中症疾病列表”“附表三：轻症疾病列表”“附表四：特定疾病列表”中背景突出显示的内容。</span><div style="color: #F8AD00;padding: 10px 8px;line-height: 1.2;font-size: 14px;background-color: #FFF7E6;margin-bottom: 18px;">健康保豁免保险费重大疾病保险条款</div><div style="font-size: 14px;color: #333;font-weight: bold;margin: 18px 0 10px;line-height: 1.1;">第八条 责任免除</div><span style="white-space:normal;color:#E53333;">因下述一种或多种情形导致被保险人身故、全残、进入疾病终末期阶段或患本合同约定的疾病（无论一种或多种）的，本公司不承担豁免保险费的责任：</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#E53333;">（一）被保险人故意犯罪或者抗拒依法采取的刑事强制措施；</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#E53333;">（二）被保险人自本合同生效日或者最后复效日（以较迟者为准）之日起2年内自杀，但被保险人自杀时为无民事行为能力人的除外；</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#E53333;">（三）被保险人醉酒，斗殴，故意自伤，服用、吸食或注射毒品；</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#E53333;">（四）被保险人酒后驾驶，无合法有效驾驶证驾驶，或驾驶无有效行驶证的机动车；</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#E53333;">（五）被保险人患先天性疾病、先天性畸形、遗传性疾病（但符合本合同“附表一：重大疾病列表”“附表二：中症疾病列表”“附表三：轻症疾病列表”中疾病定义的除外）；</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#E53333;">（六）被保险人患艾滋病或感染艾滋病病毒（但符合本合同“附表一：重大疾病列表”中疾病定义的除外）；</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#E53333;">（七）战争、军事冲突、暴乱或武装叛乱；</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#E53333;">（八）核爆炸、核辐射或核污染。</span><br style="white-space:normal;" />\\n<span style="white-space:normal;color:#E53333;">被保险人因上述情形全残、进入疾病终末期阶段或患本合同约定的疾病（无论一种或多种）的，本公司向投保人退还本合同的现金价值，本合同终止；被保险人因上述项情形身故的，本公司向被保险人的继承人退还本合同的现金价值，本合同终止。</span><br /><div style="font-size: 14px;color: #333;font-weight: bold;margin: 18px 0 10px;line-height: 1.1;">第九条 其他免责条款</div><span style="white-space:normal;color:#000000;">除以上“第八条 责任免除”外，本合同中还有其他免除本公司责任的条款，详见本合同“第二条 合同成立与生效”“第三条 犹豫期”“第四条 明确说明与如实告知”“第十二条 宽限期”“第十六条 年龄性别错误”“第十八条 合同中止与复效”“第十九条 合同解除”“第二十条 保险事故通知”“第二十一条 豁免保险费申请”“第二十六条 释义”“附表一：重大疾病列表”“附表二：中症疾病列表”“附表三：轻症疾病列表”中背景突出显示的内容。</span><span style="color:#000000;"></span>';
            this.initScroll();
        },

        methods: {
            initScroll() {
                this.$nextTick(() => {
                    const htmlContentDom = this.$refs.htmlContent;
                    htmlContentDom.firstElementChild.scrollIntoView();
                    this.contentScroll({target: htmlContentDom, $$init: true});
                });
            },

            contentScroll(event) {
                const vm = this;
                const {target: {offsetHeight, scrollTop, scrollHeight}, $$init} = event;

                console.log('target ', event);
                console.log('------ ', event.target.getBoundingClientRect());

                if ($$init || (!$$init && vm.isDisabledBtn)) {
                    // 需求：滚动到底部一次后，按钮就保持可以点击状态
                    vm.isDisabledBtn = scrollTop < scrollHeight - offsetHeight;


                }
            }
        },
    };

</script>

<style lang='stylus' scoped>
    .outer {
        background-color #abcdef

        .inner {
            height: 400px
            border 1px solid red
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        }
    }

</style>
