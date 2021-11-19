const path = require('path');

module.exports = {
  webpack: {
    // 상대주소 안쓰기
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@redux': path.resolve(__dirname, 'src/redux'),
    },
  },
};
