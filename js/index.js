
/**
 * Template root
 */
var vm = new Vue({
  el: '#example',
  data() {
    return {
      message: 'Hello',
      sample: '',
      formUsername: '',
      formPassword: '',
      items: []
    }
  },
  mounted() {
    var self = this
    console.log('event ajax??')
    $.ajax({
      url: 'https://my-project-fzpynewkef.now.sh/',
      method: 'get',
      success: function(data) {
        console.log('result data ==>', data)
        self.sample = 'DOG!'
      },
      error: function (err) {
        console.log('error', err)
      }
    })

  },
  updated() {

  },
  methods: {
    getData() {
      console.log('Get data')
      this.sample = 'changed!!'
    }
  },
  computed: {
      // a computed getter
      reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})

var vm2 = new Vue({
  el: '#example-2'
})