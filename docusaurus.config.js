module.exports = {
  // plugins: ['@docusaurus/plugin-google-analytics'],
  title: 'stc',
  tagline: 'The fastest typescript type checker',
  url: 'https://stc.dudy.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'stc-rs', // Usually your GitHub org/user name.
  projectName: 'stc', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'G-XEGVWSN58H',
    },
    navbar: {
      title: 'STC',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/stc-rs/stc',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: 'account',
          label: 'Account',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Current status',
              to: 'docs/',
            },

          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github discussions',
              href: 'https://github.com/stc-rs/stc/discussions',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/stc-rs/stc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} @dudykr. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/stc-rs/website/edit/main/sidebars.js',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/stc-rs/website/tree/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
