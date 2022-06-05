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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'EZ Template',
        logo: {
          alt: 'EZ',
          src: 'img/logo.png',
        },
        items: [
          {to: '/docs/category/tutorials', label: 'Tutorials', position: 'left'},
          {
            type: 'doc',
            docId: 'Installation',
            position: 'left',
            label: 'Installation',
          },
          {to: '/docs/category/docs', label: 'Docs', position: 'left'},
          {to: '/docs/category/releases', label: 'Releases', position: 'left'},

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
      
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Vex Robotics Discord',
      //           href: 'https://discord.com/invite/vrc',
      //         },
      //         {
      //           label: 'roboticsisez@gmail.com',
      //           href: 'google.com',
      //         }
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/EZ-Robotics/EZ-Template',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
                  items: [
                    {
                      label: 'Tutorial',
                      to: '/docs/category/tutorials',
                    },
                    {
                      label: 'Installation',
                      to: '/docs/Installation',
                    },
                    {
                      label: 'Docs',
                      to: '/docs/category/docs',
                    },
                    {
                      label: 'Releases',
                      to: '/docs/category/releases',
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
