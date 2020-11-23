(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{528:function(s,a,e){"use strict";e.r(a);var t=e(4),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"基于ngrok内网穿透"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于ngrok内网穿透"}},[s._v("#")]),s._v(" 基于Ngrok内网穿透")]),s._v(" "),e("blockquote",[e("p",[s._v("https://ld246.com/article/1582460612314")])]),s._v(" "),e("h2",{attrs:{id:"配置服务器与域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置服务器与域名"}},[s._v("#")]),s._v(" 配置服务器与域名")]),s._v(" "),e("ol",[e("li",[s._v("将"),e("code",[s._v("ngrok.hjxie.icu")]),s._v("与"),e("code",[s._v("*.ngrok.hjxie.icu")]),s._v("解析指向服务器IP")])]),s._v(" "),e("h2",{attrs:{id:"构建容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建容器"}},[s._v("#")]),s._v(" 构建容器")]),s._v(" "),e("h3",{attrs:{id:"拉取镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[s._v("#")]),s._v(" 拉取镜像")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ docker pull hteen/ngrok\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"初始化镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化镜像"}},[s._v("#")]),s._v(" 初始化镜像")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ docker run --rm -it -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DOMAIN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ngrok.hjxie.icu"')]),s._v(" -v /data/ngrok:/myfiles hteen/ngrok /bin/sh /build.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"运行服务端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行服务端"}},[s._v("#")]),s._v(" 运行服务端")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ docker run -idt --name ngrok-server "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /data/ngrok:/myfiles "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8882")]),s._v(":80 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4432")]),s._v(":443 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4443")]),s._v(":4443 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DOMAIN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ngrok.hjxie.icu'")]),s._v(" hteen/ngrok /bin/sh /server.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"配置nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx"}},[s._v("#")]),s._v(" 配置Nginx")]),s._v(" "),e("p",[s._v("将配置文件修改为")]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("重启Nginx")]),s._v(" "),e("h2",{attrs:{id:"配置客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置客户端"}},[s._v("#")]),s._v(" 配置客户端")]),s._v(" "),e("p",[s._v("将"),e("code",[s._v("/data/ngrok/bin")]),s._v("中的客户端下载到本地，在同级目录下新建"),e("code",[s._v("ngrok.cfg")]),s._v("配置文件")]),s._v(" "),e("p",[s._v("写入如下内容")]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('server_addr: "ngrok.hjxie.icu:4443"\ntrust_host_root_certs: false\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("执行")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ ./ngrok -config ./ngrok.cfg -subdomain ngrok "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:8088\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);