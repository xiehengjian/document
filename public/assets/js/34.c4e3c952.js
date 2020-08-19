(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{511:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"安卓自动化编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安卓自动化编译"}},[s._v("#")]),s._v(" 安卓自动化编译")]),s._v(" "),t("h2",{attrs:{id:"环境准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),t("h3",{attrs:{id:"安装jdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装jdk"}},[s._v("#")]),s._v(" 安装JDK")]),s._v(" "),t("h3",{attrs:{id:"安装sdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装sdk"}},[s._v("#")]),s._v(" 安装SDK")]),s._v(" "),t("p",[s._v("下载地址:http://tools.android-studio.org/index.php/sdk")]),s._v(" "),t("p",[s._v("下载后解压")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf android-sdk_r24.4.1-linux.tgz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("配置PATH路径")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ANDROID_SDK")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/bingjiazheng/Android_SDK/android-sdk-linux\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("}")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ANDROID_SDK")]),s._v("/tools:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ANDROID_SDK")]),s._v("/platform-tools\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("刷新环境变量")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"拉取项目代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取项目代码"}},[s._v("#")]),s._v(" 拉取项目代码")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${project}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"自动构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动构建"}},[s._v("#")]),s._v(" 自动构建")]),s._v(" "),t("blockquote",[t("p",[s._v("由于项目代码已经拉取，我们希望可以当Github更新时，能够自动执行编译并发布内部测试版本")])]),s._v(" "),t("h3",{attrs:{id:"except"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#except"}},[s._v("#")]),s._v(" except")]),s._v(" "),t("blockquote",[t("p",[s._v("由于我们使用的是Github的私有库，每次pull都会要求输入用户名和密码，因此需要用"),t("code",[s._v("except")]),s._v("工具来执行自动化流程")])]),s._v(" "),t("h4",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" except\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[s._v("#")]),s._v(" 用法")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("spawn               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#交互程序开始后面跟命令或者指定程序")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v("              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取匹配信息匹配成功则执行expect后面的程序动作")]),s._v("\nsend exp_send       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用于发送指定的字符串信息")]),s._v("\nexp_continue        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在expect中多次匹配就需要用到")]),s._v("\nsend_user           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用来打印输出 相当于shell中的echo")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#退出expect脚本")]),s._v("\neof                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#expect执行结束 退出")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v("                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义变量")]),s._v("\nputs                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#输出变量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置超时时间")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚本"}},[s._v("#")]),s._v(" 脚本")]),s._v(" "),t("p",[s._v("编写一个"),t("code",[s._v("build.sh")]),s._v("的脚本，拉取代码并执行编译")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/expect")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#set timeout 20 #设置超时时间")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" MarginNote-for-Android\nspawn "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin dev\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"*Username for 'https://github.com':*\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("send "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"*Password for 'https://846188037@qq.com@github.com':*\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("send "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nspawn "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" fir_test.sh\ninteract\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("编译完成后，apk文件存放在"),t("code",[s._v("project/app/build/outputs/apk/release/app-release.apk")])]),s._v(" "),t("h3",{attrs:{id:"webhook"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webhook"}},[s._v("#")]),s._v(" Webhook")]),s._v(" "),t("blockquote",[t("p",[s._v("自动构建的脚本已经完成，我们需要使用Github的Webhook来进行通知")])]),s._v(" "),t("h4",{attrs:{id:"宝塔"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#宝塔"}},[s._v("#")]),s._v(" 宝塔")]),s._v(" "),t("p",[s._v("由于服务器上安装了宝塔面板，直接利用其提供的免费webhook服务端来接收通知")]),s._v(" "),t("p",[s._v("在宝塔面板的"),t("code",[s._v("软件商店")]),s._v("中搜索webhook,安装如下软件")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://bbs-upload.marginnote.cn/original/2X/2/24a4b548d9b97c0c5b9ab26c1f6839e26b86054b.png",alt:"image-20200818153434212"}})]),s._v(" "),t("p",[s._v("安装后点击"),t("code",[s._v("设置")]),s._v("，点击"),t("code",[s._v("添加")]),s._v("按钮来添加一个webhook")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://bbs-upload.marginnote.cn/original/2X/6/6131c6ca369f16cbb9bf391c22f14bfacf974605.png",alt:"image-20200818153554824"}})]),s._v(" "),t("p",[s._v("名称可以随便填写，脚本则为当服务器接收到webhook时执行的脚本，在这里我们让其执行原先写好的"),t("code",[s._v("build.sh")]),s._v("脚本,故执行脚本中填入如下内容")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" /您的目录/build.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("保存后点击"),t("code",[s._v("查看秘钥")]),s._v("，将其提供的URL地址复制下来")]),s._v(" "),t("h4",{attrs:{id:"github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[s._v("#")]),s._v(" Github")]),s._v(" "),t("blockquote",[t("p",[s._v("利用Github的webhook通知，实现当代码库被push时，让服务器拉取代码并编译")])]),s._v(" "),t("p",[s._v("点击仓库中的"),t("code",[s._v("Setting/Webhooks")]),s._v("，然后点击"),t("code",[s._v("Add webhook")])]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("Payload URL")]),s._v("中填入之前复制的URL地址")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("Which events would you like to trigger this webhook?")]),s._v("中选择"),t("code",[s._v("Just the push event")])]),s._v(" "),t("p",[s._v("选中 "),t("code",[s._v("Active")]),s._v("后，点击"),t("code",[s._v("Add webhook")])]),s._v(" "),t("p",[s._v("至此，当您的代码库有更新时，就会通知您的服务器开始编译新的apk")]),s._v(" "),t("h2",{attrs:{id:"编译apk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译apk"}},[s._v("#")]),s._v(" 编译apk")]),s._v(" "),t("p",[s._v("由于项目中已经写好了编译的脚本，本次只需要执行即可，有关编译脚本的编写后续可以单独记录")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入项目")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" project\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行编译脚本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" fir_test.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"提供发布地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提供发布地址"}},[s._v("#")]),s._v(" 提供发布地址")]),s._v(" "),t("p",[s._v("由于是内部使用且仅下载apk文件,故利用Python的http.server直接创建一个简易文件服务器")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入项目")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" project/app/build/outputs/apk/release\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建简易服务器")]),s._v("\npython3 -m http.server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(" 端口可更改\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("访问http://ip:8080/app-release.apk即可下载文件")]),s._v(" "),t("p",[s._v("我们希望这个HTTP服务可以持续的存在，故使用"),t("code",[s._v("screen")]),s._v("来保护进程")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入项目")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" project/app/build/outputs/apk/release\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建screen")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("screen")]),s._v(" -S myhttp\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建简易服务器")]),s._v("\npython3 -m http.server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(" 端口可更改\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[s._v("#")]),s._v(" 遇到的问题")]),s._v(" "),t("h3",{attrs:{id:"提示环境不对"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提示环境不对"}},[s._v("#")]),s._v(" 提示环境不对")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("DK location not found. Define location with sdk.dir "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the local.properties "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or with an ANDROID_SDK_ROOT\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("因为我环境变量设置的是"),t("code",[s._v("ANDROID_SDK")]),s._v("，改成"),t("code",[s._v("ANDROID_SDK_ROOT")]),s._v("即可")])])}),[],!1,null,null,null);a.default=n.exports}}]);