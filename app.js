function addComment() {
    var commentInput = document.getElementById("commentInput").value;
    if (commentInput.trim() !== "") {
      var commentDiv = document.createElement("div");
      commentDiv.className = "comment";
      commentDiv.innerHTML = commentInput + '<button class="addReplyBtn" onclick="addReply(this)">Add a reply</button>';
      document.getElementById("comments").appendChild(commentDiv);
      document.getElementById("commentInput").value = "";
    }
  }
  
  function addReply(btn) {
    var parentComment = btn.parentNode;
    var replyInput = document.createElement("textarea");
    replyInput.placeholder = "Add a reply";
    var submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.onclick = function() { submitReply(this, parentComment); };
    parentComment.appendChild(replyInput);
    parentComment.appendChild(submitBtn);
    btn.style.display = "none";
  }
  
  function submitReply(btn, parentComment) {
    var replyInput = parentComment.querySelector("textarea");
    var replyText = replyInput.value;
    if (replyText.trim() !== "") {
      var replyDiv = document.createElement("div");
      replyDiv.className = "reply";
      replyDiv.innerHTML = replyText + '<button class="addReplyBtn" onclick="addReply(this)">Add a reply</button>';
      parentComment.appendChild(replyDiv);
      replyInput.remove();
      btn.remove();
    }
  }
  