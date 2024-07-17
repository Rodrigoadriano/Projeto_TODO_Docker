const { response } = require("../app");

const BodyValidade = (req, res, nxt)=>{
    const { body } = req;
    
    
    if (body.title === undefined) {

        return res.status(400).send({'MessageError': 'The Field title is required'});
    };
    
    if (body.title === "") {
        return res.status(400).send({'MessageError': 'title cannot be empty'});
    };
    



    nxt();

};

module.exports = {
    BodyValidade,
}