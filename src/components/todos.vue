<template>
  <section class="todoapp">
    <header class="header">
      <h1>Todos</h1>
      <input type="text" class="new-todo" placeholder="Ajouter une nouvelle tâche" v-model="newTodo" @keyup.enter="addTodo">
    </header>
    <div class="main">
      <input type="checkbox" class="toggle-all" v-model="allDone">
      <ul class="todo-list">
        <li class="todo" v-for="todo in filteredTodos" :class="{completed: todo.completed, editing: todo === editing}">
        <!-- <li class="todo" v-for="todo in todos" :class="{completed: todo.completed}"> -->
          <div class="view">
            <!-- relier la checkbox avec todo.completed, télécharger l'extension vue dev tool -->
            <input type="checkbox" v-model="todo.completed" class="toggle">
            <label @dblclick="editTodo(todo)">{{ todo.name }}</label>
            <button class="destroy" @click.prevent="deleteTodo(todo)"></button>
          </div>
          <input type="text" class="edit" v-model="todo.name" @keyup.enter="doneEdit" @blur="doneEdit" v-focus="todo === editing">
        </li>
      </ul>
    </div>
    <footer class="footer" v-show="hasTodos">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        tâches à faire
      </span>
      <ul class="filters">
        <li ><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes les tâches</a></li>
        <li ><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">Tâches à faire</a></li>
        <li ><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Tâches faites</a></li>
      </ul>
    </footer>
    <button class="clear-completed" v-show="completed" @click.prevent="deleteCompleted">Supprimer les tâches terminées</button>
  </section>
</template>

<script>
  import Vue from 'vue'

  export default {
    data () {
      return {
        // todos: [], // tableau vide  liste des tâche à faire
        todos: [{
          name: 'tâche de test',
          completed: false
        }], // tableau vide  liste des tâche à faire
        newTodo: '', // pour sauvegarder la nouvelle tâche
        filter: 'all', // sauvegarder l'état des filtres
        editing: null // pour sauvegarder la tâche que l'on est en train de modifier
      }
    },
    methods: {
      addTodo () {
        // on va rajouter un nouvel élement dans le tableau
        this.todos.push({
          completed: false,
          name: this.newTodo
        })
        // après il faut vider le champs
        this.newTodo = ''
      },
      deleteTodo (todo) {
        // je veux tous les elements ou i est différent de la todo qui est passée en paramètre
        this.todos = this.todos.filter(i => i !== todo)
      },
      deleteCompleted () {
        this.todos = this.todos.filter(todo => !todo.completed)
      },
      editTodo (todo) {
        this.editing = todo
      },
      doneEdit () {
        this.editing = null
      }
    },
    computed: {
      // propriété compuded qui va recevoir des getter et des setter
      allDone: {
        // get pour savoir comment est définie cette propriété là
        get () {
          // si remaing est egal c'ets à dire que toute les cases doivent être cochées
          return this.remaining === 0
        },
        // savoir qu'est-ce qu'on a à faire avec cette propriété là avec en paramètre la valeur
        set (value) {
          if(value === true) {
            this.todos.forEach(todo => {
              todo.completed = true
            })
          } else {
            this.todos.forEach(todo => {
              todo.completed = false
            })
          }
        }
      },
      hasTodos () {
        return this.todos.length > 0
      },
      remaining () {
        // filter la liste des todos, on va prendre todo et retourner seulement celles qui ne sont pas terminées.
        return this.todos.filter(todo => !todo.completed).length
      },
      completed () {
        // filter la liste des todos, on va prendre todo et retourner seulement celles qui ne sont pas terminées.
        return this.todos.filter(todo => todo.completed).length
      },
      // method computed pour récupérer la liste des todos filtrées
      filteredTodos () {
        if(this.filter === 'todo') {
          return this.todos.filter(todo => !todo.completed)
        } else if(this.filter === 'done') {
          return this.todos.filter(todo => todo.completed)
        }
        return this.todos
      }
    },
    directives: {
      focus (el, value) {
        if (value) {
          Vue.nextTick(() => {
            el.focus()
          })
        }
      }
    }
  }
</script>
