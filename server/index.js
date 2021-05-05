const express = require('express')
const Pusher = require('pusher')
// const generateVotes = require("./votegenerator");
const cors = require('cors')
const PORT = process.env.PORT || 3001
const sampleData = [
  [1, 'Alabama', 52, 4, 19, 10, 52, 4, 19, 10, 'inprogress', 0],
  [1, 'Delaware', 15, 6, 10, 12, 67, 10, 29, 22, 'inprogress', 1],
  [1, 'Florida', 25, 6, 3, 21, 92, 16, 32, 43, 'inprogress', 2],
  [1, 'Hawaii', 35, 14, 8, 12, 127, 30, 40, 55, 'inprogress', 3],
  [1, 'Idaho', 4, 16, 8, 21, 131, 46, 48, 71, 'inprogress', 4],
  [1, 'Kentucky', 12, 36, 8, 22, 143, 82, 56, 93, 'completed', 5]
]

const app = express()
app.use(cors())
const pusher = new Pusher({
  appId: '1194179',
  key: 'd426de2ce4b4a63e74b6',
  secret: '110814cc70f09c03b206',
  cluster: 'ap1',
  useTLS: true
})

console.log(pusher)
var i = 0
setInterval(() => {
  if (i === 5) {
    i = 0
    console.log('DONE')
    return
  }
  pusher
    .trigger('votes', 'vote-event', {
      message: sampleData[1]
    })
    .then(console.log)
    .catch(e => console.log(e))
  i++
}, 60000)

app.get('/', function (req, res) {
  i++
  res.send({ message: sampleData[0] })
})
app.listen(PORT, PORT => console.log('ready'))
