export default {
    install(Vue, {router, store}) {
        const $modal = {
            open(component, props = {}) {
                if (!component) {
                    throw new Error('need component');
                }

                const Comp = Vue.extend(component); // 以component为基础，生成一个子类
                const modalInstance = new Comp({
                    router,
                    store,

                    propsData: {
                        ...props
                    },

                    methods: {
                        destoryModalInstance() {
                            setTimeout(() => this.$destroy(), 500);
                        }
                    }
                });

                // 将实例挂载
                const ModalEleId = `modal-${Date.now()}`;
                const dom = document.createElement('div');
                dom.id = ModalEleId;
                document.body.appendChild(dom);
                console.log('---- ', dom);

                modalInstance.$mount(`#${ModalEleId}`);
                modalInstance.visible = true;

                return new Promise((resolve, reject) => {
                    Object.assign(modalInstance, {
                        resolve(data) {
                            modalInstance.visible = false;
                            resolve(data);
                        },

                        reject() {
                            modalInstance.visible = false;
                            reject();
                            modalInstance.destoryModalInstance();
                        }
                    })
                });
            }
        };



        Vue.prototype.$modal = $modal;
    }
}
