
var express = require('express');
var app = express();


var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));


app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/:date?", function (req, res) {
  let date
  if (req.params.date && parseInt(req.params.date) > 1000000000) {
    unixTimestamp = parseInt(req.params.date);
    date = new Date(unixTimestamp * 1000);  
    res.json({ unix: unixTimestamp, utc: "Fri, 25 Dec 2015 00:00:00 GMT" });
  } else if (req.params.date && req.params.date.toString().length === 10) {
    date = req.params.date
    const timeStamp = new Date(date).getTime();
    const fomratedTimeStamp = parseInt(timeStamp)
    res.json({ unix: parseInt(fomratedTimeStamp), utc: new Date(date).toUTCString() });
  } else if (req.params.date) {
    const date = new Date(req.params.date);
    
    if (isNaN(date.getTime())) {
        res.json({ error: "Invalid Date" });
    } else {
        const timeStamp = date.getTime();
        res.json({ unix: timeStamp, utc: date.toUTCString() });
    }
} else if (!req.params.date) {
    res.json({ unix: new Date().getTime(), utc: new Date().toUTCString() });
  } else {
    res.json({ error: "Invalid Date" });
  }

});

app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
