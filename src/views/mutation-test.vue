<template>
    <div>
        <p>test</p>
        <div ref="content" v-html="content"></div>
    </div>
</template>

<script>

    export default {
        name: 'mutation-test',

        data() {
            return {
                content: ''
            }
        },

        mounted() {
            this.init();
            setTimeout(() => {
                this.content = '<div>lalallalala--</div><img style="display: block; padding: 5px 0;" src="https://public.xiaoshuihua.com/static/insurance-upload/mayuri/prod/4da24afcacb647e137b46172c5f52dba.jpg">';
                console.log('timeout');
            }, 3000)
        },

        methods: {
            init() {
                const scrollTarget = this.$refs.content;
                const config = {childList: true, characterData: true, subtree: true};
                const observer = new MutationObserver(() => this.contentScroll({target: scrollTarget, $$init: true}));

                observer.observe(scrollTarget, config);
                console.log('end');
            },

            contentScroll(event) {
                console.log('scroll ', event);
                const {target: {offsetHeight, scrollTop, scrollHeight}} = event;
                console.log('offsetHeight, scrollTop, scrollHeight ', offsetHeight, scrollTop, scrollHeight);
            }
        }
    };

</script>
