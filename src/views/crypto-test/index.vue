<!-- @author xinyiliang -->
<!-- @email xinyiliang@yangqianguan.com -->
<!-- @date 2021/6/23 4:24 PM -->
<!-- @desc index.vue -->

<template>
    <div>
        js
    </div>
</template>

<script>

    import CryptoJS from 'crypto-js';

    const randomString = (len = 16) => {
        const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        const maxPos = $chars.length;
        let pwd = '';
        for (let i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    };

    const aesKey = randomString(16);
    const key = CryptoJS.enc.Utf8.parse(aesKey);

    export default {
        name: 'index',

        data() {
            return {
                test: null
            }
        },

        mounted() {
            const encrypted = CryptoJS.AES.encrypt("Hello world", "Secret Passphrase", {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });
            const decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase", {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });
            console.log('decrypted ', decrypted.toString(CryptoJS.enc.Utf8)); // Hello world
        },

        methods: {

        }
    };

</script>
