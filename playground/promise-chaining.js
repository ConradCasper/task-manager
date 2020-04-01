require('../src/db/mongoose')
const User = require('../src/models/user')



User.findByIdAndUpdate('5e84cf184dbbf74fa2414727', {age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})