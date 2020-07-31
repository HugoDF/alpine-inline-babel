const babel = require('@babel/core');

const isXAttr = (attr) => {
  return attr.startsWith(':') || attr.startsWith('@') || attr.startsWith('x-');
};

module.exports = function (options) {
  options = options || {};
  const targets = options.targets || {ie: '11'};

  const babelConfig = {
    code: true,
    sourceType: 'script',
    presets: [['@babel/env', {targets}]]
  };

  return (tree) => {
    tree.walk((node) => {
      const {attrs} = node;
      const newAttrs = {...attrs};
      if (attrs) {
        Object.entries(attrs).forEach(([attr, attrValue]) => {
          if (!isXAttr(attr)) return;
          if (attr === 'x-data') {
            // Need to hack to hack around the fact that "{ foo: 'bar' }" looks
            // like a statement and Babel tries to put a `;` after the property.
            const jsString = `a = ${attrValue}`;
            const outputJs = babel.transformSync(jsString, babelConfig).code;
            newAttrs[attr] = outputJs.replace('a = ', '');
          } else {
            newAttrs[attr] = babel.transformSync(attrValue, babelConfig).code;
          }
        });
        node.attrs = newAttrs;
      }

      return node;
    });
  };
};
