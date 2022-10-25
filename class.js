class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }
  upvote() {
    this.votesQty += 1;
  }
}

const firstComment = new Comment("Hello");
firstComment.upvote();
console.log(firstComment);
const secondComment = new Comment("Hi");
console.log(secondComment);
const thirdComment = new Comment("Hi guys");
console.log(thirdComment.votesQty);
