// 18. select all the users who live in this zipcode "92998-3874"
db.users.find({ "address.zipcode": { $eq: "92998-3874" } });
db.users.findOne({ "address.zipcode": { $eq: "92998-3874" } });

// 19. select all the users who live in this lat "-37.3159"
db.users.findOne({ "address.geo.lat": { $eq: "-37.3159" } });

// Array
// 20. Select all the users who has the hobby of "Coding"
// in this or that
db.users.find({ hobbies: { $in: ["Coding"] } });

// 20.1. Select all the users who has the hobby of "Coding" or "Sleep"
// in this or that
db.users.find({ hobbies: { $in: ["Coding", "Sleep"] } });

// 21. Select all the users who has the hobby of both "Jogging" & "Cycle"
db.users.find({ hobbies: { $all: ["Jogging", "Cycle"] } });

// 22. Sort the user alphabetically
db.users.find({}, {}, { sort: { name: 1 } });

// 23. Sort the user alphabetically in descending
db.users.find({}, {}, { sort: { name: -1 } });

// 24. Find the first 4 users alphabetically
db.users.find({}, {}, { sort: { name: 1 }, limit: 4 });

// 25. Find the second four users sorted alphabetically
db.users.find({}, {}, { sort: { name: 1 }, limit: 4, skip: 4 });

// 26. Sort the students alphabetically
db.students.find({}, {}, { sort: { name: 1 } });

// Sort the students based on the marks in each subject
db.students.find().sort({ subject: 1, marks: -1 });

// find compnay drives with students
db.companyDrive.find({}, { _id: 0 });
/* 

[
  {
    "company": "TCS",
    "date": "2020-10-25",
    "students": ["sam@example.com"]
  },
  {
    "company": "TCS",
    "date": "2023-10-02",
    "students": ["sam@example.com"]
  },
  {
    "company": "TCS",
    "date": "2020-10-22",
    "students": ["sam@example.com"]
  },
  {
    "company": "TCS",
    "date": "2023-10-02",
    "students": ["sam@example.com"]
  }
]

*/
