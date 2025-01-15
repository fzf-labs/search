export const searchEngines = [
  {
    category: '常规搜索',
    icon: '🌐',
    engines: [
      { id: 'bing', name: 'Bing', icon: '/icons/engines/bing.ico', url: 'https://www.bing.com/search?q={query}' },
      { id: 'google', name: 'Google', icon: '/icons/engines/google.ico', url: 'https://www.google.com/search?q={query}' },
      { id: 'baidu', name: '百度', icon: '/icons/engines/baidu.ico', url: 'https://www.baidu.com/s?wd={query}' },
      { id: 'sogou', name: '搜狗', icon: '/icons/engines/sogou.ico', url: 'https://www.sogou.com/web?query={query}' },
      { id: 'so', name: '360搜索', icon: '/icons/engines/so.ico', url: 'https://www.so.com/s?q={query}' },
      { id: 'duckduckgo', name: 'DuckDuckGo', icon: '/icons/engines/duckduckgo.ico', url: 'https://duckduckgo.com/?q={query}' },
      { id: 'yandex', name: 'Yandex', icon: '/icons/engines/yandex.ico', url: 'https://yandex.com/search/?text={query}' },
      { id: 'yahoo', name: 'Yahoo', icon: '/icons/engines/yahoo.ico', url: 'https://search.yahoo.com/search?p={query}' },
    ],
  },
  {
    category: 'AI搜索',
    icon: '🤖',
    engines: [
      { id: 'newbing', name: 'New Bing', icon: '/icons/engines/newbing.ico', url: 'https://www.bing.com/search?q={query}&showconv=1' },
      { id: 'perplexity', name: 'Perplexity', icon: '/icons/engines/perplexity.ico', url: 'https://www.perplexity.ai/search?q={query}' },
      { id: 'n', name: '纳米搜索', icon: '/icons/engines/n.ico', url: 'https://www.n.cn/search?q={query}' },
      { id: 'searchgpt', name: 'SearchGPT', icon: '/icons/engines/searchgpt.ico', url: 'https://chatgpt.com/?hints=search&q={query}' },
      { id: 'andi', name: 'Andi', icon: '/icons/engines/andisearch.ico', url: 'https://andisearch.com/search?q={query}' },
      { id: 'devv', name: 'Devv', icon: '/icons/engines/devv.ico', url: 'https://devv.ai/search?q={query}' },
      { id: 'thinkany', name: 'ThinkAny', icon: '/icons/engines/thinkany.ico', url: 'https://thinkany.so/search?q={query}' },
      { id: 'metaso', name: '秘塔', icon: '/icons/engines/metaso.ico', url: 'https://metaso.cn/?q={query}' },
      { id: 'kaisouai', name: '开搜AI', icon: '/icons/engines/kaisouai.ico', url: 'https://kaisouai.com/search?q={query}' },
      { id: 'webpilot', name: 'WebPilot', icon: '/icons/engines/webpilot.ico', url: 'https://www.webpilot.ai/search?q={query}' },
      { id: 'consensus', name: 'Consensus', icon: '/icons/engines/consensus.ico', url: 'https://consensus.app/search?q={query}' },
      { id: 'you', name: 'YOU', icon: '/icons/engines/you.ico', url: 'https://you.com/search?q={query}' },
      { id: 'iask', name: 'iAsk.AI', icon: '/icons/engines/iask.ai.ico', url: 'https://iask.ai/search?q={query}' },
      { id: 'phind', name: 'phind', icon: '/icons/engines/phind.ico', url: 'https://www.phind.com/search?q={query}' },
      { id: 'csdn', name: 'C知道', icon: '/icons/engines/so.csdn.ico', url: 'https://so.csdn.net/search?q={query}' },
      { id: 'semanticscholar', name: 'Semantic Scholar', icon: '/icons/engines/semanticscholar.ico', url: 'https://www.semanticscholar.org/search?q={query}' },
      { id: 'genspark', name: 'Genspark', icon: '/icons/engines/genspark.ico', url: 'https://www.genspark.ai/search?q={query}' },
      { id: 'zhidazhihu', name: '知乎直答', icon: '/icons/engines/zhida.zhihu.ico', url: 'https://zhida.zhihu.com/search?q={query}' },
      { id: 'felo', name: 'Felo Search', icon: '/icons/engines/felo.ico', url: 'https://felo.ai/search?q={query}' },
      { id: 'hellomiku', name: 'Miku', icon: '/icons/engines/hellomiku.ico', url: 'https://hellomiku.com/search?q={query}' },
      { id: 'kfind', name: 'kFind', icon: '/icons/engines/kfind.kmind.ico', url: 'https://kfind.kmind.com/search?q={query}' },
      { id: 'memfree', name: 'MenFree', icon: '/icons/engines/memfree.ico', url: 'https://www.memfree.me/search?q={query}' },
      { id: 'monica', name: 'Monica', icon: '/icons/engines/monica.ico', url: 'https://s.monica.im/search?q={query}' },
      { id: 'mergeek', name: 'MERGEEK', icon: '/icons/engines/mergeek.ico', url: 'https://mergeek.com/search?q={query}' },
      { id: 'xanswer', name: 'Xanswer', icon: '/icons/engines/xanswer.ico', url: 'https://www.xanswer.com/search?q={query}' },
      { id: 'exa', name: 'exa', icon: '/icons/engines/exa.ico', url: 'https://exa.ai/search?q={query}' },
      { id: 'globeexplorer', name: 'Globe Explorer', icon: '/icons/engines/globe.ico', url: 'https://explorer.globe.engineer/search?q={query}' },
      { id: 'yep', name: 'Yep AI搜索', icon: '/icons/engines/yep.ico', url: 'https://yep.com/web?q={query}' },
      { id: 'sou100', name: '知料觅得', icon: '/icons/engines/sou100.ico', url: 'https://www.sou100.com/search?q={query}' },
      { id: 'hika', name: 'Hika AI', icon: '/icons/engines/hika.ico', url: 'https://hika.fyi/search?q={query}' },
      { id: 'reddo', name: 'Reddo', icon: '/icons/engines/reddo.ico', url: 'https://www.reddo.cloud/search?q={query}' },
      { id: 'openread', name: 'OpenRead', icon: '/icons/engines/openread.ico', url: 'https://www.openread.academy/search?q={query}' },
      { id: 'connectedpapers', name: 'Connected Papers', icon: '/icons/engines/connectedpapers.ico', url: 'https://www.connectedpapers.com/search?q={query}' }
    ],
  },
  {
    category: '社交搜索',
    icon: '👥',
    engines: [
      { id: 'xiaohongshu', name: '小红书', icon: '/icons/engines/xiaohongshu.ico', url: 'https://www.xiaohongshu.com/search_result?keyword={query}' },
      { id: 'douyin', name: '抖音', icon: '/icons/engines/douyin.ico', url: 'https://www.douyin.com/search/{query}' },
      { id: 'twitter', name: 'X', icon: '/icons/engines/x.ico', url: 'https://twitter.com/search?q={query}' },
      { id: 'youtube', name: 'YouTube', icon: '/icons/engines/youtube.ico', url: 'https://www.youtube.com/results?search_query={query}' },
      { id: 'v2ex', name: 'V2EX', icon: '/icons/engines/sov2ex.ico', url: 'https://www.sov2ex.com/?q={query}' },
      { id: 'github', name: 'Github', icon: '/icons/engines/github.ico', url: 'https://github.com/search?q={query}' },
      { id: 'producthunt', name: 'ProductHunt', icon: '/icons/engines/producthunt.ico', url: 'https://www.producthunt.com/search?q={query}' },
      { id: 'jike', name: '即刻', icon: '/icons/engines/okjike.ico', url: 'https://web.okjike.com/search?keyword={query}' },
      { id: 'facebook', name: 'FaceBook', icon: '/icons/engines/facebook.ico', url: 'https://www.facebook.com/search/top/?q={query}' },
      { id: 'instagram', name: 'Instagram', icon: '/icons/engines/instagram.ico', url: 'https://www.instagram.com/explore/tags/{query}/' },
      { id: 'bilibili', name: 'bilibili', icon: '/icons/engines/bilibili.ico', url: 'https://search.bilibili.com/all?keyword={query}' },
      { id: 'zhihu', name: '知乎', icon: '/icons/engines/zhihu.ico', url: 'https://www.zhihu.com/search?type=content&q={query}' },
      { id: 'weixin', name: '微信公众号', icon: '/icons/engines/sogou.ico', url: 'https://weixin.sogou.com/weixin?type=2&query={query}' },
      { id: 'weibo', name: '微博', icon: '/icons/engines/weibo.ico', url: 'https://s.weibo.com/weibo?q={query}' },
      { id: 'toutiao', name: '今日头条', icon: '/icons/engines/toutiao.ico', url: 'https://so.toutiao.com/search?dvpf=pc&source=input&keyword={query}' },
    ],
  },
  {
    category: '网盘搜索',
    icon: '💾',
    engines: [
      { id: 'hunhepan', name: '混合盘', icon: '/icons/engines/hunhepan.ico', url: 'https://hunhepan.com/search?keyword={query}' },
      { id: 'miaosou', name: '秒搜', icon: '/icons/engines/miaosou.ico', url: 'https://miaosou.fun/search?q={query}' },
      { id: 'panso', name: '盘搜', icon: '/icons/engines/panso.ico', url: 'https://panso.pro/search?q={query}' },
      { id: 'aliso', name: '阿里搜', icon: '/icons/engines/aliso.ico', url: 'https://aliso.cc/search?q={query}' },
      { id: 'yunso', name: '小云搜索', icon: '/icons/engines/yunso.ico', url: 'https://www.yunso.net/index/user/s?wd={query}' },
      { id: 'quark', name: '夸克搜', icon: '/icons/engines/quark.ico', url: 'https://www.quark.so/search?q={query}' },
      { id: 'dalipan', name: '大力盘', icon: '/icons/engines/dalipan.ico', url: 'https://www.dalipan.com/search?keyword={query}' },
      { id: 'pansoso', name: '盘搜搜', icon: '/icons/engines/pansoso.ico', url: 'https://pansoso.com/search?q={query}' },
      { id: 'lingfengyun', name: '凌风云', icon: '/icons/engines/lingfengyun.ico', url: 'https://www.lingfengyun.com/search?wd={query}' },
      { id: 'swangpan', name: '搜网盘', icon: '/icons/engines/swangpan.ico', url: 'https://www.swangpan.com/search?q={query}' },
      { id: 'ssgo', name: 'SearchSearchGo', icon: '/icons/engines/ssgo.ico', url: 'https://ssgo.app/search?q={query}' },
      { id: 'niceso', name: '千帆搜索', icon: '/icons/engines/niceso.ico', url: 'https://www.niceso.net/search?q={query}' },
      { id: 'codelicence', name: '云盘4K', icon: '/icons/engines/codelicence.ico', url: 'https://www.codelicence.cn/search?q={query}' },
      { id: 'xuebapan', name: '学霸盘', icon: '/icons/engines/xuebapan.ico', url: 'https://www.xuebapan.com/search?q={query}' },
      { id: 'pikasoo', name: '皮卡搜索', icon: '/icons/engines/pikasoo.ico', url: 'https://www.pikasoo.top/search?q={query}' },
      { id: 'quarkfinder', name: '夸克探宝', icon: '/icons/engines/quarkfinder.ico', url: 'https://www.quarkfinder.top/search?q={query}' },
      { id: 'xiaobaipan', name: '小白盘', icon: '/icons/engines/xiaobaipan.ico', url: 'https://www.xiaobaipan.com/search?q={query}' },
      { id: 'iizhi', name: '毕方铺', icon: '/icons/engines/iizhi.ico', url: 'https://www.iizhi.cn/search?q={query}' },
      { id: 'upyunso', name: 'UP云搜', icon: '/icons/engines/upyunso.ico', url: 'https://www.upyunso.com/search?q={query}' },
      { id: 'fastsoso', name: 'fastsoso', icon: '/icons/engines/fastsoso.ico', url: 'https://www.fastsoso.cc/search?q={query}' },
      { id: 'pan58', name: '盘58', icon: '/icons/engines/pan58.ico', url: 'https://www.pan58.com/search?q={query}' },
      { id: 'dashengpan', name: '大圣盘', icon: '/icons/engines/dashengpan.ico', url: 'https://www.dashengpan.com/search?q={query}' },
      { id: 'esoua', name: '爱搜', icon: '/icons/engines/esoua.ico', url: 'https://www.esoua.com/search?q={query}' },
      { id: 'yiso', name: '易搜', icon: '/icons/engines/yiso.ico', url: 'https://cdn.yiso.fun/search?q={query}' },
      { id: 'lzpanx', name: '懒盘搜索', icon: '/icons/engines/lzpanx.ico', url: 'https://www.lzpanx.com/search?q={query}' },
      { id: 'aipanso', name: '爱盘搜', icon: '/icons/engines/aipanso.ico', url: 'https://aipanso.com/search?q={query}' },
      { id: 'pansearch', name: 'PanSearch', icon: '/icons/engines/pansearch.ico', url: 'https://www.pansearch.me/search?q={query}' },
      { id: 'cuppaso', name: '咔帕搜索', icon: '/icons/engines/cuppaso.ico', url: 'https://cuppaso.com/search?q={query}' },
      { id: 'xxhh360', name: '云盘搜索大师', icon: '/icons/engines/xxhh360.ico', url: 'https://www.xxhh360.com/search?q={query}' },
      { id: 'sousuo8', name: '搜索吧', icon: '/icons/engines/sousuo8.ico', url: 'http://www.sousuo8.com/search?q={query}' },
      { id: 'qileso', name: '奇乐搜', icon: '/icons/engines/qileso.ico', url: 'https://www.qileso.com/search?q={query}' }
    ],
  },{
    category: '影视搜索',
    icon: '🎬',
    engines: [
      { id: 'youku', name: '优酷', icon: '/icons/engines/youku.ico', url: 'https://so.youku.com/search_video/q_{query}' },
      { id: 'iqiyi', name: '爱奇艺', icon: '/icons/engines/iqiyi.ico', url: 'https://so.iqiyi.com/so/q_{query}' },
      { id: 'qq', name: '腾讯视频', icon: '/icons/engines/v.qq.ico', url: 'https://v.qq.com/x/search?q={query}' },
      { id: 'mgtv', name: '芒果TV', icon: '/icons/engines/mgtv.ico', url: 'https://so.mgtv.com/so?k={query}' },
      { id: 'kpkuang', name: '看片狂人', icon: '/icons/engines/kpkuang.ico', url: 'https://www.kpkuang.org/vodsearch/-------------.html?wd={query}' },
      { id: 'pkavi', name: '片库', icon: '/icons/engines/pkavi.ico', url: 'https://www.pkavi.com/vs/-------------.html?wd={query}' },
      { id: 'duanjuso', name: '短剧搜', icon: '/icons/engines/duanjuso.ico', url: 'https://www.duanjuso.com/search?q={query}' },
      { id: 'jpyy', name: '金牌影院', icon: '/icons/engines/6umkq9b.ico', url: 'https://www.6umkq9b.com/search?q={query}' },
      { id: 'juyeye', name: '剧爷爷', icon: '/icons/engines/juyeye.ico', url: 'https://www.juyeye.cc/vodsearch/-------------.html?wd={query}' },
      { id: 'gjsx', name: '追剧狗', icon: '/icons/engines/gjsx.ico', url: 'https://gjsx.vip/s?query={query}' },
      { id: 'ty1010', name: '统一影视', icon: '/icons/engines/ty1010.ico', url: 'https://ty1010.com/index.php/vod/search.html?wd={query}' },
      { id: 'soupian', name: '搜片', icon: '/icons/engines/soupian.ico', url: 'https://soupian.pro/movie/{query}' },
      { id: '4kvm', name: '4k影视', icon: '/icons/engines/4kvm.ico', url: 'https://www.4kvm.tv/xssearch?s={query}' },
      { id: 'mxvod', name: 'MXVOD', icon: '/icons/engines/mxvod.ico', url: 'https://mxvod.com/vodsearch/-------------.html?wd={query}' },
      { id: 'nnyy', name: '努努影院', icon: '/icons/engines/nnyy.ico', url: 'https://nnyy.in/so?q={query}' },
      { id: 'jxsinbo', name: '极速电影网', icon: '/icons/engines/jxsinbo.ico', url: 'https://www.jxsinbo.com/vodsearch/-------------.html?wd={query}' },
      { id: 'planorg', name: '影剧搜', icon: '/icons/engines/planorg.ico', url: 'https://v.planorg.cn/s/{query}.html' },
      { id: 'cunbar', name: '存吧', icon: '/icons/engines/cun.ico', url: 'https://www.cun.bar/search?q={query}' },
      { id: '4khdr', name: '4KHDR世界', icon: '/icons/engines/4khdr.ico', url: 'https://www.4khdr.cn/search.php?mod=forum&searchid=17601&orderby=lastpost&ascdesc=desc&searchsubmit=yes&kw={query}' },
      { id: 'tianail', name: '搜片', icon: '/icons/engines/tianail.ico', url: 'https://so.tianail.cn/s/{query}.html' }
    ],
  },
]

