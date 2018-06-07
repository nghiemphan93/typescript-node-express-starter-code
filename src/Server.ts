import {Person} from "./model/Person";
import app from "./App";


const port = process.env.PORT || 3000;


app.listen(port, function(){
   console.log(`Server started at port ${port}`);
});