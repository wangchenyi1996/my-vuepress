module.exports = {
    title: '王承毅',  // 设置网站标题
    description: '这是一个 vuepress 构建的个人站点,主要总结前端知识点',
    base: '/',
    themeConfig: {
        logo: '/imgs/personal.png',
        displayAllHeaders: true, // 默认值：false
        nav: [
            { text: '个人简介', link: '/user/'},
            { text: 'JavaScript常用技巧', link: '/javascript/' },
            { text: 'Vue知识点总结', link: '/vue/' },
            { text: 'CSS | H5技巧', link: '/css/' },
            { text: '易错点总结', link: '/easyerror/' }
        ],
        sidebar: {
            '/easyerror/': [
                '',     /* /easyerror/ */
                'css_H5',  /* /easyerror/css.html */
                'vue',   /* /easyerror/vue.html */
                'javascript',   /* /easyerror/javascript.html */
            ],
            '/vue/': [''   /* /vue/ */],
            '/css/': [''   /* /css/ */],
            '/javascript/': [''   /* /javascript/ */],
            '/user/': [''   /* /user/ */]
        },
        sidebarDepth: 2
    }
}
