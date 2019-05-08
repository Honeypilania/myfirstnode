

// Modules

function add(){
    return "This is addition Function..!";
}

module.exports.addModule = add;

//Another way to export

module.exports = {
    add1:function(){
        return "This is add Function..!"
    },
    add2:function(){
        return "This is add 2 Function..!"
    },

    add:function(){
        return "This is addition Function..!";
    }
}
