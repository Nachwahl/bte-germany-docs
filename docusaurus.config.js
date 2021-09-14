const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
    title: 'BTE Germany Docs',
    tagline: 'We\'re building Germany 1:1 in Minecraft',
    url: 'https://bte-germany-docs.vercel.app',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Nachwahl', // Usually your GitHub org/user name.
    projectName: 'bte-germany-docs', // Usually your repo name.

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/Nachwahl/bte-germany-docs/blob/main/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/Nachwahl/bte-germany-docs/edit/main/blog/',
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
                title: 'BTE Germany',
                logo: {
                    alt: 'BTE Germany logo',
                    src: 'img/logo.gif',
                },
                items: [
                    {
                        label: "General",
                        position: "left",
                        items: [
                            {
                                label: "Intro",
                                to: "docs/intro",
                            },
                            {
                                label: "Discord Information",
                                to: "docs/discord/intro"
                            }
                        ],
                    },
                    {
                        label: "Building",
                        position: "left",
                        items: [
                            {
                                label: "Builder Infos",
                                to: "docs/builder-infos/intro"
                            },
                            {
                                label: "Building Tips",
                                to: "docs/building-tips/worldedit"
                            }
                        ],
                    },
/*
                    {to: '/blog', label: 'Blog', position: 'left'},
*/
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/Nachwahl/bte-germany-docs',
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
                        items: [
                            {
                                label: 'Intro',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Website',
                                href: 'https://bte-germany.de',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/HJsB5eWVkn',
                            }
                        ],
                    },
                    /*{
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            }
                        ],
                    },*/
                    {
                        title: 'Legal',
                        items: [
                            {
                                label: 'Legal notice',
                                href: 'https://legal.streamp.live/imprint',
                            },
                            {
                                label: 'Privacy policy',
                                href: 'https://legal.streamp.live/privacy',
                            }
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} BTE Germany. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
});
