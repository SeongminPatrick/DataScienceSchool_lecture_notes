
from bs4 import BeautifulSoup


url = "http://okky.kr/articles/questions"
response = requests.get(url)
print(response.text)
soup =  BeautifulSoup(response.txt, 'html. parser')
list = soup.select('li.list-group-item')

li = list[0]

a = li.find('h5').find('a')
print(a)
