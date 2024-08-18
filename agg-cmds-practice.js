// 0 Find te totalmarks scored by badri
db.students.aggregate([
  {
    $match: { name: "Badri" },
  },
  {
    $group: {
      _id: "$name",
      totalMarks: {
        $sum: "$marks",
      },
    },
  },
  {
    $project: {
      name: "$_id",
      totalMarks: 1,
      _id: 0,
    },
  },
]);

// 1. Find the maximum mark scored
db.students.aggregate([
  {
    $group: {
      _id: "",
      maxMark: {
        $max: "$marks",
      },
    },
  },
  {
    $project: {
      maxMark: 1,
      _id: 0,
    },
  },
]);
// 2. find the minimum mark scored
db.students.aggregate([
  {
    $group: {
      _id: "",
      minMark: {
        $min: "$marks",
      },
    },
  },
  {
    $project: {
      minMark: 1,
      _id: 0,
    },
  },
]);
// 3. find the avg mark scored
db.students.aggregate([
  {
    $group: {
      _id: "",
      avgMark: {
        $avg: "$marks",
      },
    },
  },
  {
    $project: {
      avgMark: 1,
      _id: 0,
    },
  },
]);

// sum of all the marks

// with grouping
// find avg marks for each students
db.students.aggregate([
  {
    $group: {
      _id: "$name",
      avgMark: {
        $avg: "$marks",
      },
    },
  },
  {
    $project: {
      name: "$_id",
      avgMark: 1,
      _id: 0,
    },
  },
]);

// find the max marks for each students
db.students.aggregate([
  {
    $group: {
      _id: "$name",
      maxMark: {
        $max: "$marks",
      },
    },
  },
  {
    $project: {
      name: "$_id",
      maxMark: 1,
      _id: 0,
    },
  },
]);

// find the total marks for each students
db.students.aggregate([
  {
    $group: {
      _id: "$name",
      totalMarks: {
        $sum: "$marks",
      },
    },
  },
  {
    $project: {
      name: "$_id",
      totalMarks: 1,
      _id: 0,
    },
  },
]);

// Find the total marks only for Daniel
// Match --> filteration stage
db.students.aggregate([
  {
    $match: {
      name: "Badri",
    },
  },
  {
    $group: {
      _id: "$name",
      totalMarks: {
        $sum: "$marks",
      },
    },
  },
  // grouping with projection
  // get the fields as name, totalMarks
  {
    $project: {
      name: "$_id",
      totalMarks: 1,
      _id: 0,
    },
  },
]);

// find the number todos for each userId
// Using aggregate
db.todos.aggregate([
  {
    $group: {
      _id: "$userId",
      noOfTodos: {
        $sum: 1, // this counts the number of docs per user
      },
    },
  },
  {
    $project: {
      userId: "$_id",
      noOfTodos: 1,
      _id: 0,
    },
  },
]);

// find the number of todos which is not completed yet for each student
db.todos.aggregate([
  { $match: { isCompleted: false } },
  {
    $group: {
      _id: "$userId",
      noOfTodos: {
        $sum: 1, // this counts the number of docs per user
      },
    },
  },
  {
    $project: {
      userId: "$_id",
      noOfTodos: 1,
      _id: 0,
    },
  },
]);

// Find all the items which is urgent
db["product-requirements"].find({ status: "urgent" });

// find total urgent qty for each items
db["product-requirements"].aggregate([
  {
    $match: {
      status: "urgent",
    },
  },
  {
    $group: {
      _id: "$product",
      totalQty: {
        $sum: "$qty",
      },
    },
  },
  {
    $project: {
      product: "$_id",
      totalQty: 1,
      _id: 0,
    },
  },
]);

// update the maths mark for Badri as 95
db.students.updateOne(
  { name: "Badri", subject: "Maths" }, // filter
  { $set: { marks: 95 } } // update
);

// name of user 'Sam' is wrong it should be 'Samuel'
db.students.updateMany(
  { name: "Sam" }, // filter
  { $set: { name: "Samuel" } } // update
);

// upsert
// Update the maths mark for Jadeja to be 100

// query with upsert will match 0 documents
db.students.updateOne(
  { name: "Jadeja", subject: "Maths" }, // filter
  { $set: { marks: 100 } } // update
);

// with upsert
db.students.updateOne(
  { name: "Jadeja", subject: "Maths" }, // filter
  { $set: { marks: 100 } }, // update
  { upsert: true } // options
);

// replaceOne - Given document gets replaced in place of the old document
db.students.replaceOne(
  { name: "Jadeja" }, // filter
  { name: "Ravindra Jadeja" } // document to be replaced with
);

// Delete One
// Delete the student with name Ravindra Jadeja
db.students.deleteOne({ name: "Ravindra Jadeja" });

//  Schoold removed the English Subject, remove all the marks entry with subject as English
db.students.deleteMany({ subject: "English" });
