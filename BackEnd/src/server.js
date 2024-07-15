
const app = require('./app');
require('dotenv').config();

const PORT =  process.env.PORTA
app.listen(PORT, ()=> console.log(`Server ok na porta: ${PORT}`));
