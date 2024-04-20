const fs = require('fs');
const fileName = 'public/eventList.json';

exports.getEventData = (req, res, next)=>{

    var eventList = JSON.parse(fs.readFileSync(fileName, 'utf8'));
    return res.end(JSON.stringify(eventList));
}


exports.saveEventData = (req, res, next)=>{

    let eventList = JSON.parse(fs.readFileSync(fileName, 'utf8'));
    if(req.body.eventId != 0){
        eventList = eventList.filter((val)=>{ return val.id != req.body.eventId});
    }


    let id = req.body.eventId != 0 ? req.body.eventId : parseInt(parseInt(1000*Math.random())+''+new Date().getTime());
    let data = {
                id: id,
                title: req.body.eventTitle,
                start: req.body.eventDate, 
                status: 0
            };

    eventList.push(data);

    fs.writeFile(fileName, JSON.stringify(eventList), function writeJSON(err) {
      if (err) return console.log(err);
      
    });
    
    return res.end(JSON.stringify(eventList));
}


exports.updateEventData = (req, res, next)=>{

    let eventList = JSON.parse(fs.readFileSync(fileName, 'utf8'));

    if(req.body.eventId != 0){
        let eventData = eventList.find((val)=>{ return val.id == req.body.eventId});
        eventData.status = 1;
    }

    fs.writeFile(fileName, JSON.stringify(eventList), function writeJSON(err) {
        if (err) return console.log(err);
    });
      
    return res.end(JSON.stringify(eventList));
}


exports.deleteEventData = (req, res, next)=>{

    let eventList = JSON.parse(fs.readFileSync(fileName, 'utf8'));
    if(req.body.eventId != 0){
        eventList = eventList.filter((val)=>{ return val.id != req.body.eventId});
    }

    fs.writeFile(fileName, JSON.stringify(eventList), function writeJSON(err) {
        if (err) return console.log(err);
    });
      
    return res.end(JSON.stringify(eventList));
}