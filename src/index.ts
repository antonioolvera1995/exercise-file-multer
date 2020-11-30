import express from "express";
import { indexRouter } from "./routes/index.routes";

const app = express();
app.set('port', 3000);

app.use('/', indexRouter.router);





app.listen(app.get('port'), ()=>{

    console.log(`servidor levantado en http://localhost:${app.get('port')}`);

});


