const { createServer } = require('http')
const { Server } = require('socket.io')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res)
  })

  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  })

  io.on('connection', (socket) => {
    console.log('User connected:', socket.id)

    socket.on('join-chat', (username) => {
      socket.username = username
      socket.broadcast.emit('user-joined', {
        user: username,
        message: `${username} has joined the chat`
      })
    })

    socket.on('send-message', (data) => {
      io.emit('new-message', {
        id: Date.now().toString(),
        user: data.user,
        text: data.text,
        timestamp: new Date()
      })
    })

    socket.on('disconnect', () => {
      if (socket.username) {
        io.emit('user-left', {
          user: socket.username,
          message: `${socket.username} has left the chat`
        })
      }
    })
  })

  const PORT = process.env.PORT || 3000
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})
