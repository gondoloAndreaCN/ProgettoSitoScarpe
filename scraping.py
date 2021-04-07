#questo programma è un test
#la prova viene effettuata su un sito che non vende scarpe 

import requests
from bs4 import BeautifulSoup

baseurl = 'https://www.thewhiskyexchange.com/'

headers = {
	'User-Agent': 'Mozilla / 5.0 (Windows NT 10.0; Win64; x64) AppleWebKit / 537.36 (KHTML, come Gecko) Chrome / 89.0.4389.90 Safari / 537.36'
}

productlinks = []

for x in range(1,6):
	r = requests.get(f'https://www.thewhiskyexchange.com/c/35/japanese-whisky?pg={x}#productlist-filter')
	#print(r)
	soup = BeautifulSoup(r.content, 'lxml')
	#print(soup)
	productlist = soup.find_all('li', class_='product-grid__item')
	#print(productlist)
	for item in productlist:
		for link in item.find_all('a', href=True):
			productlinks.append(baseurl + link['href'])

for link in productlinks:
	r = requests.get(link, headers = headers)
	soup = BeautifulSoup(r.content, 'lxml')

	name = soup.find('h1', class_='product-main__name').text.strip()
	try:
		rating = soup.find('span', class_='review-overview__rating star-rating star-rating--30').text.strip()
	except:
		rating = 'no rating'
	price = soup.find('p', class_='product-action__price').text.strip()
	whisky = {
		'name': name,
		'rating': rating,
		'price': price
	}
	print(whisky)