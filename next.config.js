const withFonts = require('next-fonts');

module.exports = withFonts(
    {
        exportTrailingSlash: false,
        webpack: (config, options) => {
            return config
        },
    }
)
