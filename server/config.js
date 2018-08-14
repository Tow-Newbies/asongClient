const CONF = {
    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wx22cc802fdfb043d4',

    // 微信小程序 App Secret
    appSecret: 'a5b637e65eaeccdf66a363178c16511d',

    serverHost: 'localhost',
    tunnelServerUrl: '',
    tunnelSignatureKey: '',
    // 腾讯云相关配置可以查看云 API 秘钥控制台：https://console.qcloud.com/capi
    qcloudAppId: '1257257713',
    qcloudSecretId: 'AKID86qMdgU4RkpeEYASVKuHQKzQcZHkkzkH',
    qcloudSecretKey: 'SfeOtBE2bw2uXv51jFXbWDfuugEYeV8X',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: '',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-chengdu',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'weixinmsgToken'
}

module.exports = CONF
