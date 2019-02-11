<!--过渡其实就是一个淡入淡出的效果。Vue在元素显示与隐藏的过渡中，提供了6个class来切换：-->
<!--v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。-->
<!--v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。-->
<!--这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。-->
<!--v-enter-to：2.1.8版及以上定义进入过渡的结束状态。在元素被插入之后下一阵生效（与此同时v-enter被移除），在过渡/动画完成之后移除。-->
<!--v-leave：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。-->
<!--v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来-->
<!--定义离开过渡的过程时间，延迟和曲线函数。-->
<!--v-leave-to：2.1.8版本及以上定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效（与此同时v-leave被删除），在过渡/动画完成之后移除。-->

<template>
      <div>
        <button @click="show = !show">点我</button>
        <transition name="fade">
          <p v-show="show" :style="styleobj">动画实例</p>
        </transition>

        <button @click="slideShow = !slideShow">点我</button>
        <transition name="slide-fade">
          <p v-if="slideShow">菜鸟教程</p>
        </transition>

        <button @click="bounceShow = !bounceShow">点我</button>
        <transition name="bounce">
          <p v-if="bounceShow">菜鸟教程 -- 学的不仅是技术，更是梦想！</p>
        </transition>
      </div>
</template>

<script>
    export default {
        name: "transition-demo",
        data(){
          return{
            show:true,
            slideShow:true,
            bounceShow:true,
            styleobj:{
              fontSize:'30px',
              color:'red'
            }
          }
        }
    }
</script>

<style scoped>

  /*对于这些在过渡中切换的类名来说，如果你使用一个没有名字的<transition>，
    则v- 是这些类名的默认前缀。如果使用了<transition name='my-transition'>,
    那么v-enter会替换为my-transition-enter。
  */
  /*
    可以设置不同的进入和离开的动画
    设置持续时间和动画函数
  */

  .fade-enter-active, .fade-leave-active{
    transition:opacity 4s;
  }
  /*
    .fade-leave-active,2.1.8版本以下
   */

  .fade-enter, .fade-leave-to{
    opacity: 0;
  }

  /*可以设置不同的进入和离开动画*/
  /*设置持续时间和动画函数
  */
  .slide-fade-enter-active{
    transition:all .3s ease;
  }
  .slide-fade-leave-active{
    transition:all .8s cubic-bezier(1.0,0.5,0.8,1.0);
  }
  .slide-fade-enter,.slide-fade-leave-to{
    transform: translateX(30px);
    opacity: 0;
  }
  .bounce-enter-active{
    animation: bounce-in .5s;
  }

  .bounce-leave-active{
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1.5);
    }
    100%{
      transform: scale(1);
    }
  }
</style>
