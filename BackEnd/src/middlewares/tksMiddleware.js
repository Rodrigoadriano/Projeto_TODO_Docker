const titleValidade = (req, res, nxt)=>{
    const { body } = req;
    
    
    if (body.title === undefined) {

        return res.status(400).send({'MessageError': 'The Field title is required'});
    };
    
    if (body.title === "") {
        return res.status(400).send({'MessageError': 'title cannot be empty'});
    };
    



    nxt();

};

const statusValidade = (req, res, nxt)=>{
    const { body } = req;
    
    
    if (body.status === undefined) {

        return res.status(400).send({'MessageError': 'The Field status is required'});
    };
    
    if (body.status === "") {
        return res.status(400).send({'MessageError': 'Status cannot be empty'});
    };
    



    nxt();

};

module.exports = {
    titleValidade,statusValidade
}