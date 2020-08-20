(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{492:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",[s._v("介绍在Ubuntu、CentOS以及macOS上的Docker安装方法")])]),s._v(" "),t("h2",{attrs:{id:"ubuntu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[s._v("#")]),s._v(" Ubuntu")]),s._v(" "),t("h3",{attrs:{id:"系统要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统要求"}},[s._v("#")]),s._v(" 系统要求")]),s._v(" "),t("p",[s._v("Ubuntu操作系统对Docker的支持十分成熟，可以支持包括x86_64、armhf、s390x(IBMZ)、ppc64le等系统架构，只要是64位即可。")]),s._v(" "),t("p",[s._v("Docker目前支持的最低Ubuntu版本为14.04LTS，但实际上从稳定性上考虑，推荐使用16.04LTS或18.04LTS，并且系统内核越新越好，以支持Docker最新的特性。")]),s._v(" "),t("p",[s._v("用户可以通过如下命令检查自己的内核版本详细信息")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -a\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("或者")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果使用Ubuntu16.04版本，为了让Docker使用aufs存储，推荐安装如下两个软件包")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t\tlinux-image-extra-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -r"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t\tlinux-image-extra-virtual\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"添加软件源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加软件源"}},[s._v("#")]),s._v(" 添加软件源")]),s._v(" "),t("p",[s._v("首先需要安装"),t("code",[s._v("apt-transport-https")]),s._v("等软件包支持https协议的源")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t\tapt-transport-https "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t\tca-certificates "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t\tsoftware-properties-common\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("添加源的gpg秘钥")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSl https://download.docker.com/linux/ubuntu/gpg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" - OK\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("确认导入指纹为"),t("code",[s._v("9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C OEBF CD88")]),s._v("的GPG公钥")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key fingerprint 0EBFCD88\npub\t4096R/0EBFCD88 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-02-22\n\t\tKey fingerprint "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 9DC8 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5822")]),s._v(" 9FC7 DD38 854A E2D8 8D81 803C OEBF CD88\nuid                Docker Release "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CE deb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("docker@docker.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nsub 4096R/F273FCD8 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-02-22\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("获取当前操作系统的代号")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ lab_release -cs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("一般而言，Ubuntu 16.04 LTS代号为xenial，Ubuntu 18.04 LTS 代号为bionic")]),s._v(" "),t("p",[s._v("添加Docker稳定版本的官方软件源，非bionic版本的系统请注意修改为自己对应的代号")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n\t\tbionic \\\n\t\tstable"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("添加成功后，再次更新apt软件包缓存")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[s._v("#")]),s._v(" 安装Docker")]),s._v(" "),t("p",[s._v("在成功添加源之后，就可以安装最新版本的Docker了，软件包名称为docker-ce，代表是社区版本")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y docker-ce\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果系统内存在较旧版本的Docker,会提示是否先删除，选择==是==即可。")]),s._v(" "),t("h3",{attrs:{id:"脚本安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚本安装"}},[s._v("#")]),s._v(" "),t("a",{attrs:{name:"anchor"}},[s._v("脚本安装")])]),s._v(" "),t("p",[s._v("除了基于手动添加软件源的方式之外，也可以提供官方提供的脚本来自动化安装Docker:")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sSL https://get.docker.com/ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装成功后，会自动启动Docker服务。")]),s._v(" "),t("p",[s._v("用户也可以指定安装软件源中其他版本的Docker")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-cache")]),s._v(" madison docker-ce\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17.11")]),s._v(".0~0~ubuntu\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("在国内使用Docker可能有存在网速问题，所以可以用阿里云镜像来解决")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://get.docker.com "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" getdocker.sh\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" a+x getdocker.sh\n$ ./getdocker.sh --mirror Aliyun\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"registry-mirrors": ["https://uxk0ognt.mirror.aliyuncs.com"]}\'')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/docker/daemon.json\n$ systemctl restart docker.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"centos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos"}},[s._v("#")]),s._v(" CentOS")]),s._v(" "),t("h3",{attrs:{id:"系统要求-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统要求-2"}},[s._v("#")]),s._v(" 系统要求")]),s._v(" "),t("p",[s._v("Docker目前支持CentOS 7 及其以后的版本。系统要求与Ubuntu情况类似，64位操作系统，内核版本至少为3.10.")]),s._v(" "),t("h3",{attrs:{id:"添加软件源-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加软件源-2"}},[s._v("#")]),s._v(" 添加软件源")]),s._v(" "),t("p",[s._v("首先为了方便添加软件源，以及支持"),t("code",[s._v("devicemapper")]),s._v("存储类型，安装如下软件包")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum update\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t\tdevice-mapper-persistent-data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t\tlvm2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("添加Docker稳定版本的yum软件源")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manage "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t\t--add-repo "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t\thttps://download.docker.com/linux/centos/docker-ce.repo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"安装docker-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker-2"}},[s._v("#")]),s._v(" 安装Docker")]),s._v(" "),t("p",[s._v("更新yum软件源缓存，并安装Docker")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum update\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y docker-ce\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("最后，确认Docker服务启动正常")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start docker\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"脚本安装-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚本安装-2"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"#anchor"}},[s._v("脚本安装")])]),s._v(" "),t("blockquote",[t("p",[s._v("支持Ubuntu、Debian、Oracleserver、Fedora、Centos、OpenSuse、Gentoo等常见发行版")])]),s._v(" "),t("h2",{attrs:{id:"macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[s._v("#")]),s._v(" macOS")]),s._v(" "),t("p",[s._v("Docker官方非常重视其在Mac环境下的易用性。由于大量开发者使用Mac环境进行开发,而 Docker是一个完整的容器化应用的开发环境,所以 Docker官方提供了简单易用的"),t("a",{attrs:{href:"https:/docs.docke.com/docker-for-mac/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker for Mac"),t("OutboundLink")],1),s._v("工具。Docker for Mac其实是一个完整的 Docker CE工具。下面我们一步步讲解如何正确安装 Docker for Mac。")]),s._v(" "),t("h3",{attrs:{id:"选择版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择版本"}},[s._v("#")]),s._v(" 选择版本")]),s._v(" "),t("p",[s._v("目前用户可以选择稳定版( Stable)或测试版(Beta),这两个版本都可以通过配置 Docker Daemon来开启一些实验特性。配置时,只要启动 Docker daemon时带上-- experimenta1 参数即可。或者通过修改/etc/ docker/ daemon.json配置文件中的 experimental字段,如下所示:")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"experimental"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("也可以使用如下指令直接确认实验特性是否开启:")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ docker version -f "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{.Server.Experimental}}'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"安装须知"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装须知"}},[s._v("#")]),s._v(" 安装须知")]),s._v(" "),t("p",[s._v("Docker for Mac与 Docker Machine的关系是互不影响。用户可以从本地 default machine 拷贝容器和镜像至 Docker for Mac的 Hyperkit VM中。 "),t("a",{attrs:{href:"https://github.com/moby/hyperkit",target:"_blank",rel:"noopener noreferrer"}},[s._v("Hyperkit"),t("OutboundLink")],1),s._v("是 Docker开源的支持OSX 的轻量级虚拟化工具包。它基于 Macosx10.10之后引入的 Hypervisor框架。 Hyperkit应用可以利用硬件虚拟化运行VM,但无须特殊权限或者复杂的管理工具栈。")]),s._v(" "),t("p",[s._v("当用户运行 Docker for Mac时,本机或远程均无须运行 Docker Machine。用户使用的是一套新的原生虚拟化系统,不再需要 Virtualbox。如果希望了解更多两者对比情况,参见https://docs.dockercom/docker-for-mac/docker-toolbox")]),s._v(" "),t("p",[s._v("Docker for Mac支持 macos El Capitan10.11及其后续版本。最小要求是 macos Yosemite 10.10.3,同时 Docker并不保证可以完全支持10.10.X, Docker for Mac从版本1.13开始,不再支持10.10版本的 macos。")]),s._v(" "),t("h3",{attrs:{id:"安装docker-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker-3"}},[s._v("#")]),s._v(" 安装Docker")]),s._v(" "),t("p",[s._v("首先,选择需要的版本并下载。双击打开 Docker.dmg 文件,将 Docker.app拖至应用程序(或 Applications)文件夹即可。\nDocker应用启动后,在任务栏会多出一个小图标,如图2-3所示。\n用户可以通过这个图标打开 Docker应用,并进行配置。")]),s._v(" "),t("p",[s._v("安装成功后,可以确认运行的 Docker版本信息。如果用户环境已安装过 Docker环境,则可能存在老版 docker-py,为了防止冲突,需要重新安装")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pip uninstall docker-py \n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pip uninstall docker \n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("此时运行指令已不会提示冲突:")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ docker-compose--version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("用户还可以执行 docker version获取更全面的版本信息:")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ docker version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);