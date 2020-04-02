require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e84d714e3e24a509ccb4c12').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
   const taskToDelete =  await Task.findByIdAndDelete(id)
   const count = await Task.countDocuments({ completed: false })
   return count
}

deleteTaskAndCount('5e84d6fde3e24a509ccb4c10').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})