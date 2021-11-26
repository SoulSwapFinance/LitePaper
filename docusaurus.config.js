/** @type {import('@docusaurus/types').DocusaurusConfig} */

const customFields = {
  githubUrl: `https://github.com/SoulSwapFinance`,
  discordUrl: `https://discord.gg/DQjChB6Wa6`,
  twitterUrl: 'https://twitter.com/soulswapfinance',
  forumUrl: 'https://forum.soulswap.finance',
  daoUrl: 'https://enchant.soulswap.finance',
  blogUrl: 'https://soulswapfinance.medium.com/',
  farmUrl: '/guides/farming',
  stakingUrl: '/guides/staking',
  enchantUrl: '/guides/enchant',
};

module.exports = {
  title: 'SoulSwap',
  tagline: 'The Universal Web3 Integration Standard',
  url: 'https://docs.soulswap.finance',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'soulswap',
  projectName: 'documentation',
  themeConfig: {
    sidebarCollapsible: true,
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: '',
      logo: {
        alt: 'SoulSwap Icon',
        src: 'img/soul.png',
        srcDark: 'img/soulswap-logo.png',
        href: '/',
      },
      items: [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'Guides',
          position: 'left',
          items: [
            {
              label: 'Farming for Soul',
              href: customFields.farmUrl,
              // className: 'blog-logo',
              'aria-label': 'Farming Guide',
            },
            {
              label: 'Staking and Seance',
              href: customFields.stakingUrl,
              // className: 'twitter-logo',
              'aria-label': 'Seance Staking Guide',
            },
            {
              label: 'Earning with Enchant',
              href: customFields.enchantUrl,
              // className: 'twitter-logo',
              'aria-label': 'Enchant Guide',
            },
          ],
        },
        {
          label: 'Social',
          position: 'left',
          items: [
            {
              label: 'Blog',
              href: customFields.blogUrl,
              className: 'blog-logo',
              'aria-label': 'SoulSwap Blog',
            },
            {
              label: 'Twitter',
              href: customFields.twitterUrl,
              className: 'twitter-logo',
              'aria-label': 'twitter account',
            },
          ],
        },
        {
          label: 'Community',
          position: 'left',
          items: [
            {
              label: 'Code',
              href: customFields.githubUrl,
              className: 'github-logo',
              'aria-label': 'GitHub repository',
            },
            {
              label: 'Discuss',
              href: customFields.forumUrl,
              className: 'forum-logo',
              'aria-label': 'Forum'
            },
            {
              label: 'Chat',
              href: customFields.discordUrl,
              className: 'discord-logo',
              'aria-label': 'Discord server',
            },
            {
              label: 'Govern',
              href: customFields.daoUrl,
              className: 'dao-logo',
              'aria-label': 'dao repo',
            },
          ],
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // pls change this to your repo.
          editUrl: 'https://github.com/soulswapfinance/litepaper/tree/main',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./style.css'),
        },
        pages: {
          path: 'src/pages'
        }
      },
    ],
  ],
  plugins: [require.resolve('docusaurus-lunr-search')],
};
