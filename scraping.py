#questo programma è un test
#la prova viene effettuata su un sito che non vende scarpe 

#import delle librerie
#beautifulsoup modulo della libreria bs4 per estrapolare dati da file html, xml
#requests: per richieste http 
import requests
from bs4 import BeautifulSoup

#url base del sito
baseurl = 'https://www.thewhiskyexchange.com/'

#oggetto per compilare il campo user agent di una richiesta http
headers = {
	'User-Agent': 'Mozilla / 5.0 (Windows NT 10.0; Win64; x64) AppleWebKit / 537.36 (KHTML, come Gecko) Chrome / 89.0.4389.90 Safari / 537.36'
}

#vettore conterrà i link di ogni pagina singola di ogni prodotto
productlinks = []

#ciclo for per estrarre il link di ogni pagina del singolo prodotto
for x in range(1,6):
	#fstring -> verrà inserito il valore della x nello spazio indicato dalle {}
	#requests effetua una richiesta http e il risultato finisce nella var. r
	r = requests.get(f'https://www.thewhiskyexchange.com/c/35/japanese-whisky?pg={x}#productlist-filter')
	#la risposta del server in lxml in quanto bs offre diversi parser
	soup = BeautifulSoup(r.content, 'lxml')
	#funione per trovare nell'oggetto soup tag html
	productlist = soup.find_all('li', class_='product-grid__item')
	#ciclo for per estrarre da ogni prodotto il link della sua pagina singola
	for item in productlist:
		for link in item.find_all('a', href=True):
			#combinazione di stringhe per ottenere l'url della pagina singola
			productlinks.append(baseurl + link['href'])

#ciclo for per recuperare le informazioni di ogni prodotto dalla sua pagina singola
for link in productlinks:
	#richiesta http
	r = requests.get(link, headers = headers)
	#parser della risposta del server
	soup = BeautifulSoup(r.content, 'lxml')

	#recupero delle singole informazioni 
	#funzione text.strip() per rendere leggibile la stringa
	name = soup.find('h1', class_='product-main__name').text.strip()
	try:
		rating = soup.find('span', class_='review-overview__rating star-rating star-rating--30').text.strip()
	except:
		rating = 'no rating'
	#reviews = soup.find('span', class_='review-overview__count')
	price = soup.find('p', class_='product-action__price').text.strip()
	#creazione di un oggetto che contenga gli elementi trovati
	whisky = {
		'name': name,
		'rating': rating,
		#'reviews': reviews,
		'price': price
	}
	print(whisky)