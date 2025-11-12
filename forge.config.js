const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

module.exports = {
  packagerConfig: {
    name: 'shapepuzzle',
    asar: true,
    appCategoryType: 'public.app-category.games',
    icon: './build/icons/icon',
    ignore: 'node_modules',
  },
  rebuildConfig: {
    force: true
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        iconUrl: './build/icons/icon.ico',
        setupIcon: './build/icons/icon.ico',
        authors: 'Emerson Estrella',
        description: 'Shape Puzzle - Animal Adventure - Help animals come back together one piece at a time'
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: './build/icons/icon.png'
        }
      }
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        background: './build/icons/background.png',
        icon: './build/icons/icon.icns',
        format: 'ULFO',
        // window: {
        //   width: 540,
        //   height: 380
        // }
      }
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
