// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EZ Template',
  tagline: '',
  url: 'https://asik007.github.io',
  baseUrl: '/my-website/',
  projectName: 'my-website',
  organizationName: 'Asik007',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/pog.ico',
  deploymentBranch: 'pogsite',
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // whether to index docs pages
        indexDocs: true,
      
        // Whether to also index the titles of the parent categories in the sidebar of a doc page.
        // 0 disables this feature.
        // 1 indexes the direct parent category in the sidebar of a doc page
        // 2 indexes up to two nested parent categories of a doc page
        // 3...
        //
        // Do _not_ use Infinity, the value must be a JSON-serializable integer.
        indexDocSidebarParentCategories: 0,
      
        // whether to index blog pages
        indexBlog: true,
      
        // whether to index static pages
        // /404.html is never indexed
        indexPages: false,
      
        // language of your documentation, see next section
        language: "en",

        style: undefined,
      }
    ],
  ],


  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'EZ-template, VRC, VEX, Robotics, VEX-Robotics, library'}],
      navbar: {
        title: 'EZ Template',
        logo: {
          alt: 'EZ',
          src: 'img/logo.png',
        },
        items: [
          {to: '/category/tutorials', label: 'Tutorials', position: 'left'},
          
          {to: '/category/docs', label: 'Docs', position: 'left'},
          {to: '/category/releases', label: 'Releases', position: 'left'},

          {
            href: 'https://github.com/EZ-Robotics/EZ-Template',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
                  items: [
                    {
                      label: 'Tutorial',
                      to: '/category/tutorials',
                    },
                    {
                      label: 'Docs',
                      to: '/category/docs',
                    },
                    {
                      label: 'Releases',
                      to: '/category/releases',
                    },                    
                    
                  ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Vex Robotics Discord',
                href: 'https://discord.com/invite/vrc',
              },
              {
                label: 'roboticsisez@gmail.com',
                href: 'mailto:roboticsisez@gmail.com'

              }
            ],
          },
          
          // ... other links
        ],

        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
