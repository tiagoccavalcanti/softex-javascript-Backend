/* fetch("https://api.adviceslip.com/advice").then((data) => {
    return data.json();
}).then((data) => {
    console.log(data.slip.advice);
})
 */

fetch("http://api.funtranslations.com/translate/morse.json", {
    method: "POST",
    headers: { "content-Type": "application/json"},
    body: JSON.stringify({ text: "hello world"})
})
.then(response => response.json())
.then(data => console.log("código morse", data.contents.translated))
.catch(console.error);