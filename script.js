

// MY MEMORIES - WEBSITE INTERACTIONS

// Open a highlight

document.querySelectorAll(".highlight").forEach((highlight) => {

  highlight.addEventListener("click", () => {

    const name = highlight.querySelector("span").textContent;

    alert("Opening your " + name + " memories ♡");

  });

});

// Open a post

document.querySelectorAll(".post").forEach((post) => {

  post.addEventListener("click", () => {

    alert("Your individual memory will open here ♡");

  });

});

// Bottom navigation

document.querySelectorAll(".bottom-nav span").forEach((item) => {

  item.addEventListener("click", () => {

    const section = item.textContent;

    if (section === "⌂") {

      alert("Home ♡");

    } else if (section === "⌕") {

      alert("Explore ♡");

    } else if (section === "＋") {

      alert("Create a new post ♡");

    } else if (section === "♡") {

      alert("Activity ♡");

    } else if (section === "◉") {

      alert("Your profile ♡");

    }

  });

});

console.log("My Memories is ready!");
