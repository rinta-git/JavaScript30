const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const date = new Date();
const currentYear = date.getFullYear();
const isAdultOverNinteen = people.some(
  (person) => currentYear - person.year >= 19
);
console.log(isAdultOverNinteen);
// Array.prototype.every() // is everyone 19 or older?
const areAllAdultOverNinteen = people.every(
  (person) => currentYear - person.year >= 19
);
console.log({ areAllAdultOverNinteen });
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const searchedComment = comments.find((comment) => comment.id == 823423);
console.log(searchedComment);
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const deleteCommentIndex = comments.findIndex(
  (comment) => comment.id === 823423
);

const newComments = [
  ...comments.slice(0, deleteCommentIndex),
  ...comments.slice(deleteCommentIndex + 1),
];
console.table(newComments); //slice will keeps original array

console.table(comments); //original array

let deletedComment = comments.splice(deleteCommentIndex, 1); //splice will modify original array & return deleted one
console.table(comments);
console.log(deletedComment);
