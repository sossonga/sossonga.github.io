const links = document.querySelectorAll(".post-link");
const content = document.querySelector("#post-item");

links.forEach(link => {
  link.addEventListener("click", async (event) => {
    event.preventDefault();

    const url = link.dataset.postUrl;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const html = await response.text();

      // Turn the returned HTML into a document we can query
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      // Grab the part of the post page we actually want
      const article = doc.querySelector("article");

      if (article) {
        content.innerHTML = article.innerHTML;
      }
    } catch (error) {
      console.error("Could not load post:", error);
      content.innerHTML = "<p>Sorry, the post could not be loaded.</p>";
    }
  });
});
