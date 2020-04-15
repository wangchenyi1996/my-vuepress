module.exports = {
    title: '前端知识点',  // 设置网站标题
    description: '这是一个 vuepress 构建的个人站点,主要总结前端知识点',
    base: '/',
    themeConfig: {
        displayAllHeaders: true, // 默认值：false
        nav: [
            { text: 'JavaScript常用技巧', link: '/javascript' },
            { text: 'Vue知识点总结', link: '/vue' },
            { text: 'CSS技巧', link: '/css' },
            { text: '易错点总结', link: '/easyerror' }
        ],
        sidebar: {
            '/': [
                "/",            //指的是根目录的md文件 也就是 README.md 里面的内容
                "javascript",       //根目录创建 javascript.md文件
                "vue",          //根目录创建 vue.md文件
                "css",        //根目录创建 css.md文件
                "/easyerror"     //根目录创建 easyerror.md文件
            ]
        },
        // sidebar: [
        //     ['/', '首页'],
        //     ['/blog/FirstBlog.md', '我的第一篇博客']
        // ],
        sidebarDepth: 2
    }
}