module.exports = {
  overrideDevServerConfig: ({ devServerConfig, cracoConfig, pluginOptions, context: { env, paths, allowedHost, open } }) => {
    if (pluginOptions.preText) {
      console.log(pluginOptions.preText);
    }

    // console.log(JSON.stringify(devServerConfig, null, 4));
    // console.log(JSON.stringify(cracoConfig, null, 4));

    // Always return the config object.
    return {...devServerConfig};
  }
};