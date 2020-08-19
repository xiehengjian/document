(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{510:function(e,t,a){"use strict";a.r(t);var s=a(4),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[e._v("WebDriverAgent目前是facebook所开源维护的用户ios真机调试的工具，本文对相关的配置部署进行介绍")])]),e._v(" "),a("h2",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[e._v("#")]),e._v(" 环境准备")]),e._v(" "),a("h3",{attrs:{id:"weditor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weditor"}},[e._v("#")]),e._v(" weditor")]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/alibaba/web-editor",target:"_blank",rel:"noopener noreferrer"}},[e._v("weditor"),a("OutboundLink")],1),e._v("是阿里巴巴开源的一款UI视图元素分析的工具，支持Android与IOS")])]),e._v(" "),a("h4",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("pip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" weditor\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"xcode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xcode"}},[e._v("#")]),e._v(" Xcode")]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://developer.apple.com/xcode/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Xcode"),a("OutboundLink")],1),e._v("是苹果推出的集成开发环境，对于调试ios设备，xcode是必选项")])]),e._v(" "),a("h4",{attrs:{id:"安装-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),a("p",[e._v("进入Xcode官网下载安装即可。")]),e._v(" "),a("p",[e._v("最好将xcode升级至最新版，我在初次尝试的时候就出现一直无法连接真机的问题，后更新至xcode12 beta解决问题")]),e._v(" "),a("h3",{attrs:{id:"ios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios"}},[e._v("#")]),e._v(" IOS")]),e._v(" "),a("p",[e._v("需要您的ios版本处于9.3以上，若出现错误，可能是由于您的ios版本过低造成的。")]),e._v(" "),a("p",[e._v("但同时，如果您的ios版本太新，比如是刚发布的beta版本，则也有可能会出现问题")]),e._v(" "),a("h3",{attrs:{id:"webdriveragent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webdriveragent"}},[e._v("#")]),e._v(" WebDriverAgent")]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/openatx/facebook-wda",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebDriverAgent"),a("OutboundLink")],1),e._v("目前是ios真机调试的Python客户端库（非官方）")])]),e._v(" "),a("p",[e._v("拉取代码")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/appium/WebDriverAgent\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("初始化")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("./Scripts/bootstrap.sh\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"连接设备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接设备"}},[e._v("#")]),e._v(" 连接设备")]),e._v(" "),a("h3",{attrs:{id:"启动项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动项目"}},[e._v("#")]),e._v(" 启动项目")]),e._v(" "),a("p",[e._v("打开项目中生成的"),a("code",[e._v("WebDriverAgent.xcodeproj")])]),e._v(" "),a("h3",{attrs:{id:"配置证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置证书"}},[e._v("#")]),e._v(" 配置证书")]),e._v(" "),a("p",[e._v("因为安装到真机上都是需要证书签名的，开发者可以用自己的开发者证书，这里我使用了免费的个人证书。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/Users/creative/Documents/document/.vuepress/public/Snipaste_2020-08-19_15-38-57.png",alt:"Snipaste_2020-08-19_15-38-57"}})]),e._v(" "),a("ul",[a("li",[e._v("5中需要勾选开启")]),e._v(" "),a("li",[e._v("6中需要选择您的开发者证书")]),e._v(" "),a("li",[e._v("7中如果您使用了免费的个人证书，则需要修改使其不会重名即可")])]),e._v(" "),a("h3",{attrs:{id:"运行与测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行与测试"}},[e._v("#")]),e._v(" 运行与测试")]),e._v(" "),a("p",[e._v("选择目标设备")]),e._v(" "),a("p",[a("img",{attrs:{src:"/Users/creative/Documents/document/.vuepress/public/4291b5b01899d382fca6aecd1f4b7e63.png!large",alt:""}})]),e._v(" "),a("p",[e._v("Scheme选择WebDriverAgentRunner")]),e._v(" "),a("p",[a("img",{attrs:{src:"/Users/creative/Documents/document/.vuepress/public/f035bd53ae3922012b7d6378ecb95615.png!large",alt:""}})]),e._v(" "),a("p",[e._v("最后运行 Product -> Test")]),e._v(" "),a("p",[e._v("一切正常的话，手机上会出现一个无图标的WebDriverAgent应用，启动之后，马上又返回到桌面。")]),e._v(" "),a("h2",{attrs:{id:"启动weditor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动weditor"}},[e._v("#")]),e._v(" 启动weditor")]),e._v(" "),a("p",[e._v("终端执行")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("python3 -m weditor\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("接着会在浏览器中跳出一个窗口")]),e._v(" "),a("p",[e._v("在xcode控制台中可以看到当前设备的ip，将其填入weditor的ip框中，点击connect")]),e._v(" "),a("p",[e._v("连接成功。")])])}),[],!1,null,null,null);t.default=r.exports}}]);