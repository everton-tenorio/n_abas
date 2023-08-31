document.getElementById('captureButton').addEventListener('click', function() {
    const all_urls = [];
    chrome.tabs.query({}, function(tabs) {
      
        for (let i = 0; i < tabs.length; i++) {
            //var url = ("Tab " + (i + 1) + tabs[i].title + tabs[i].url + "\r\n")
            var actual_url = `\r${(i + 1)} - ${tabs[i].title}:\n${tabs[i].url}\n`
            all_urls.push(actual_url)
        }

        var blob = new Blob(all_urls, { type: 'text/plain' });

        // Criar um objeto URL temporário para o Blob
        var url = URL.createObjectURL(blob);

        // Simular um clique no link para iniciar o download
        var link = document.createElement('a');
        link.href = url;
        link.download = all_urls.length+'_abas.txt'; // Nome do arquivo que será baixado
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();

        // Remover o link após o download
        document.body.removeChild(link);
    });
});

  
  