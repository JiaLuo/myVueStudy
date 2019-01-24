<template>
    <div>
      <input v-model="parentMsg">
      <br>
      <v-customComponent :message="parentMsg"></v-customComponent>
      <br>
      <br>
      <ol>
        <todo-item v-for="item in sites" :todo="item"></todo-item>
      </ol>
    </div>
</template>

<script>
   import customComponent from '../components/customComponent'
   import todoItem from '../components/todoItem'

    export default {
        name: "component-demo",
        components:{
          'v-customComponent':customComponent,
          'todo-item':todoItem
        },
       data(){
          return{
            parentMsg:'父组件内容',
            sites:[
              {text:'Runoob'},
              {text:'Google'},
              {text:'Taobao'}
            ]
          }
       }
    }
</script>

<style scoped>

</style>
