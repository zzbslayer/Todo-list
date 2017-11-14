var todolist = new Vue ({
    el: '#todolist',
    data: {
        newitem: '',
        todo:[
            {label: "Homework of Father Ren", done: true},
            {label: "Lab4", done: false},
            {label: "Lab5", done: false}
        ]
    },
    methods: {
        addItem: function() {
            this.todo.push({label: this.newitem, done: false});
            this.newitem = ''
        },
        deleteItem: function(item) {
            let index = this.todo.indexOf(item);
            this.todo.splice(index,1);
        },
        markItem: function(item) {
            item.done = !item.done;
        }
    }
})