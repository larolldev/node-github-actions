const Pusher = require('pusher')

const pusher = new Pusher({
  appId: '1194179',
  key: 'd426de2ce4b4a63e74b6',
  secret: '110814cc70f09c03b206',
  cluster: 'ap1',
  useTLS: true
})

pusher.trigger('my-channel', 'my-event', {
  message: 'hello world ZEET!'
})
