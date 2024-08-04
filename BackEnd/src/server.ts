import app from "./app";

require('dotenv').config();
const PORT =  process.env.PORTA

app.listen(PORT, ()=> console.log(`Server TS ok na porta: ${PORT}`));

