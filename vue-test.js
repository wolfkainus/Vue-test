new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Carga esta pagina' + new Date().toLocaleString()
  }
})

var app3 = new Vue ({
  el: '#app-3',
  data: {
  seen: true
  }
})

var app4 = new Vue ({
  el: '#app-4',
  data: {
    addmessage: 'Nuevo elemento',
    todos: [
      { text: 'Chimera' },
      { text: 'Leviathan' },
      { text: 'Kraken' }
    ]
  },
  methods: {
    addList: function () {
      this.todos.push({ text: this.addmessage })
    }
  }
})

var app5 = new Vue ({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue ({
  el: '#app-6',
  data: {
    message: 'Hello Vue again!'
  }
})

//Definir un nuevo componente TODO-ITEM
Vue.component( 'todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>' 
})

var app7 = new Vue ({
  el: '#app-7',
  data: {
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else....' }
    ]
  }
})