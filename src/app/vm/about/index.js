define([
    'vm/about/about.controller',
    'vm/about/aboutNav.controller',
    'vm/about/aboutContent.controller',
    'text!vm/about/topic/topic-index.tpl.html',
    'vm/about/topic/topic1.controller',
    'vm/about/topic/topic2.controller'
], function (aboutTpl, aboutNavTpl, aboutContentTpl, topicIndexTpl, topic1Tpl, topic2Tpl) {
    return {
        aboutTpl: aboutTpl,
        aboutNavTpl: aboutNavTpl,
        aboutContentTpl: aboutContentTpl,
        topicIndexTpl: topicIndexTpl,
        topic1Tpl: topic1Tpl,
        topic2Tpl: topic2Tpl
    };
});
