const fs = require('fs');
const fileName = 'public/eventList.json';
const events = [
    {
        id: 'a',
        title: 'my event 1',
        status: 1,
        start: '2024-04-16'
    }
];


exports.getEventData = (req, res, next)=>{

    const data = [{name:'Prasenjit', age:42}, {name:'Rita', age:28}, {name:'Riyan', age:11}];
    const filterData = data.filter((val)=>{ return val.age>15});
    
    //console.log(data);
    //console.log(filterData);



    var eventList = JSON.parse(fs.readFileSync(fileName, 'utf8'));
    return res.end(JSON.stringify(eventList));

}


exports.saveEventData = (req, res, next)=>{

    let eventList = JSON.parse(fs.readFileSync(fileName, 'utf8'));
    //console.log(1, eventList);
    if(req.body.eventId != 0){
        eventList = eventList.filter((val)=>{ return val.id != req.body.eventId});
        //console.log(2, eventList);
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


exports.deleteEventData = (req, res, next)=>{

    let eventList = JSON.parse(fs.readFileSync(fileName, 'utf8'));
    //console.log(1, eventList);
    if(req.body.eventId != 0){
        eventList = eventList.filter((val)=>{ return val.id != req.body.eventId});
        //console.log(2, eventList);
    }

    fs.writeFile(fileName, JSON.stringify(eventList), function writeJSON(err) {
        if (err) return console.log(err);
    });
      
    return res.end(JSON.stringify(eventList));
}