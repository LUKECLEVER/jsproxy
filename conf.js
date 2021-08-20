jsproxy_config({
  // 当前配置的版本（记录在日志中，用于排查问题）
  // 每次修改配置，该值需要增加，否则不会生效。
  // 默认每隔 5 分钟自动下载配置，若想立即验证，可通过隐私模式访问。
  ver: '110',

  // 通过 CDN 加速常用网站的静态资源（实验中）
  static_boost: {
    enable: true,
    ver: 62
  },

  // 节点配置
  node_map: {
    'gua0': {
      label: '中国-瓜瓜专属高速节点',
      lines: {
        [location.host]: 1,
      }
    },
    'gua1': {
      label: '中国-香港节点',
      lines: {
        [location.host]: 1,
      }
    },
    'gua2': {
      label: '中国-上海节点',
      lines: {
        [location.host]: 1,
      }
    },
    'gua3': {
      label: '中国-贵州节点',
      lines: {
        [location.host]: 1,
      }
    },
    
    'gua4': {
      label: '美国节点',
      lines: {
        [location.host]: 1,
      }
    },
    'gua5': {
      label: '新加坡节点',
      lines: {
        [location.host]: 1,
      }
    },
    'gua6': {
      label: '日本节点',
      lines: {
        [location.host]: 1,
      }
    },
    'gua7': {
      label: '荷兰节点',
      lines: {
        [location.host]: 1,
      }
    },
    'gua8': {
      label: '英国节点',
      lines: {
        [location.host]: 1,
      }
    },
    'gua9': {
      label: '德国节点',
      lines: {
        [location.host]: 1,
      }
    },
    'gua10': {
      label: '法国节点',
      lines: {
        [location.host]: 1,
      }
    },
    // 该节点用于加载大体积的静态资源
    'cfworker': {
      label: '',
      hidden: true,
      lines: {
        // 收费版（高权重）
        //'node-cfworker-2.etherdream.com': 4,

        // 免费版（低权重，分摊一些成本）
        // 每个账号每天 10 万次免费请求，但有频率限制
        //'b.007.workers.dev': 1,
        //'b.hehe.workers.dev': 1,
        //'b.lulu.workers.dev': 1,
        //'b.jsproxy.workers.dev': 1,
        'proxy.luyao.workers.dev': 1,
        'proxy.lukeclever.workers.dev': 1,
      }
    }
  },

  /**
   * 默认节点
   */
  node_default: 'mysite',
  // node_default: /jsproxy-demo\.\w+$/.test(location.host) ? 'demo-hk' : 'mysite',

  /**
   * 加速节点
   */
  node_acc: 'cfworker',

  /**
   * 静态资源 CDN 地址
   * 用于加速 `assets` 目录中的资源访问
   */
  // assets_cdn: 'https://cdn.jsdelivr.net/gh/zjcqoo/zjcqoo.github.io@master/assets/',

  // 本地测试时打开，否则访问的是线上的
  assets_cdn: 'assets/',

  // 首页路径
  index_path: 'index_v3.html',

  // 支持 CORS 的站点列表（实验中...）
  direct_host_list: 'cors_v1.txt',

  /**
   * 自定义注入页面的 HTML
   */
  inject_html: '<link rel="shortcut icon" href="https://source.luyaoguagua.top/ico/favicon.ico">',
  
  /**
   * URL 自定义处理（设计中）
   */
  url_handler: {
    'https://www.baidu.com/img/baidu_resultlogo@2.png': {
      replace: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    },
    'https://www.pornhub.com/': {
      redir: 'https://php.net/'
    },
    'http://haha.com/': {
      content: 'Hello World'
    },
  }
})
