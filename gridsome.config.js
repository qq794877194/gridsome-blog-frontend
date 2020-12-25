// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
      {
        use: '@gridsome/source-filesystem',
          options: {
          typeName: 'BlogPost',
              path: './content/blog/**/*.md'
          }
      },
      {
          use: '@gridsome/source-strapi',
          options: {
              apiURL: process.env.GRIDSOME_API_URL,
              queryLimit: 1000,
              contentTypes: ['post','tag'],
              singleTypes: ['general'],
              typeName: 'Strapi'
              // 访问受保护的api需要的用户名和密码
              // loginData: {
              //     identifier: '',
              //     password: ''
              // }
          }
      }
  ],
    templates: {
      // 名称需要为集合中的名称
      StrapiPost: [
          {
              path: '/post/:id',
              component: './src/templates/post.vue'
          }
      ],
        StrapiTag: [
            {
                path: '/tag/:id',
                component: './src/templates/tag.vue'
            }
        ]
    }
};
