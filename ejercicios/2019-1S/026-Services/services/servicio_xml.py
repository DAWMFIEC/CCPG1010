from bs4 import BeautifulSoup
from fake_useragent import UserAgent
import requests

url = "https://www.eltelegrafo.com.ec/contenido/categoria/3/politica?format=feed"

ua = UserAgent()
headers = {'User-Agent':str(ua.chrome)}

response = requests.get(url,  headers=headers)


#XML Parsing
soup = BeautifulSoup(response.content, 'lxml')
titles = soup.find_all('title')

for title in titles:
	print(title.text)