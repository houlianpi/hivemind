const config = {
  title: 'Hivemind',
  tagline: 'Team Knowledge Base powered by the LLM Wiki Pattern',
  favicon: 'img/favicon.svg',
  url: 'https://houlianpi.github.io',
  baseUrl: '/hivemind/',
  organizationName: 'houlianpi',
  projectName: 'hivemind',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'wiki',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/social-card.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Hivemind',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wikiSidebar',
          position: 'left',
          label: 'Knowledge Base',
        },
        {
          href: 'https://github.com/houlianpi/hivemind',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{label: 'Index', to: '/'}],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/houlianpi/hivemind',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hivemind.`,
    },
    prism: {
      additionalLanguages: ['bash', 'json'],
    },
  },
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexPages: false,
        docsRouteBasePath: '/',
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        language: ['en', 'zh'],
      },
    ],
  ],
};

module.exports = config;
