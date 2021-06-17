export default () => ({
    data() {
        return {
            b: 'bb'
        };
    },

    mounted() {
        console.log('b -- ', this.a);
    },

    methods: {
        test() {
            console.log('b');
        },

        testB() {
            this.testAB();
        },

        testAB() {
            console.log('ab from b');
        }
    },
});
