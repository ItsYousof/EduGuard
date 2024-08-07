function search() {
    let searchType = document.getElementById("search-type").value;
    let searchInput = document.getElementById("search").value;
    let searchResults = document.getElementById("search-results");
    searchResults.innerHTML = "";

    if (searchType === "books") {
        searchBooks(searchInput, searchResults);
    } else if (searchType === "articles") {
        searchArticles(searchInput, searchResults);
    }
}

function searchBooks(query, searchResults) {
    let url = `https://openlibrary.org/search.json?q=${query}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let books = data.docs;
        books.forEach(book => {
            let bookInfo = `
                <div class="book">
                    <h3>${book.title}</h3>
                    <p>${book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
                    <p>${book.first_publish_year || 'No publication date'}</p>
                    <a href="https://openlibrary.org${book.key}" target="_blank">Read more</a>
                </div>
            `;
            searchResults.innerHTML += bookInfo;
        })
    })
}

function searchArticles(query, searchResults) {
    let apiKey = 'k1Vq3ZAGEhDRBvqNey9z79XGJjg8IwEd';
    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let articles = data.response.docs;
        articles.forEach(article => {
            let articleInfo = `
                <div class="article">
                    <h3>${article.headline.main}</h3>
                    <p>${article.snippet}</p>
                    <a href="${article.web_url}" target="_blank">Read more</a>
                </div>
            `;
            searchResults.innerHTML += articleInfo;
        })
    })
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("search").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            search();
        }
    })
})