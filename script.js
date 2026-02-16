function search() {
    const text = document.getElementById("query").value.trim();
    const dork = document.getElementById("dork").value;

    if (text === "") {
        alert("Please enter a search term");
        return;
    }

    const finalQuery = `${dork} "${text}"`;
    const url = "https://www.google.com/search?q=" + encodeURIComponent(finalQuery);

    window.open(url, "_blank");
}