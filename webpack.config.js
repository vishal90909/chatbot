// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

// module.exports = {
//   entry: './src/index.js', // Entry point for your React app
//   output: {
//     filename: 'bundle.js', // The bundled JS file
//     path: path.resolve(__dirname, 'dist'), // Output directory
//     clean: true, // Clean the output directory before each build
//   },
//   module: {
//     rules: [
//       // JavaScript and JSX files
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: 'babel-loader',
//       },
//       // CSS and Tailwind CSS processing
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader', // Inject CSS into JS
//           'css-loader',   // Resolve CSS imports
//           'postcss-loader', // Process CSS with PostCSS (including Tailwind)
//         ],
//       },
//       // Handling images and fonts inline with base64
//       {
//         test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
//         type: 'asset/inline', // This inlines assets as base64 URIs
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//       favicon: './public/favicon.ico',
//     }),
//     new CopyPlugin({
//       patterns: [
//         { from: 'public', to: '.' }, // Copy all public files to the output directory
//       ],
//     }),
//   ],
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
//   devServer: {
//     contentBase: path.join(__dirname, 'dist'), // Serve content from the dist folder
//     hot: true,
//     port: 3000,
//   },
//   mode: 'production',
// };


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      manifest: './public/manifest.json',

    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          to: '.',
          globOptions: {
            ignore: ['**/index.html'], // Prevent copying index.html
          },
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 3000,
  },
  mode: 'production',
};
