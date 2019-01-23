import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyStudyDemo from '@/pages/myStudy'
import ClassObject from '@/pages/classObject'
import styleDemo from '@/pages/styleDemo'
import EventProcessor from '@/pages/eventProcessor'
import FormDemo from '@/pages/formDemo'
import CheckedBoxDemo from '@/pages/checkedBoxDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})
