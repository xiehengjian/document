(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{542:function(t,a,v){"use strict";v.r(a);var _=v(4),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"回溯法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回溯法"}},[t._v("#")]),t._v(" 回溯法")]),t._v(" "),v("h2",{attrs:{id:"基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),v("p",[t._v("回溯法的大致思路是把问题的解空间构造为树结构，然后使用深度优先搜索策略对树进行遍历，寻找最优解或所有可能的解")]),t._v(" "),v("h3",{attrs:{id:"问题的解空间"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#问题的解空间"}},[t._v("#")]),t._v(" 问题的解空间")]),t._v(" "),v("p",[t._v("考虑下面的场景")]),t._v(" "),v("blockquote",[v("p",[t._v("你有一个设置好3位密码的旅行箱，不小心把密码忘记了，只记得密码中包含2，5，6三个数字，如何将密码箱打开")])]),t._v(" "),v("p",[t._v("通过枚举，我们知道密码的所有可能的集合为：")]),t._v(" "),v("p",[t._v("==2 5 6== ==5 2 6== ==6 2 5== ==2 6 5== ==5 6 2== ==6 5 2==")]),t._v(" "),v("p",[t._v("则密码箱问题==所有可能解的集合==构成了问题的==解空间==")]),t._v(" "),v("p",[t._v("但是这种方法的效率很低，可以通过利用合适的数据结构将解空间很好组织起来来提高效率，")]),t._v(" "),v("p",[t._v("一方面有助于快速找到问题的解，另一方面可以防止遗漏部分可行解")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://img.hjxie.icu/image-20201013113942517.png",alt:"image-20201013113942517"}})]),t._v(" "),v("h3",{attrs:{id:"排列树和子集树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#排列树和子集树"}},[t._v("#")]),t._v(" 排列树和子集树")]),t._v(" "),v("h4",{attrs:{id:"子集树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#子集树"}},[t._v("#")]),t._v(" 子集树")]),t._v(" "),v("blockquote",[v("p",[t._v("当所给问题是从n个元素的集合S中找出S满足性质的子集时，相应的解空间树称为子集树。")])]),t._v(" "),v("p",[t._v("子集树的每一层表示每个元素的取舍，1表示选中该元素，0表示舍去该元素")]),t._v(" "),v("p",[t._v("如0-1背包问题，最大团问题，装载问题等的解空间都是子集树")]),t._v(" "),v("h4",{attrs:{id:"排列树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#排列树"}},[t._v("#")]),t._v(" 排列树")]),t._v(" "),v("blockquote",[v("p",[t._v("当所给问题是确定n个元素满足某种性质的排列时，相应的解空间树称为排列树")])]),t._v(" "),v("p",[t._v("之前提高的密码箱问题的解空间树就是排列树")]),t._v(" "),v("h3",{attrs:{id:"回溯法的基本步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回溯法的基本步骤"}},[t._v("#")]),t._v(" 回溯法的基本步骤")]),t._v(" "),v("ol",[v("li",[t._v("针对所给问题，明确问题的解空间")]),t._v(" "),v("li",[t._v("确定易于搜索的解空间结构(排列树、子集树等)")]),t._v(" "),v("li",[t._v("从根节点开始，采用深度优先的方式遍历解空间树")])]),t._v(" "),v("h4",{attrs:{id:"剪枝策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#剪枝策略"}},[t._v("#")]),t._v(" 剪枝策略")]),t._v(" "),v("blockquote",[v("p",[t._v("在解空间树的遍历过程中，为了避免无效搜索，采用剪枝策略提高搜索效率")])]),t._v(" "),v("ol",[v("li",[t._v("利用约束函数在扩展结点处剪去不满足约束条件的子树")]),t._v(" "),v("li",[t._v("用限界函数剪去得不到最优解的子树")])])])}),[],!1,null,null,null);a.default=s.exports}}]);