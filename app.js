const express = require('express');

const app = express();


// listen for requests
app.listen(3000);


app.get('/', (req, res) => {
    res.json({hi: "WELCOME"})
})


// http://localhost:3000/api?slack_name=yup&track=backend

app.get('/api', (req, res) => {
    let resObj = {}
    console.log(req.query)

    if (req.query.slack_name && req.query.track){
        let date = new Date
    
        resObj.slack_name = req.query.slack_name
        resObj.track = req.query.track
        resObj.utc_time = date.toISOString()
        resObj.track = date.toLocaleDateString("en-gb", {weekday: "long"})
        resObj.github_file_url = ""
        resObj.github_repo_url = ""
        resObj.status_code = 200
    }else{
        resObj.error = "Bad Request"
    }


    res.json(resObj)
})
