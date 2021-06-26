from bs4 import BeautifulSoup
import os
import re
import requests

URL = 'https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/'
# Нужен html.parser - чтобы не было варнинга
soup = BeautifulSoup(requests.get(URL).content, 'html.parser')

# Получаем ссылку из кнопки
# почему то на сайте лежит скрытая кнопка и с кривой ссылкой на файлы сервера
# поэтому берем вторую кнопку
# Переделать красивый подбор
relative_path = soup.find_all("div", {"class": "panel-block"})[0].next_element.next_element.next_element.next_element.next_element["href"]

href_text = soup.find_all("div", {"class": "panel-block"})[0].next_element.next_element.next_element.next_element.next_element.next_element

build_number = re.findall(r'\((\d{4})\)', href_text)[0]
latest_stable_url = "{}{}".format(URL, relative_path[2:])
print("Latest stable build ({}) @ {}".format(build_number, latest_stable_url))
os.environ["CFX_BUILD"] = build_number

os.system("wget " + latest_stable_url)