import requests
from bs4 import BeautifulSoup
# 
import json
# 

baseurl = 'https://www.sarenza.it'

headers = {
	'User-Agent': 'Mozilla / 5.0 (Windows NT 10.0; Win64; x64) AppleWebKit / 537.36 (KHTML, come Gecko) Chrome / 89.0.4389.90 Safari / 537.36'
}

productlinks = []

jsonFile = open("data.json", "a")

for x in range(1,2):
	r = requests.get(f'https://www.sarenza.it/store/product/list/view?sort=newest&type=76&index={x}&count=100')
	print(r)
	soup = BeautifulSoup(r.content, 'lxml')
	productlist = soup.find_all('li', class_='vignette')
	for item in productlist:
		for link in item.find_all('a', href=True):
			productlinks.append(baseurl + link['href'])

i = 0;

head = '[\n'
end = ']'

jsonFile.write(head)

counter = 0

for link in productlinks:
    	counter += 1


for link in productlinks:
	r = requests.get(link, headers = headers)
	soup = BeautifulSoup(r.content, 'lxml')

	name = soup.find('a', class_='brand').text.strip()
	model = soup.find('h1', class_='infos').text.strip().replace("\n", " ")
	price = soup.find('span', class_='product-price').text.strip()
	color = soup.find('small', class_='color-name').text.strip()
	sex = soup.find('li', class_='group-tab active').text.strip()
	img = soup.find('img', class_='zoom')
	img = img['src']
	i += 1
	id = i

	if(i == counter):
		shoe = '\t{\n\t"id":' + '"' + str(i) + '"' + ',\n\t "name":' + '"' + name + '"' + ', \n\t "model":' + '"' + model + '"' + ', \n\t "price":' + '"' + price + '"' + ', \n\t "color":' + '"' + color + '"' + ', \n\t "sex":' + '"' + sex + '"' +  ', \n\t "img":' + '"' + img + '"' + ' \n\t} \n'
	else:
		shoe = '\t{\n\t"id":' + '"' + str(i) + '"' + ',\n\t "name":' + '"' + name + '"' + ', \n\t "model":' + '"' + model + '"' + ', \n\t "price":' + '"' + price + '"' + ', \n\t "color":' + '"' + color + '"' + ', \n\t "sex":' + '"' + sex + '"' +  ', \n\t "img":' + '"' + img + '"' + ' \n\t}, \n'

	jsonFile.write(shoe)

	print(i)

jsonFile.write(end)