define("frontend/templates/components/article-comments", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IQbumDf0", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[19,0,[\"model\",\"article\",\"allowComment\"]]],null,{\"statements\":[[0,\"\\n\\t\"],[6,\"hr\"],[7],[8],[0,\"\\n\\n\\t\"],[6,\"div\"],[9,\"id\",\"disqus_thread\"],[7],[8],[0,\"\\n\\t\"],[6,\"script\"],[7],[0,\"\\n\\n\\t\\tvar disqus_config = function () {\\n\\t\\t\\tthis.page.url = window.location.href;\\n\\t\\t\\tthis.page.identifier = window.location.pathname;\\n\\t\\t};\\n\\t\\t// DON'T EDIT BELOW THIS LINE\\n\\t\\t(function() {\\n\\t\\t\\tvar d = document, s = d.createElement('script');\\n\\t\\t\\t\\ts.src = 'https://8thmind.disqus.com/embed.js';\\n\\t\\t\\t\\ts.setAttribute('data-timestamp', +new Date());\\n\\t\\t\\t\\t(d.head || d.body).appendChild(s);\\n\\t\\t})();\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"noscript\"],[7],[0,\"\\n\\t\\tPlease enable JavaScript to view the \"],[6,\"a\"],[9,\"href\",\"https://disqus.com/?ref_noscript\"],[7],[0,\"comments powered by Disqus.\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},null],[11,1]],\"hasEval\":false}", "meta": { "moduleName": "frontend/templates/components/article-comments.hbs" } });
});