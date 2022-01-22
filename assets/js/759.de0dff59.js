(window.webpackJsonp=window.webpackJsonp||[]).push([[759],{1213:function(s,t,a){"use strict";a.r(t);var r=a(56),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"doris-docker-快速搭建开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-docker-快速搭建开发环境"}},[s._v("#")]),s._v(" Doris Docker 快速搭建开发环境")]),s._v(" "),a("h2",{attrs:{id:"相关详细文档导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关详细文档导航"}},[s._v("#")]),s._v(" 相关详细文档导航")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://doris.incubator.apache.org/master/zh-CN/installing/compilation.html#%E4%BD%BF%E7%94%A8-docker-%E5%BC%80%E5%8F%91%E9%95%9C%E5%83%8F%E7%BC%96%E8%AF%91-%E6%8E%A8%E8%8D%90",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用 Docker 开发镜像编译"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://doris.incubator.apache.org/master/zh-CN/installing/install-deploy.html#%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noopener noreferrer"}},[s._v("部署"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://doris.incubator.apache.org/master/zh-CN/developer-guide/be-vscode-dev.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("VSCode Be 开发调试"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),a("ul",[a("li",[s._v("安装 Docker")]),s._v(" "),a("li",[s._v("VSCode\n"),a("ul",[a("li",[s._v("Remote 插件")])])])]),s._v(" "),a("h2",{attrs:{id:"构建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像"}},[s._v("#")]),s._v(" 构建镜像")]),s._v(" "),a("p",[s._v("创建 dockerfile")]),s._v(" "),a("p",[s._v("VSCode 中使用 Ctrl-d 替换掉所有的")]),s._v(" "),a("ul",[a("li",[s._v("<!!! your user !!!>")]),s._v(" "),a("li",[s._v("<!!! your user password !!!>")]),s._v(" "),a("li",[s._v("<!!! root password !!!>")]),s._v(" "),a("li",[s._v("<!!! your git email !!!>")]),s._v(" "),a("li",[s._v("<!!! your git username !!!>")])]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" apache/incubator-doris:build-env-latest")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" root")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /root")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<!!! root password !!!>'")]),s._v(" | passwd root --stdin")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yum install -y vim net-tools man wget git mysql lsof bash-completion "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && cp /var/local/thirdparty/installed/bin/thrift /usr/bin")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更安全的使用，创建用户而不是使用 root")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yum install -y sudo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && useradd -ms /bin/bash <!!! your user !!!> && echo <!!! your user password !!!> | passwd <!!! your user !!!> --stdin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && usermod -a -G wheel <!!! your user !!!>")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" <!!! your user !!!>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /home/<!!! your user !!!>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" git config --global color.ui true "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && git config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<!!! your git email !!!>"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && git config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<!!! your git username !!!>"')])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按需安装 zsh and oh my zsh, 更易于使用，不需要的移除")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" root")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yum install -y zsh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && chsh -s /bin/zsh <!!! your user !!!>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" <!!! your user !!!>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && git clone https://github.com/zsh-users/zsh-autosuggestions "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZSH_CUSTOM:-~/.oh-my-zsh/custom}")]),s._v("/plugins/zsh-autosuggestions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && git clone https://github.com/zsh-users/zsh-syntax-highlighting.git "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZSH_CUSTOM:-~/.oh-my-zsh/custom}")]),s._v("/plugins/zsh-syntax-highlighting")]),s._v("\n")])])]),a("p",[s._v("运行构建命令")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t doris "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])]),a("p",[s._v("运行镜像")]),s._v(" "),a("p",[s._v("此处按需注意 "),a("a",{attrs:{href:"https://doris.apache.org/master/zh-CN/installing/compilation.html#%E4%BD%BF%E7%94%A8-docker-%E5%BC%80%E5%8F%91%E9%95%9C%E5%83%8F%E7%BC%96%E8%AF%91-%E6%8E%A8%E8%8D%90",target:"_blank",rel:"noopener noreferrer"}},[s._v("挂载的问题"),a("OutboundLink")],1)]),s._v(" "),a("blockquote",[a("p",[s._v("见链接中：建议以挂载本地 Doris 源码目录的方式运行镜像 .....")])]),s._v(" "),a("p",[s._v("由于如果是使用 windows 开发，挂载会存在跨文件系统访问的问题，请自行斟酌设置")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it doris:latest /bin/bash\n")])])]),a("p",[s._v("如果选择安装了 zsh\n运行 容器后，在 ~/.zshrc 替换 plugins 为")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("plugins=(git zsh-autosuggestions zsh-syntax-highlighting)\n")])])]),a("p",[s._v("创建目录并下载 doris")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" code\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/apache/incubator-doris.git\n")])])]),a("h2",{attrs:{id:"编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[s._v("#")]),s._v(" 编译")]),s._v(" "),a("p",[s._v("注意:")]),s._v(" "),a("p",[s._v("第一次编译的时候要使用如下命令")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" build.sh --clean --be --fe --ui\n")])])]),a("p",[s._v("这是因为 build-env-for-0.15.0 版本镜像升级了 thrift(0.9 -> 0.13)，需要通过 --clean 命令强制使用新版本的 thrift 生成代码文件，否则会出现不兼容的代码。：")]),s._v(" "),a("p",[s._v("编译 Doris")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" build.sh\n")])])]),a("h2",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),a("p",[s._v("手动创建 "),a("code",[s._v("meta_dir")]),s._v(" 元数据存放位置, 默认值为 "),a("code",[s._v("${DORIS_HOME}/doris-meta")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" meta_dir\n")])])]),a("p",[s._v("启动FE")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" output/fe\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" bin/start_fe.sh --daemon\n")])])]),a("p",[s._v("启动BE")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" output/be\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" bin/start_be.sh --daemon\n")])])]),a("p",[s._v("mysql-client 连接")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysql -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -P "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9030")]),s._v(" -u root\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);