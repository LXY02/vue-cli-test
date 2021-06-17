import mixinAA from './mixinAA';


export default () => ({
    mixins: [mixinAA()],

    data() {
        return {
            a: 'aaa'
        };
    },

    mounted() {
        console.log('a -- ', this.b);
    },

    methods: {
        test() {
            console.log('a');
        },

        testA() {
            this.testAB();
        },

        testAB() {
            console.log('ab from a');
        }
    },
});
