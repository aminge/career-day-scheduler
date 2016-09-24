var Cohort = function(id, name, students) {
  this.id = id;
  this.name = name;
  this.students = [];
};

var Student = function(id, name, cohort, email) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.cohortID = cohort.id;
  this.cohortName = cohort.name;
};

var Contact = function(id, name, company, email) {
  this.id = id;
  this.name = name;
  this.company = company;
  this.email = email;
};

var Event = function(id, name, date, startTime, interviewLength, breakLength,
  numInterviews, cohort) {
  this.id = id;
  this.name = name;
  this.date = date;
  this.startTime = startTime;
  this.interviewLength = interviewLength;
  this.breakLength = breakLength;
  this.numInterviews = numInterviews;
  this.cohortID = cohort.id;
  this.cohortName = cohort.name;
  this.contacts = [];
  this.inactiveContacts = {}
  // this.inactiveContacts will take the form of {'contact1': [time1,
  //                                                           time2],
  //                                              'contact6': [time7,
  //                                                           time8,
  //                                                           time9]}
  // if a contact is active for all of the times, they will not appear in
  // this.inactiveContacts
  this.schedule = undefined;
  this.makeNewSchedule = function() {
    // makes a schedule and returns it
  };
};

var Schedule = function(id, event) {
  this.id = id;
  this.eventID = event.id;
  this.eventName = event.name;
  this.checkValid = function() {
    // checks the instance of schedule to make sure it's valid, i.e., no
    // students or contacts have more than 1 interview at a time, and that the
    // students all have the same number of interviews. This might be better as
    // a prototype
  };
};
