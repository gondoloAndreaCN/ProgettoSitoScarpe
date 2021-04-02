#libreria per richieste al server 
import requests
#beautifulsoup per prelevare dati da file xml/html
from bs4 import BeautifulSoup

#stringa che contiene link sito
baseurl = 'https://www.zalando.it/'

#oggetto???
#header dello user agent della richiesta 
headers = {
	'User-Agent':'Mozilla / 5.0 (Windows NT 10.0; Win64; x64) AppleWebKit / 537.36 (KHTML, come Gecko) Chrome / 89.0.4389.90 Safari / 537.36'
}

#array con link prodotti
productlinks = []

#ciclo for per prendere tutte le pagine
for x in range(1,2):
	
	#richiesta per ottenere la pagina con fString
	#fString= va a prendere il valore attuale della x
	r = requests.get(f'https://www.zalando.it/scarpe/?p={x}')

	#per prendere il risulato presente in r e parsificare in lxml
	soup = BeautifulSoup(r.content, 'lxml')
	
	#array per la lista dei prodotti
	#soup.find.all per trovare tutti i tag html con article e attributo class quello scritto
	productlist = soup.find_all('article', class_= '_0mW-4D _0xLoFW JT3_zV mo6ZnF jtKZOh _78xIQ-')
	#foreach per tutti gli elementi
	for item in productlist:
		#prendo link dentro item
		for link in item.find_all('a', href = True):
			#per ogni link trovato lo aggiungo al link del sito per avere il prodotto
			productlinks.append(baseurl+link['href'])

#per ogni pagina singola del prodotto
for link in productlinks:
	
	#request per avere la pagina perchè prima avevo solo il link
	r = requests.get(link, headers = headers)
	
	#per parsificare il contenuto in lxml
	soup = BeautifulSoup(r.content, 'lxml')
	#vado a prendere le caratteristiche del prodotto
	#.text.strip() per trasformarlo in testo da xml
	name = soup.find('h1', class_= 'OEhtt9 ka2E9k uMhVZi z-oVg8 pVrzNP w5w9i_ _1PY7tW _9YcI4f').text.strip()
	price = soup.find('span', class_='uqkIZw ka2E9k uMhVZi FxZV-M z-oVg8 pVrzNP').text.strip()
	color = soup.find('span', class_='u-6V88 ka2E9k uMhVZi dgII7d z-oVg8 pVrzNP').text.strip()
	img = soup.find('img', src = True)
	#oggetto con tutti i campi
	shoe = {
		'name': name,
		'price': price,
		'color': color,
		'img': img
	}
	print(shoe)
