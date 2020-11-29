export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc3c026d86d6798a2862fcc',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-popvws68',
                  apiId: '81b4ef81-8c3e-4278-b434-b65cece379c9'
                },
                {
                  buildHookId: '5fc3c027330a58a9d0ac2ff4',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-zx9o1uo6',
                  apiId: 'e617a3bd-450e-4a1c-a81d-8c679f82e22a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ariefbuddies/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-zx9o1uo6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
