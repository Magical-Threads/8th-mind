export default Ember.HTMLBars.template({"id":"bNYD8WrG","block":"{\"symbols\":[\"pagination\",\"index\",\"article\",\"index\"],\"statements\":[[6,\"section\"],[9,\"class\",\"page-article-categories\"],[7],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"page-articles-container\"],[7],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"class\",\"page-articles-wrap\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"model\",\"articles\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"page-articles-row\"],[7],[0,\"\\n\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"post\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"post-thumb\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"article\",[19,3,[\"articleID\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"figure\"],[10,\"style\",[26,[\"background-image: url(\",[18,\"serverURL\"],\"storage/articles/\",[19,3,[\"articleImage\"]],\")\"]]],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"post-text\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"article\",[19,3,[\"articleID\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h3\"],[7],[1,[19,3,[\"articleTitle\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[7],[1,[25,\"short-desc\",[[19,3,[\"articleDescription\"]]],[[\"len\"],[\"500\"]]],true],[0,\" \"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[8],[0,\"\\n\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\"]],\"parameters\":[3,4]},null],[0,\"\\t\\t\"],[8],[0,\"\\n\\t\\t\\n\\n\"],[4,\"each\",[[19,0,[\"model\",\"pagination\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\"],[6,\"ul\"],[9,\"class\",\"pagination\"],[7],[0,\"\\n\"],[4,\"if\",[[25,\"gt\",[[19,1,[\"page\"]],1],null]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\"],[6,\"button\"],[9,\"class\",\"button button-teal\"],[3,\"action\",[[19,0,[]],\"prevPage\"]],[7],[0,\"Prev\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[25,\"lt\",[[19,1,[\"page\"]],[19,1,[\"total_pages\"]]],null]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\"],[6,\"button\"],[9,\"class\",\"button button-teal\"],[3,\"action\",[[19,0,[]],\"nextPage\"]],[7],[0,\"Next\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\"],[8],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"\\t\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}","meta":{"moduleName":"frontend/templates/create.hbs"}});