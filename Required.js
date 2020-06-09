var obj = {
    pomade:'',
    hairbrush:'',
    powder:'',
    food:'',
    addSubject: function (subject) {
        this [subject] = ''
    },
    deleteSubject: function (subject) {
        delete this [subject]
    }
}
