module.exports= function (api){
    api.cache.never();

    const presets = [
        '@babel/preset-env',
        '@babel/preset-react'
    ];

    const plugins = [
    ];

    return {
        presets,
        plugins
    };
    
};