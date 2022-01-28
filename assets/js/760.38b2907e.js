(window.webpackJsonp=window.webpackJsonp||[]).push([[760],{1212:function(e,a,t){"use strict";t.r(a);var s=t(56),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"apache-doris-发布流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache-doris-发布流程"}},[e._v("#")]),e._v(" Apache Doris 发布流程")]),e._v(" "),t("p",[e._v("Apache 的发布必须至少是 IPMC 成员，拥有 apache 邮箱的committer，这个角色叫做 release manager。")]),e._v(" "),t("p",[e._v("发布的大致流程如下：")]),e._v(" "),t("ol",[t("li",[e._v("环境准备")]),e._v(" "),t("li",[e._v("发布准备\n"),t("ol",[t("li",[e._v("社区发起 DISCUSS 并与社区交流具体发布计划")]),e._v(" "),t("li",[e._v("创建分支用于发布")]),e._v(" "),t("li",[e._v("清理 issue")]),e._v(" "),t("li",[e._v("将必要的 Patch 合并到发布的分支")])])]),e._v(" "),t("li",[e._v("验证分支\n"),t("ol",[t("li",[e._v("QA 稳定性测试")]),e._v(" "),t("li",[e._v("验证编译镜像正确性")]),e._v(" "),t("li",[e._v("准备 Release Nodes")])])]),e._v(" "),t("li",[e._v("社区发布投票流程\n"),t("ol",[t("li",[e._v("将 tag 打包，签名并上传到"),t("a",{attrs:{href:"https://dist.apache.org/repos/dist/dev/incubator/doris",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Dev svn 仓库"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("在 "),t("a",{attrs:{href:"dev@doris.apache.org"}},[e._v("Doris 社区")]),e._v("发起投票")]),e._v(" "),t("li",[e._v("投票通过后，在Doris社区发 Result 邮件")]),e._v(" "),t("li",[e._v("在 "),t("a",{attrs:{href:"general@incubator.apache.org"}},[e._v("Incubator 社区")]),e._v(" 发起新一轮投票")]),e._v(" "),t("li",[e._v("发 Result 邮件到 general@incubator.apache.org")])])]),e._v(" "),t("li",[e._v("完成工作\n"),t("ol",[t("li",[e._v("上传签名的软件包到 "),t("a",{attrs:{href:"https://dist.apache.org/repos/dist/release/incubator/doris",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache release repo"),t("OutboundLink")],1),e._v("，并生成相关链接")]),e._v(" "),t("li",[e._v("在 Doris 官网和 github 发布下载链接，并且清理 svn 上的旧版本包")]),e._v(" "),t("li",[e._v("发送 Announce 邮件到 general@incubator.apache.org")])])])]),e._v(" "),t("h2",{attrs:{id:"准备环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备环境"}},[e._v("#")]),e._v(" 准备环境")]),e._v(" "),t("p",[e._v("如果这是你第一次发布，那么你需要在你的环境中准备如下工具")]),e._v(" "),t("ol",[t("li",[e._v("release signing https://www.apache.org/dev/release-signing.html")]),e._v(" "),t("li",[e._v("gpg https://www.apache.org/dev/openpgp.html")]),e._v(" "),t("li",[e._v("svn https://www.apache.org/dev/openpgp.html")])]),e._v(" "),t("h3",{attrs:{id:"准备gpg-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备gpg-key"}},[e._v("#")]),e._v(" 准备gpg key")]),e._v(" "),t("p",[e._v("Release manager 在发布前需要先生成自己的签名公钥，并上传到公钥服务器，之后就可以用这个公钥对准备发布的软件包进行签名。\n如果在"),t("a",{attrs:{href:"https://dist.apache.org/repos/dist/dev/incubator/doris/KEYS",target:"_blank",rel:"noopener noreferrer"}},[e._v("KEY"),t("OutboundLink")],1),e._v("里已经存在了你的KEY，那么你可以跳过这个步骤了。")]),e._v(" "),t("h4",{attrs:{id:"签名软件-gnupg-的安装配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#签名软件-gnupg-的安装配置"}},[e._v("#")]),e._v(" 签名软件 GnuPG 的安装配置")]),e._v(" "),t("h5",{attrs:{id:"gnupg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gnupg"}},[e._v("#")]),e._v(" GnuPG")]),e._v(" "),t("p",[e._v("1991年，程序员 Phil Zimmermann 为了避开政府监视，开发了加密软件PGP。这个软件非常好用，迅速流传开来，成了许多程序员的必备工具。但是，它是商业软件，不能自由使用。所以，自由软件基金会决定，开发一个PGP的替代品，取名为GnuPG。这就是GPG的由来。")]),e._v(" "),t("h5",{attrs:{id:"安装配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装配置"}},[e._v("#")]),e._v(" 安装配置")]),e._v(" "),t("p",[e._v("CentOS 安装命令：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("yum install gnupg\n")])])]),t("p",[e._v("安装完成后，默认配置文件 gpg.conf 会放在 home 目录下。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("~/.gnupg/gpg.conf\n")])])]),t("p",[e._v("如果不存在这个目录或文件，可以直接创建一个空文件。")]),e._v(" "),t("p",[e._v("Apache 签名推荐 SHA512， 可以通过配置 gpg 完成。\n编辑gpg.conf, 增加下面的三行：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("personal-digest-preferences SHA512\ncert-digest-algo SHA512\ndefault-preference-list SHA512 SHA384 SHA256 SHA224 AES256 AES192 AES CAST5 ZLIB BZIP2 ZIP Uncompressed\n")])])]),t("h4",{attrs:{id:"生成新的签名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成新的签名"}},[e._v("#")]),e._v(" 生成新的签名")]),e._v(" "),t("h5",{attrs:{id:"准备签名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备签名"}},[e._v("#")]),e._v(" 准备签名")]),e._v(" "),t("p",[e._v("推荐的生成新签名的设置：")]),e._v(" "),t("p",[e._v("这里必须通过 SecureCRT 等终端直接登录用户账户，不能通过 su - user 或者 ssh 转，否则密码输入 box 会显示不出来而报错。")]),e._v(" "),t("p",[e._v("先看下 gpg 的 version 以及是否支持 SHA512.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ gpg --version\ngpg (GnuPG) 2.0.22\nlibgcrypt 1.5.3\nCopyright (C) 2013 Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nHome: ~/.gnupg\nSupported algorithms:\nPubkey: RSA, ?, ?, ELG, DSA\nCipher: IDEA, 3DES, CAST5, BLOWFISH, AES, AES192, AES256, TWOFISH,\n        CAMELLIA128, CAMELLIA192, CAMELLIA256\nHash: MD5, SHA1, RIPEMD160, SHA256, SHA384, SHA512, SHA224\nCompression: Uncompressed, ZIP, ZLIB, BZIP2\n")])])]),t("h5",{attrs:{id:"生成新的签名-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成新的签名-2"}},[e._v("#")]),e._v(" 生成新的签名")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ gpg --gen-key\ngpg (GnuPG) 2.0.22; Copyright (C) 2013 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0)\nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: xxx\nName must be at least 5 characters long\nReal name: xxx-yyy\nEmail address: xxx@apache.org\nComment: xxx's key\nYou selected this USER-ID:\n    \"xxx-yyy (xxx's key) <xxx@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? o\n")])])]),t("p",[e._v("其中 Real name 需保持和 id.apache.org 中显示的 id 一致。\nEmail address 为 apache 的邮箱。")]),e._v(" "),t("p",[e._v("输入 passphrase, 一共要输入两遍，超过8个字符即可。")]),e._v(" "),t("p",[t("strong",[e._v("这里的秘钥一定要记住，后面签名的时候会用到")])]),e._v(" "),t("h5",{attrs:{id:"查看和输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看和输出"}},[e._v("#")]),e._v(" 查看和输出")]),e._v(" "),t("p",[e._v('第一行显示公钥文件名（pubring.gpg），第二行显示公钥特征（4096位，Hash字符串和生成时间），第三行显示"用户ID"，注释，邮件，第四行显示私钥特征。')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ gpg --list-keys\n/home/lide/.gnupg/pubring.gpg\n-----------------------------\npub   4096R/33DBF2E0 2018-12-06\nuid                  xxx-yyy  (xxx's key) <xxx@apache.org>\nsub   4096R/0E8182E6 2018-12-06\n")])])]),t("p",[e._v("其中 xxx-yyy 就是用户ID。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gpg --armor --output public-key.txt --export [用户ID]\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ gpg --armor --output public-key.txt --export xxx-yyy\n文件‘public-key.txt’已存在。 是否覆盖？(y/N)y\n$ cat public-key.txt\n-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: GnuPG v2.0.22 (GNU/Linux)\n\nmQINBFwJEQ0BEACwqLluHfjBqD/RWZ4uoYxNYHlIzZvbvxAlwS2mn53BirLIU/G3\n9opMWNplvmK+3+gNlRlFpiZ7EvHsF/YJOAP59HmI2Z...\n")])])]),t("h4",{attrs:{id:"上传签名公钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传签名公钥"}},[e._v("#")]),e._v(" 上传签名公钥")]),e._v(" "),t("p",[e._v("公钥服务器是网络上专门储存用户公钥的服务器。send-keys 参数可以将公钥上传到服务器。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gpg --send-keys xxxx --keyserver https://keyserver.ubuntu.com/\n\n")])])]),t("p",[e._v("其中 xxxx 为上一步 "),t("code",[e._v("--list-keys")]),e._v(" 结果中 pub 后面的字符串，如上为：33DBF2E0")]),e._v(" "),t("p",[e._v("也可以通过"),t("a",{attrs:{href:"https://keyserver.ubuntu.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("网站"),t("OutboundLink")],1),e._v("上传上述 public-key.txt 的内容：")]),e._v(" "),t("p",[e._v("上传成功之后，可以通过查询这个"),t("a",{attrs:{href:"https://keyserver.ubuntu.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("网站"),t("OutboundLink")],1),e._v("，输入 0x33DBF2E0 查询。（注意需要以 0x 开头）")]),e._v(" "),t("p",[e._v("该网站查询有延迟，可能需要等1个小时。")]),e._v(" "),t("h4",{attrs:{id:"生成-fingerprint-并上传到-apache-用户信息中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成-fingerprint-并上传到-apache-用户信息中"}},[e._v("#")]),e._v(" 生成 fingerprint 并上传到 apache 用户信息中")]),e._v(" "),t("p",[e._v("由于公钥服务器没有检查机制，任何人都可以用你的名义上传公钥，所以没有办法保证服务器上的公钥的可靠性。通常，你可以在网站上公布一个公钥指纹，让其他人核对下载到的公钥是否为真。")]),e._v(" "),t("p",[e._v("fingerprint参数生成公钥指纹：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gpg --fingerprint [用户ID]\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ gpg --fingerprint xxx-yyy\npub   4096R/33DBF2E0 2018-12-06\n      Key fingerprint = 07AA E690 B01D 1A4B 469B  0BEF 5E29 CE39 33DB F2E0\nuid                  xxx-yyy (xxx's key) <xxx@apache.org>\nsub   4096R/0E8182E6 2018-12-06\n")])])]),t("p",[e._v("将上面的 fingerprint （即 07AA E690 B01D 1A4B 469B  0BEF 5E29 CE39 33DB F2E0）粘贴到自己的用户信息中：")]),e._v(" "),t("p",[e._v("https://id.apache.org")]),e._v(" "),t("p",[t("code",[e._v("OpenPGP Public Key Primary Fingerprint:")])]),e._v(" "),t("blockquote",[t("p",[e._v("注：每个人可以有多个 Public Key。")])]),e._v(" "),t("h4",{attrs:{id:"生成-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成-keys"}},[e._v("#")]),e._v(" 生成 keys")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('svn co https://dist.apache.org/repos/dist/dev/incubator/doris/\n# edit doris/KEYS file\ngpg --list-sigs [用户 ID] >> doris/KEYS\ngpg --armor --export [用户 ID] >> doris/KEYS\nsvn ci --username $ASF_USERNAME --password "$ASF_PASSWORD" -m"Update KEYS"\n')])])]),t("p",[e._v("注意，KEYS 文件要同时发布到如下 svn 库：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('svn co https://dist.apache.org/repos/dist/release/incubator/doris\n# edit doris/KEYS file\nsvn ci --username $ASF_USERNAME --password "$ASF_PASSWORD" -m"Update KEYS"\n')])])]),t("p",[e._v("之后会自动同步到：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("https://downloads.apache.org/incubator/doris/KEYS\n")])])]),t("p",[e._v("在后续的发版投票邮件中，要使用 "),t("code",[e._v("https://downloads.apache.org/incubator/doris/KEYS")]),e._v(" 这里的 KEYS 文件。")]),e._v(" "),t("h2",{attrs:{id:"准备发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备发布"}},[e._v("#")]),e._v(" 准备发布")]),e._v(" "),t("h3",{attrs:{id:"在社区发起-discuss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在社区发起-discuss"}},[e._v("#")]),e._v(" 在社区发起 DISCUSS")]),e._v(" "),t("p",[e._v("如果觉得已经修复了很多bug，开发了比较重要的 feature，任何 IPMC 成员都可以发起 DISCUSS 讨论发布新版本。\n可以发起一个标题为 [DISCUSS] x.y.z release 的邮件，在社区内部进行讨论，说明已经修复了哪些bug，开发了哪些 features。\n如果 DISCUSS 邮件得到大家支持就可以进行下一步。")]),e._v(" "),t("h3",{attrs:{id:"准备分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备分支"}},[e._v("#")]),e._v(" 准备分支")]),e._v(" "),t("p",[e._v("发布前需要先新建一个分支。例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git checkout -b branch-0.9\n\n")])])]),t("p",[e._v("这个分支要进行比较充分的测试，使得功能可用，bug收敛，重要bug都得到修复。\n这个过程需要等待社区，看看是否有必要的patch需要在这个版本合入，如果有，需要把它 cherry-pick 到发布分支。")]),e._v(" "),t("h3",{attrs:{id:"清理issue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清理issue"}},[e._v("#")]),e._v(" 清理issue")]),e._v(" "),t("p",[e._v("将属于这个版本的所有 issue 都过一遍，关闭已经完成的，如果没法完成的，推迟到更晚的版本。")]),e._v(" "),t("h3",{attrs:{id:"合并必要的patch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并必要的patch"}},[e._v("#")]),e._v(" 合并必要的Patch")]),e._v(" "),t("p",[e._v("在发布等待过程中，可能会有比较重要的Patch合入，如果社区有人说要有重要的Bug需要合入，那么 Release Manager 需要评估并将重要的Patch合入到发布分支中。")]),e._v(" "),t("h2",{attrs:{id:"验证分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证分支"}},[e._v("#")]),e._v(" 验证分支")]),e._v(" "),t("h3",{attrs:{id:"qa-稳定性测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qa-稳定性测试"}},[e._v("#")]),e._v(" QA 稳定性测试")]),e._v(" "),t("p",[e._v("将打好的分支交给 QA 同学进行稳定性测试。如果在测试过程中，出现需要修复的问题，则如果在测试过程中，出现需要修复的问题，待修复好后，需要将修复问题的 PR 合入到待发版本的分支中。")]),e._v(" "),t("p",[e._v("待整个分支稳定后，才能准备发版本。")]),e._v(" "),t("h3",{attrs:{id:"验证编译镜像正确性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证编译镜像正确性"}},[e._v("#")]),e._v(" 验证编译镜像正确性")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("下载编译镜像")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker pull apache/incubator-doris:build-env-1.3.1\n")])])])]),e._v(" "),t("li",[t("p",[e._v("使用官方文档编译新分支，编译方式见"),t("a",{attrs:{href:"http://doris.apache.org/master/zh-CN/installing/compilation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker 开发镜像编译"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("进入镜像后，编译可能需要大概3~4小时左右，请耐心等待。")]),e._v(" "),t("p",[e._v("如果编译中缺少某些三方库导致编译失败，则说明编译镜像需要更新。")])]),e._v(" "),t("li",[t("p",[e._v("重新打编译镜像")])])]),e._v(" "),t("h3",{attrs:{id:"准备-release-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备-release-nodes"}},[e._v("#")]),e._v(" 准备 Release Nodes")]),e._v(" "),t("h2",{attrs:{id:"社区发布投票流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#社区发布投票流程"}},[e._v("#")]),e._v(" 社区发布投票流程")]),e._v(" "),t("h3",{attrs:{id:"打-tag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打-tag"}},[e._v("#")]),e._v(" 打 tag")]),e._v(" "),t("p",[e._v("当上述分支已经比较稳定后，就可以在此分支上打 tag。\n记得在创建 tag 时，修改 "),t("code",[e._v("gensrc/script/gen_build_version.sh")]),e._v(" 中的 "),t("code",[e._v("build_version")]),e._v(" 变量。如 "),t("code",[e._v('build_version="0.10.0-release"')])]),e._v(" "),t("p",[e._v("例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ git checkout branch-0.9\n$ git tag -a 0.9.0-rc01 -m "0.9.0 release candidate 01"\n$ git push origin 0.9.0-rc01\nCounting objects: 1, done.\nWriting objects: 100% (1/1), 165 bytes | 0 bytes/s, done.\nTotal 1 (delta 0), reused 0 (delta 0)\nTo git@github.com:apache/incubator-doris.git\n * [new tag]         0.9.0-rc01 -> 0.9.0-rc01\n\n$ git tag\n')])])]),t("h3",{attrs:{id:"打包、签名上传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包、签名上传"}},[e._v("#")]),e._v(" 打包、签名上传")]),e._v(" "),t("p",[e._v("如下步骤，也需要通过 SecureCRT 等终端直接登录用户账户，不能通过 su - user 或者 ssh 转，否则密码输入 box 会显示不出来而报错。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git checkout 0.9.0-rc01\n\n$ git archive --format=tar 0.9.0-rc01 --prefix=apache-doris-0.9.0-incubating-src/ | gzip > apache-doris-0.9.0-incubating-src.tar.gz\n\n$ gpg -u xxx@apache.org --armor --output apache-doris-0.9.0-incubating-src.tar.gz.asc --detach-sign apache-doris-0.9.0-incubating-src.tar.gz\n\n$ gpg --verify apache-doris-0.9.0-incubating-src.tar.gz.asc apache-doris-0.9.0-incubating-src.tar.gz\n\n$ sha512sum apache-doris-0.9.0-incubating-src.tar.gz > apache-doris-0.9.0-incubating-src.tar.gz.sha512\n\n$ sha512sum --check apache-doris-0.9.0-incubating-src.tar.gz.sha512\n")])])]),t("p",[e._v("然后将打包的内容上传到svn仓库中，首先下载 svn 库：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("svn co https://dist.apache.org/repos/dist/dev/incubator/doris/\n")])])]),t("p",[e._v("将之前得到的全部文件组织成以下svn路径")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("./doris/\n|-- 0.11.0-rc1\n|   |-- apache-doris-0.11.0-incubating-src.tar.gz\n|   |-- apache-doris-0.11.0-incubating-src.tar.gz.asc\n|   `-- apache-doris-0.11.0-incubating-src.tar.gz.sha512\n`-- KEYS\n")])])]),t("p",[e._v("上传这些文件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('svn add 0.11.0-rc1\nsvn commit -m "Add 0.11.0-rc1"\n')])])]),t("h3",{attrs:{id:"发邮件到社区-dev-doris-apache-org-进行投票"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发邮件到社区-dev-doris-apache-org-进行投票"}},[e._v("#")]),e._v(" 发邮件到社区 dev@doris.apache.org 进行投票")]),e._v(" "),t("p",[e._v("[VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Hi all,\n\nPlease review and vote on Apache Doris 0.9.0-incubating-rc01 release.\n\nThe release candidate has been tagged in GitHub as 0.9.0-rc01, available\nhere:\nhttps://github.com/apache/incubator-doris/releases/tag/0.9.0-rc01\n\nRelease Notes are here:\nhttps://github.com/apache/incubator-doris/issues/1891\n\nThanks to everyone who has contributed to this release.\n\nThe artifacts (source, signature and checksum) corresponding to this release\ncandidate can be found here:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/0.9/0.9.0-rc1/\n\nThis has been signed with PGP key 33DBF2E0, corresponding to\nlide@apache.org.\nKEYS file is available here:\nhttps://downloads.apache.org/incubator/doris/KEYS\nIt is also listed here:\nhttps://people.apache.org/keys/committer/lide.asc\n\nTo verify and build, you can refer to following wiki:\nhttps://github.com/apache/incubator-doris/wiki/How-to-verify-Apache-Release\nhttps://wiki.apache.org/incubator/IncubatorReleaseChecklist\n\nThe vote will be open for at least 72 hours.\n[ ] +1 Approve the release\n[ ] +0 No opinion\n[ ] -1 Do not release this package because ...\n\nBest Regards,\nxxx\n\n----\nDISCLAIMER-WIP: \nApache Doris is an effort undergoing incubation at The Apache Software Foundation (ASF), \nsponsored by the Apache Incubator. Incubation is required of all newly accepted projects \nuntil a further review indicates that the infrastructure, communications, and decision \nmaking process have stabilized in a manner consistent with other successful ASF projects. \nWhile incubation status is not necessarily a reflection of the completeness or stability \nof the code, it does indicate that the project has yet to be fully endorsed by the ASF.\n\nSome of the incubating project’s releases may not be fully compliant with ASF policy. For \nexample, releases may have incomplete or un-reviewed licensing conditions. What follows is \na list of known issues the project is currently aware of (note that this list, by definition, \nis likely to be incomplete): \n\n * Releases may have incomplete licensing conditions\n\nIf you are planning to incorporate this work into your product/project, please be aware that\nyou will need to conduct a thorough licensing review to determine the overall implications of \nincluding this work. For the current status of this project through the Apache Incubator \nvisit: https://incubator.apache.org/projects/doris.html\n")])])]),t("h3",{attrs:{id:"投票通过后-发-result-邮件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#投票通过后-发-result-邮件"}},[e._v("#")]),e._v(" 投票通过后，发 Result 邮件")]),e._v(" "),t("p",[e._v("[Result][VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Thanks to everyone, and this vote is now closed.\n\nIt has passed with 4 +1 (binding) votes and no 0 or -1 votes.\n\nBinding:\n+1 Zhao Chun\n+1 xxx\n+1 Li Chaoyong\n+1 Mingyu Chen\n\nBest Regards,\nxxx\n\n")])])]),t("h3",{attrs:{id:"发邮件到-general-incubator-apache-org-进行投票"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发邮件到-general-incubator-apache-org-进行投票"}},[e._v("#")]),e._v(" 发邮件到 general@incubator.apache.org 进行投票")]),e._v(" "),t("p",[e._v("[VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Hi all,\n\nPlease review and vote on Apache Doris 0.9.0-incubating-rc01 release.\n\nApache Doris is an MPP-based interactive SQL data warehousing for reporting and analysis.\n\nThe Apache Doris community has voted on and approved this release:\nhttps://lists.apache.org/thread.html/d70f7c8a8ae448bf6680a15914646005c6483564464cfa15f4ddc2fc@%3Cdev.doris.apache.org%3E\n\nThe vote result email thread:\nhttps://lists.apache.org/thread.html/64d229f0ba15d66adc83306bc8d7b7ccd5910ecb7e842718ce6a61da@%3Cdev.doris.apache.org%3E\n\nThe release candidate has been tagged in GitHub as 0.9.0-rc01, available here:\nhttps://github.com/apache/incubator-doris/releases/tag/0.9.0-rc01\n\nThere is no CHANGE LOG file because this is the first release of Apache Doris.\nThanks to everyone who has contributed to this release, and there is a simple release notes can be found here:\nhttps://github.com/apache/incubator-doris/issues/406\n\nThe artifacts (source, signature and checksum) corresponding to this release candidate can be found here:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/0.9/0.9.0-rc01/\n\nThis has been signed with PGP key 33DBF2E0, corresponding to lide@apache.org.\nKEYS file is available here:\nhttps://downloads.apache.org/incubator/doris/KEYS\nIt is also listed here:\nhttps://people.apache.org/keys/committer/lide.asc\n\nThe vote will be open for at least 72 hours.\n[ ] +1 Approve the release\n[ ] +0 No opinion\n[ ] -1 Do not release this package because ...\n\nTo verify and build, you can refer to following instruction:\n\nFirstly, you must be install and start docker service, and then you could build Doris as following steps:\n\nStep1: Pull the docker image with Doris building environment\n$ docker pull apache/incubator-doris:build-env-1.3.1\nYou can check it by listing images, its size is about 3.28GB.\n\nStep2: Run the Docker image\nYou can run image directly:\n$ docker run -it apache/incubator-doris:build-env-1.3.1\n\nStep3: Download Doris source\nNow you should in docker environment, and you can download Doris source package.\n(If you have downloaded source and it is not in image, you can map its path to image in Step2.)\n$ wget https://dist.apache.org/repos/dist/dev/incubator/doris/0.9/0.9.0-rc01/apache-doris-0.9.0.rc01-incubating-src.tar.gz\n\nStep4: Build Doris\nNow you can decompress and enter Doris source path and build Doris.\n$ tar zxvf apache-doris-0.9.0.rc01-incubating-src.tar.gz\n$ cd apache-doris-0.9.0.rc01-incubating-src\n$ sh build.sh\n\nBest Regards,\nxxx\n\n----\nDISCLAIMER-WIP: \nApache Doris is an effort undergoing incubation at The Apache Software Foundation (ASF), \nsponsored by the Apache Incubator. Incubation is required of all newly accepted projects \nuntil a further review indicates that the infrastructure, communications, and decision \nmaking process have stabilized in a manner consistent with other successful ASF projects. \nWhile incubation status is not necessarily a reflection of the completeness or stability \nof the code, it does indicate that the project has yet to be fully endorsed by the ASF.\n\nSome of the incubating project’s releases may not be fully compliant with ASF policy. For \nexample, releases may have incomplete or un-reviewed licensing conditions. What follows is \na list of known issues the project is currently aware of (note that this list, by definition, \nis likely to be incomplete): \n\n * Releases may have incomplete licensing conditions\n\nIf you are planning to incorporate this work into your product/project, please be aware that\nyou will need to conduct a thorough licensing review to determine the overall implications of \nincluding this work. For the current status of this project through the Apache Incubator \nvisit: https://incubator.apache.org/projects/doris.html\n")])])]),t("p",[e._v("邮件的 thread 连接可以在这里找到：")]),e._v(" "),t("p",[t("code",[e._v("https://lists.apache.org/list.html?dev@doris.apache.org")])]),e._v(" "),t("h3",{attrs:{id:"发-result-邮件到-general-incubator-apache-org"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发-result-邮件到-general-incubator-apache-org"}},[e._v("#")]),e._v(" 发 Result 邮件到 general@incubator.apache.org")]),e._v(" "),t("p",[e._v("[RESULT][VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Hi,\n\nThanks to everyone, and the vote for releasing Apache Doris 0.9.0-incubating-rc01 is now closed.\n\nIt has passed with 4 +1 (binding) votes and no 0 or -1 votes.\n\nBinding:\n+1 Willem Jiang\n+1 Justin Mclean\n+1 ShaoFeng Shi\n+1 Makoto Yui\n\nThe vote thread:\nhttps://lists.apache.org/thread.html/da05fdd8d84e35de527f27200b5690d7811a1e97d419d1ea66562130@%3Cgeneral.incubator.apache.org%3E\n\nBest Regards,\nxxx\n")])])]),t("h2",{attrs:{id:"完成发布流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完成发布流程"}},[e._v("#")]),e._v(" 完成发布流程")]),e._v(" "),t("h3",{attrs:{id:"上传-package-到-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传-package-到-release"}},[e._v("#")]),e._v(" 上传 package 到 release")]),e._v(" "),t("p",[e._v("当正式发布投票成功后，先发[Result]邮件，然后就准备 release package。\n将之前在dev下发布的对应rc文件夹下的源码包、签名文件和hash文件拷贝到另一个目录 0.9.0-incubating，注意文件名字中不要rcxx (可以rename，但不要重新计算签名，hash可以重新计算，结果不会变)")]),e._v(" "),t("p",[e._v("第一次发布的话 KEYS 文件也需要拷贝过来。然后add到svn release 下。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("add 成功后就可以在下面网址上看到你发布的文件\nhttps://dist.apache.org/repos/dist/release/incubator/doris/0.xx.0-incubating/\n\n稍等一段时间后，能在 apache 官网看到：\nhttp://www.apache.org/dist/incubator/doris/0.9.0-incubating/\n\n")])])]),t("h3",{attrs:{id:"在-doris-官网和-github-发布链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-doris-官网和-github-发布链接"}},[e._v("#")]),e._v(" 在 Doris 官网和 github 发布链接")]),e._v(" "),t("h4",{attrs:{id:"创建下载链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建下载链接"}},[e._v("#")]),e._v(" 创建下载链接")]),e._v(" "),t("p",[e._v("下载链接：\nhttp://www.apache.org/dyn/closer.cgi?filename=incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz&action=download")]),e._v(" "),t("p",[e._v('wget --trust-server-names "https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz"')]),e._v(" "),t("p",[e._v("原始位置:\nhttps://www.apache.org/dist/incubator/doris/0.9.0-incubating/")]),e._v(" "),t("p",[e._v("http://www.apache.org/dyn/closer.cgi/incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz")]),e._v(" "),t("p",[e._v("源码包（source package）:\nhttp://www.apache.org/dyn/closer.cgi/incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz")]),e._v(" "),t("p",[e._v("ASC:\nhttp://archive.apache.org/dist/incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz.asc")]),e._v(" "),t("p",[e._v("sha512:\nhttp://archive.apache.org/dist/incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz.sha512")]),e._v(" "),t("p",[e._v("KEYS:\nhttp://archive.apache.org/dist/incubator/doris/KEYS")]),e._v(" "),t("p",[e._v("refer to: "),t("a",{attrs:{href:"http://www.apache.org/dev/release-download-pages#closer",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.apache.org/dev/release-download-pages#closer"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"准备-release-note"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备-release-note"}},[e._v("#")]),e._v(" 准备 release note")]),e._v(" "),t("p",[e._v("需要修改如下两个地方：")]),e._v(" "),t("p",[e._v("1、Github 的 release 页面")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("https://github.com/apache/incubator-doris/releases/tag/0.9.0-rc01\n")])])]),t("p",[e._v("2、Doris 官网下载页面")]),e._v(" "),t("p",[e._v("下载页面是一个 markdown 文件，地址如下。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docs/zh-CN/downloads/downloads.md\ndocs/en/downloads/downloads.md\n")])])]),t("ol",[t("li",[e._v("需要将上一次发布版本的下载包地址改为 apache 的归档地址（见后）。")]),e._v(" "),t("li",[e._v("增加新版本的下载信息。")])]),e._v(" "),t("h4",{attrs:{id:"svn-上清理旧版本的包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#svn-上清理旧版本的包"}},[e._v("#")]),e._v(" svn 上清理旧版本的包")]),e._v(" "),t("ol",[t("li",[e._v("svn 上删除旧版本的包")])]),e._v(" "),t("p",[e._v("由于 svn 只需要保存最新版本的包，所以当有新版本发布的时候，旧版本的包就应该从 svn 上清理。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("https://dist.apache.org/repos/dist/release/incubator/doris/\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/\n")])])]),t("p",[e._v("保持这两个地址中，只有最新版本的包即可。")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("将 Doris 官网的下载页面中，旧版本包的下载地址改为归档页面的地址")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("下载页面: http://doris.apache.org/downloads.html\n归档页面: http://archive.apache.org/dist/incubator/doris\n")])])]),t("p",[e._v("Apache 会有同步机制去将历史的发布版本进行一个归档，具体操作见："),t("a",{attrs:{href:"https://www.apache.org/legal/release-policy.html#how-to-archive",target:"_blank",rel:"noopener noreferrer"}},[e._v("how to archive"),t("OutboundLink")],1),e._v("\n所以即使旧的包从 svn 上清除，还是可以在归档页面中找到。")]),e._v(" "),t("h3",{attrs:{id:"发-announce-邮件到-general-incubator-apache-org"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发-announce-邮件到-general-incubator-apache-org"}},[e._v("#")]),e._v(" 发 Announce 邮件到 general@incubator.apache.org")]),e._v(" "),t("p",[e._v("Title:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[ANNOUNCE] Apache Doris (incubating) 0.9.0 Release\n")])])]),t("p",[e._v("发送邮件组：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("general@incubator.apache.org <general@incubator.apache.org>\ndev@doris.apache.org <dev@doris.apache.org>\n")])])]),t("p",[e._v("邮件正文：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Hi All,\n\nWe are pleased to announce the release of Apache Doris 0.9.0-incubating.\n\nApache Doris (incubating) is an MPP-based interactive SQL data warehousing for reporting and analysis.\n\nThe release is available at:\nhttp://doris.apache.org/master/zh-CN/downloads/downloads.html\n\nThanks to everyone who has contributed to this release, and the release note can be found here:\nhttps://github.com/apache/incubator-doris/releases\n\nBest Regards,\n\nOn behalf of the Doris team,\nxxx\n\n----\nDISCLAIMER-WIP: \nApache Doris is an effort undergoing incubation at The Apache Software Foundation (ASF), \nsponsored by the Apache Incubator. Incubation is required of all newly accepted projects \nuntil a further review indicates that the infrastructure, communications, and decision \nmaking process have stabilized in a manner consistent with other successful ASF projects. \nWhile incubation status is not necessarily a reflection of the completeness or stability \nof the code, it does indicate that the project has yet to be fully endorsed by the ASF.\n\nSome of the incubating project’s releases may not be fully compliant with ASF policy. For \nexample, releases may have incomplete or un-reviewed licensing conditions. What follows is \na list of known issues the project is currently aware of (note that this list, by definition, \nis likely to be incomplete): \n\n * Releases may have incomplete licensing conditions\n\nIf you are planning to incorporate this work into your product/project, please be aware that\nyou will need to conduct a thorough licensing review to determine the overall implications of \nincluding this work. For the current status of this project through the Apache Incubator \nvisit: https://incubator.apache.org/projects/doris.html\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);