const express = require('express')
// const port = process.env.PORT || 3000
// const compression = require('compression')
const bodyParser = require("body-parser");
var cors = require("cors");
const firebase = require("./firebase/FirebaseConfig");
const app = express()
app.use(express.urlencoded())
app.use(express.json());


app.use(cors({origin:true}));
app.use(bodyParser.json());



//--- audioBook ----
const audioBookRoutes = require('./routes/audioBook/AudioBook')
app.use(audioBookRoutes)



// Pdf to audio 
// let dataBuffer = fs.readFileSync("sample.pdf");
// pdf(dataBuffer).then((data)=>{
//     // console.log(data.text)
//     const gTTs = require("gtts");
//     var gtts = new gTTs(data.text,"en");
//     gtts.save('sample.mp3', function (err, result) {
//         if(err) { throw new Error(err) }
//         console.log('Success!');
//       });
// })

app.get('/', function(req, res) {
    res.send('Node API');
});


const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>console.log("server started"));