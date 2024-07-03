import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  base: 'user.github.io/willsweaney.com/',
  title: 'temp',
  description: 'Your description here',
  themeConfig: {
    markdown: {
      image: {
        lazyLoading: true
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'API Examples', link: '/api-examples' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
        ],
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Home',
          link: '/home'
        },
        {
          text: 'Guide',
          children: [
            { text: 'Getting Started', link: '/guide/getting-started' },
          ]
        }
      ]
    }
  }
})
