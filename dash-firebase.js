var ref = new Firebase("https://dashapp.firebaseio.com");


$("#add-book").bind("click", function() {
    var titleRaw = $("#book-title");
    var authorRaw = $("#book-author");
    var contentRaw = $("#book-content");
    var bookTitle = $.trim(titleRaw.val());
    var bookAuthor = $.trim(authorRaw.val());
    var bookContent = $.trim(contentRaw.val());
    
    var booksRef = ref.child("books");
    
    if (bookTitle.length === 0) {
        alert('contents are required to continue!');
        } else {
        booksRef.push({title: "asfadsfsd", author: "asdfasdfads", content: "asdfsadfsd"}, function(error) {
            if (error !== null) {
                alert('Unable to push comments to Firebase!');
            } else {
              console.log('data sent!');
            }
        });
 
        titleRaw.val("");
        authorRaw.val("");
        contentRaw.val("");
    }
 
    return false;
});