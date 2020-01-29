const withFonts = require('next-fonts');

module.exports = withFonts(
    {
        exportTrailingSlash: true,
        webpack: (config, options) => {
            return config
        },
    }
)
