(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{546:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"线性规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线性规划"}},[s._v("#")]),s._v(" 线性规划")]),s._v(" "),a("h3",{attrs:{id:"scipy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scipy"}},[s._v("#")]),s._v(" Scipy")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" scipy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" optimize\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" numpy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" np\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#求解函数")]),s._v("\nres "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" optimize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lingprog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Aeq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("beq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("LB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("UB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("X0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#目标函数最小值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#最优解")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"pulp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pulp"}},[s._v("#")]),s._v(" Pulp")]),s._v(" "),a("h2",{attrs:{id:"整数规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整数规划"}},[s._v("#")]),s._v(" 整数规划")]),s._v(" "),a("h3",{attrs:{id:"分枝定界法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分枝定界法"}},[s._v("#")]),s._v(" 分枝定界法")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" math\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" scipy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("optimize "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" linprog\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sys\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("integerPro")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Aeq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("beq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0E-12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" lingprog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("A_ub"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b_ub"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("A_eq"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Aeq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b_eq"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("beq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    bestX "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("maxsize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    bestX "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("X\n    \n  bestVal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("y "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("y "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("zip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("bestX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"非线性规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非线性规划"}},[s._v("#")]),s._v(" 非线性规划")])])}),[],!1,null,null,null);t.default=r.exports}}]);