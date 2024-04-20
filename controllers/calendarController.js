
const events = [
    {
        id: 'a',
        title: 'my event 1',
        status: 1,
        start: '2024-04-16'
    }
];


exports.getEventData = (req, res, next)=>{

    return res.end(JSON.stringify(events));

}


exports.saveEventData = (req, res, next)=>{

    let id = req.body.eventId != 0 ? req.body.eventId : parseInt(1000*Math.random())+''+new Date().getTime();
    let data = {
                id: id,
                title: req.body.eventTitle,
                start: req.body.eventDate, 
                status: 1,
            };

    events.push(data);
    
    return res.end(JSON.stringify(events));
}

