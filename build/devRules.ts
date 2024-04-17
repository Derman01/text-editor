import webpack from 'webpack';
import { BuildOptions } from './types/config';

const devRules = (options: BuildOptions): webpack.RuleSetRule[] => {
    const tsLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
        exclude: /node_modules/,
    };

    const jsLoader: webpack.RuleSetRule = {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
    };

    const styleLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (fileName: string) =>
                            !!fileName.includes('.module.'),
                        localIdentName: options.isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    const cssLoader = {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    };

    return [tsLoader, jsLoader, cssLoader, styleLoader];
};

export default devRules;
