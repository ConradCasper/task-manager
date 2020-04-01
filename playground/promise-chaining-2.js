require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5e84ba7d3401214cc58019eb').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})