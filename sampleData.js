// I think I need to start making this more object-oriented. Have classes for
// student, contact, event, schedule, and cohort

var students = [
  {
    name: 'Iota',
    students: [
      {name: 'Alex Minge', cohort: 'Iota', email: 'alex@gmail.com'},
      {name: 'Caitlin Collins', cohort: 'Iota', email: 'caitlin@gmail.com'},
      {name: 'Kat Traxler', cohort: 'Iota', email: 'kat@gmail.com'},
      {name: 'Savio Nguyen', cohort: 'Iota', email: 'savio@gmail.com'},
      {name: 'Anthony Macki', cohort: 'Iota', email: 'anthony@gmail.com'},
      {name: 'Annette Tousley', cohort: 'Iota', email: 'annette@gmail.com'},
      {name: 'Moni Francesca', cohort: 'Iota', email: 'moni@gmail.com'},
      {name: 'Remy Allen', cohort: 'Iota', email: 'remy@gmail.com'},
      {name: 'Andrew Glenn', cohort: 'Iota', email: 'andrew@gmail.com'},
      {name: 'Andy Fehrenbach', cohort: 'Iota', email: 'andy@gmail.com'},
      {name: 'Josh Sternberg', cohort: 'Iota', email: 'josh@gmail.com'},
      {name: 'Juan Ball', cohort: 'Iota', email: 'juan@gmail.com'},
      {name: 'John Rauchy', cohort: 'Iota', email: 'john@gmail.com'},
      {name: 'Gwen Williams', cohort: 'Iota', email: 'gwen@gmail.com'},
      {name: 'Luis de la Espriella', cohort: 'Iota', email: 'luis@gmail.com'},
      {name: 'Kailey Colestock', cohort: 'Iota', email: 'kailey@gmail.com'},
      {name: 'Bennett Batzli', cohort: 'Iota', email: 'bennett@gmail.com'},
      {name: 'Kati Lueth', cohort: 'Iota', email: 'kati@gmail.com'}]
  },
  {
    name: 'Kappa',
    students: [
      {name: 'Enrique Ortega', cohort: 'Kappa', email: 'enrique@gmail.com'},
      {name: 'Matthew Keymer', cohort: 'Kappa', email: 'matthew@gmail.com'},
      {name: 'Tracey Van Haaften', cohort: 'Kappa', email: 'tracey@gmail.com'},
      {name: 'Aaron McGrath', cohort: 'Kappa', email: 'aaron@gmail.com'},
      {name: 'Biz Cook', cohort: 'Kappa', email: 'biz@gmail.com'},
      {name: 'Brady Peterson', cohort: 'Kappa', email: 'brady@gmail.com'},
      {name: 'Carl Peaslee', cohort: 'Kappa', email: 'carl@gmail.com'},
      {name: 'Evan Kimlinger', cohort: 'Kappa', email: 'evan@gmail.com'},
      {name: 'Hank Andre', cohort: 'Kappa', email: 'hank@gmail.com'},
      {name: 'Jeremy Hjelmeland', cohort: 'Kappa', email: 'jeremy@gmail.com'},
      {name: 'Joette Poehler', cohort: 'Kappa', email: 'joette@gmail.com'},
      {name: 'Kenzie Bultema', cohort: 'Kappa', email: 'kenzie@gmail.com'},
      {name: 'Mark Rothermal', cohort: 'Kappa', email: 'mark@gmail.com'},
      {name: 'Miles Johnson', cohort: 'Kappa', email: 'miles@gmail.com'},
      {name: 'Mike Elliott', cohort: 'Kappa', email: 'mike@gmail.com'},
      {name: 'Roman Hiebert', cohort: 'Kappa', email: 'roman@gmail.com'},
      {name: 'Riley Harrison', cohort: 'Kappa', email: 'riley@gmail.com'},
      {name: 'Michelle Wang', cohort: 'Kappa', email: 'michelle@gmail.com'},
      {name: 'Tommy Chester', cohort: 'Kappa', email: 'Tommy Chester@gmail.com'}]
  }
];

var contacts = [
  {name: 'Adam', company: 'The Nerdery', email: 'adam@gmail.com'},
  {name: 'Bob', company: 'The Nerdery', email: 'bob@gmail.com'},
  {name: 'Christina', company: 'Robert Half', email: 'christina@gmail.com'},
  {name: 'Dave', company: 'Best Buy', email: 'dave@gmail.com'},
  {name: 'Eva', company: 'Target', email: 'eva@gmail.com'},
  {name: 'Frank', company: 'Target', email: 'frank@gmail.com'},
  {name: 'Gale', company: 'SPS Commerce', email: 'gale@gmail.com'},
  {name: 'Heidi', company: 'Facebook', email: 'heidi@gmail.com'},
  {name: 'Ingrid', company: 'Yahoo', email: 'ingrid@gmail.com'},
  {name: 'Joesph', company: 'Amazon', email: 'joseph@gmail.com'},
  {name: 'Kelly', company: 'Uber', email: 'kelly@gmail.com'},
  {name: 'Linda', company: 'Apple', email: 'linda@gmail.com'},
  {name: 'Marcus', company: 'Target', email: 'marcus@gmail.com'},
  {name: 'Nate', company: 'The Nerdery', email: 'nate@gmail.com'},
  {name: 'Olivia', company: 'Digital People', email: 'olivia@gmail.com'},
  {name: 'Peter', company: 'Digital People', email: 'peter@gmail.com'},
  {name: 'Quinn', company: 'Microsoft', email: 'quinn@gmail.com'},
  {name: 'Robert', company: 'UnitedHealth Group', email: 'robert@gmail.com'},
  {name: 'Samantha', company: 'Best Buy', email: 'samantha@gmail.com'},
  {name: 'Ted', company: '3M', email: 'ted@gmail.com'},
  {name: 'Ulga', company: 'General Mills', email: 'ulga@gmail.com'},
  {name: 'Veronica', company: 'C. H. Robinson', email: 'veronica@gmail.com'},
  {name: 'Wanda', company: 'Wells Fargo', email: 'wanda@gmail.com'},
  {name: 'Xerxes', company: 'Aquent', email: 'xerxes@gmail.com'},
  {name: 'Yolanda', company: 'Empulse', email: 'yolanda@gmail.com'},
  {name: 'Zeus', company: 'Google', email: 'zeus@gmail.com'}
];

var sampleSchedule = {
  'time1': {'contact1': 'student1', 'contact2': 'student2'},
  'time2': {'contact1': 'student2', 'contact2': 'student1'},
  'time3': {},
  'time4': {},
  'time5': {},
  'time6': {},
  'time7': {},
  'time8': {},
  'time9': {}
};

var sampleCohort = {
  name: 'Iota'
};

var sampleEvent = {
  name: 'Iota Mock Interviews',
  cohort: sampleCohort,
  date: '3/10/2016',
  startTime: '1:00pm',
  interviewLength: 15,
  breakLength: 5,
  numInterviews: 9,
  schedule: sampleSchedule,
  checkValidSchedule: function(schedule) {
    // checks to see if the schedule is valid. Returns false if it isn't, and
    // true if it is
  },
  generateNewSchedule: function() {
    // makes a new schedule
  },
  saveSchedule: function(schedule) {
    this.schedule = schedule;
  }
};