const path = require('path');

module.exports = {
  entry: './src/index.js', // Ponto de entrada do seu aplicativo
  output: {
    path: path.resolve(__dirname, 'dist'), // Pasta de saída para os arquivos compilados
    filename: 'bundle.js', // Nome do arquivo de saída
    publicPath: '/' // Caminho público usado pelo servidor web para servir os arquivos
  },
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    [
      "module-resolver",
      {
        "alias": {
          "@/": "./src"
        }
      }
    ]
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // Usar babel para transpilar arquivos JS/JSX
        }
      }
    ]
  }
};
