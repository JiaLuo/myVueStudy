import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyStudyDemo from '@/pages/myStudy'
import ClassObject from '@/pages/classObject'
import styleDemo from '@/pages/styleDemo'
import EventProcessor from '@/pages/eventProcessor'
import FormDemo from '@/pages/formDemo'
import CheckedBoxDemo from '@/pages/checkedBoxDemo'
import RadioBox from '@/pages/radioBox'
import SelectDemo from '@/pages/selectDemo'
import ComponentDemo from '@/pages/componentDemo'

/**
 * caicai module
 * */
import AboutUsComponent from '@/components/caicai/aboutsUs'

Vue.use(Router)

export default new Router({
  routes: [
    // 默认路由，用户敲完域名的默认页面
    {
      path: '/',
      name: 'myStudyDemo',
      component: MyStudyDemo
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/myStudy',
      name: 'myStudyDemo',
      component: MyStudyDemo
    },
    {
      path:'/classObject',
      name:'classObject',
      component:ClassObject
    },
    {
      path:'/styleDemo',
      name:'styleDemo',
      component:styleDemo
    },
    {
      path:'/eventProcessor',
      name:'eventProcessor',
      component:EventProcessor
    },
    {
      path:'/formDemo',
      name:'formDemo',
      component:FormDemo
    },
    {
      path:'/checkedBoxDemo',
      name:'checkedBoxDemo',
      component:CheckedBoxDemo
    },
    {
      path:'/radioBox',
      name:'radioBox',
      component:RadioBox
    },
    {
      path:'/selectDemo',
      name:'selectDemo',
      component:SelectDemo
    },
    {
      path:'/componentDemo',
      name:'componentDemo',
      component:ComponentDemo
    },
    /**
     * caicai module
     * */
    {
      path:'/aboutUs',
      name:'aboutUs',
      component:AboutUsComponent
    },
  ]
})
