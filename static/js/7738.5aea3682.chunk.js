"use strict";(self.webpackChunk_uiw_react_codemirror=self.webpackChunk_uiw_react_codemirror||[]).push([[7738],{7738:function(e,n,t){t.r(n),n.default='<template>\n  <div>\n    <transition name="router-fade" mode="out-in">\n      <keep-alive>\n          <router-view v-if="$route.meta.keepAlive"></router-view>\n      </keep-alive>\n      </transition>\n      <transition name="router-fade" mode="out-in">\n      <router-view v-if="!$route.meta.keepAlive"></router-view>\n    </transition>\n    <svg-icon></svg-icon>  \n  </div>\n</template>\n\n<script>\n  import svgIcon from \'./components/common/svg\';\n  export default {\n    components:{\n      svgIcon\n    },\n  }\n<\/script>\n\n<style lang="scss">\n  @import \'./style/common\';\n  .router-fade-enter-active, .router-fade-leave-active {\n      transition: opacity .3s;\n  }\n  .router-fade-enter, .router-fade-leave-active {\n      opacity: 0;\n  }\n</style>'}}]);
//# sourceMappingURL=7738.5aea3682.chunk.js.map