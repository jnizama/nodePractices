var log = {
    Msg: this.Msg ,
    Info: function() {
        console.log("Mensaje de Alerta de " + this.Msg);
    },
    Warning: function() {
        console.log("Mensaje de Alerta");
    },
    Error: function() {
        console.log("Mensaje de Alerta");
    }
}
module.exports = log;