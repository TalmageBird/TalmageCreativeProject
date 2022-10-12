let url = "https://api.goprogram.ai/inspiration";
fetch(url)
    .then(function(response) {
            if (response.status != 200) {
                return {
                    text: "Error: " + response.statusText
                }
            }
            
                return response.json();
            }).then(function(json) {
            putToDOM(json.quote + "\n" + "<br>" + "-" + json.author);
    
        });
    

function putToDOM(quote) {
    document.getElementById('inspiration').innerHTML = quote;
}