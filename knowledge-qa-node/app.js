require('./Config/config')


//----------- Require Router -----------// 
const example = require('./Routes/index')


//---- Config -----//
const app = express()
app.use(bodyParser.json({limit: '512mb'}));
app.use(bodyParser.urlencoded({limit: '512mb', extended: true}));
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
  res.send('Welcome to Apollo QA')
})

//------------- Route -------------//
app.use('/api/example',example)


//------- PORT ------//
console.log('[success] task 1 start service port : ' + GLOBAL_VALUE.NODE_PORT)
const server = app.listen(GLOBAL_VALUE.NODE_PORT).on('error', err => {
    console.log(err)
})

module.exports = server
