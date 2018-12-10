let todos = []
let id = 1

module.exports = {
    getAll: (req, res) => {
        console.log('getAll')
        res.status(200).send(todos)
    },
    // getPoke: (req,res) => {
    //     res.status(200).send(todos)
    // },
    createNew: (req, res) => {
        console.log('Post end point is firing')
        console.log(req.body)
        let newTodo = {
            id: id,
            text: req.body.text
        }
        todos.push(newTodo);
        console.log(todos)
        id++
        res.status(200).send(todos)
    },
    delete: (req, res) => {
        const deleteID = req.params.id;
        messageIndex = todos.findIndex(message => message.id === +deleteID);
        todos.splice(messageIndex, 1);
        res.status(200).send(todos);
    },
    update: (req, res) => {
        let index = todos.indexOf(req.params.id)
        console.log(req.body)
        todos.splice(index, 1, req.body)
        res.status(200).send(todos)
    }
}