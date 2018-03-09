Vue.component('users-component', {
  template: `
  <div>
    <div class="">
    <h2>Users</h2>
      <ul class="users">
        <li v-for="user in users" :key="user.id">
          <a :href="'/users/' + user.id">{{ user.name }}</a>
        </li>
      </ul>
    </div>
  </div>
  `,
  data() {
    return {
      users: []
    }
  },
  mounted() {
    var self = this
    console.log('event ajax??')
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'get',
      success: function(data) {
        console.log('result data ==>', data)
        self.users = data
      },
      error: function (err) {
        console.log('error', err)
      }
    })

  },
  methods: {
    check() {
      this.checked = !this.checked;
    },
  }
});
