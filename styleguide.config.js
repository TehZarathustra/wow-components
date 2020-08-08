module.exports = {
  theme: {
    color: {
      base: '#fff',
      light: '#767676',
      lightest: '#ccc',
      link: '#BB86FC',
      linkHover: '#03dac5',
      focus: 'rgba(22, 115, 177, 0.25)',
      border: '#2c2c2c',
      name: '#690',
      type: '#905',
      error: '#c00',
      baseBackground: '#121212',
      codeBackground: '#2c2c2c',
      sidebarBackground: '#2c2c2c',
      ribbonBackground: '#2c2c2c',
      ribbonText: '#fff',
      codeBase: '#fff',
      codeComment: '#6d6d6d',
      codePunctuation: '#A4E400',
      codeProperty: '#A4E400',
      codeDeleted: '#905',
      codeString: '#E7DC6C',
      codeInserted: '#A4E400',
      codeOperator: '#9a6e3a',
      codeKeyword: '#FC1A70',
      codeFunction: '#A4E400',
      codeVariable: '#e90',
    }
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'file-loader'
        }
      ]
    }
  }
};
