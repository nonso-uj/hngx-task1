const express = require('express');

const app = express();


// listen for requests
app.listen(3000);


app.get('/', (req, res) => {
    res.json({hi: "WELCOME"})
})



app.get('/api', (req, res) => {
    let resObj = {}

    if (req.query.slack_name && req.query.track){
        let date = new Date
    
        resObj.slack_name = req.query.slack_name
        resObj.current_day = date.toLocaleDateString("en-gb", {weekday: "long"})
        resObj.utc_time = date.toISOString()
        resObj.track = req.query.track
        resObj.github_file_url = "https://github.com/nonso-uj/hngx-task1/blob/main/app.js"
        resObj.github_repo_url = "https://github.com/nonso-uj/hngx-task1"
        resObj.status_code = 200
    }else{
        resObj.error = "Bad Request"
    }


    res.json(resObj)
})
