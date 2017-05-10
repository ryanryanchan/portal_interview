function event(title, date, start_time, end_time) {
	this.title = title;
	this.date = date;
	this.start_time = start_time;
	this.end_time = end_time;
}
Date("2017-02-23T12:00:00-06:30")

var event1 = new event("Interview at The Portal", "Feb 23, 2017", "3:00PM", "4:00PM");
var event2 = new event("Lunch with Cindy", "Feb 25, 2017", "12:00PM", "1:00PM");
var event3 = new event("Dinner with John", "Feb 24, 2017", "5:00PM", "5:30PM");
var event4 = new event("Conference", "Feb 24, 2017", "11:00PM", "5:00PM");

var event5 = new event("Class", "Feb 23, 2017", "2:00PM", "3:30PM");
var event6 = new event("Lunch without Cindy", "Feb 25, 2017", "11:00AM", "2:00PM");
var event7 = new event("Dinner by myself", "Mar 3, 2017", "5:00PM", "5:30PM");
var event8 = new event("Quality Nap", "Mar 5, 2017", "11:00PM", "5:00PM");




var all_events = [
	event1,
    event2,
    event3,
    event4,
    event5,
    event6,
    event7,
    event8
]




function check_for_overlaps(){
	var final = [];
	for(i = 0; i < all_events.length; i++){
		for(j = 0; j < all_events.length; j++){
        	if( all_events[i].date == all_events[j].date){
            
            	if(all_events[j].start_time > all_events[i].start_time 
                && all_events[j].end_time < all_events[i].start_time){
                final.push(all_events[i].title;)
                }
                
            
            	document.write(all_events[i].title);
            }
        }
	}
}

check_for_overlaps();