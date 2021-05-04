import requests
from bs4 import BeautifulSoup
import pandas as pd
import time
import os
from urllib.parse import urlparse

os.environ.setdefault('DJANGO_SETTINGS_MODULE',"TransferMarket_Django.settings")
import django
django.setup()
from crawled_data.models import GoalKeeperValue



headers = {
    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36 Edg/89.0.774.77"}


def extractInfo(info):
    player = info.find_all("td")
    ranking = int(player[0].text)
    player_img = player[2].find("a").find("img")['src']
    name = player[3].text
    position = player[4].text
    age = player[5].text
    nation_img = player[6].find("img")['src']
    nation_title = player[6].find("img")['title']
    team_img = player[7].find("a").find("img")['src']
    team_title = player[7].find("a").find("img")['alt']
    player_value = player[8].find("b").text

    return{
        "specific_id":ranking,
        "ranking": ranking,
        "player_image": player_img,
        "name": name,
        "position": position,
        "age": age,
        "nation_image": nation_img,
        "nation": nation_title,
        "team_image": team_img,
        "team": team_title,
        "value": player_value
    }


def extract(lastPage, url):
    PlayerInfo = []
    print(lastPage)
    for page in range(1, lastPage+1):
        URL = f"{url}{page}"
        r = requests.get(URL, headers=headers)
        soup = BeautifulSoup(r.text, 'html.parser')
        player_info = soup.find_all('tr', {'class': ['odd', 'even']})
        for info in player_info:
            pInfo = extractInfo(info)
            PlayerInfo.append(pInfo)
            # print("pInfo:", pInfo)
    return PlayerInfo


def getGoalKeeperValue():
    
    url="https://www.transfermarkt.com/spieler-statistik/wertvollstespieler/marktwertetop/plus/ausrichtung/Torwart/spielerposition_id/alle/altersklasse/alle/jahrgang/0/land_id/0/kontinent_id/0/yt0/Show/0//page/"
    # url = "https://www.transfermarkt.com/marktwertetop/wertvollstespieler?ajax=yw1/0//"
    # url = "https://www.transfermarkt.com/spieler-statistik/wertvollstespieler/marktwertetop"
    # lastPages = getLastPage(url)
    lastPages = 4
    PlayerValueInfo = extract(lastPages, url)
    
    # print (PlayerValueInfo)
    return PlayerValueInfo


goalKeeper= getGoalKeeperValue()

def addNewItem(playerValue):
    last_inserted_items=GoalKeeperValue.objects.last()
    if last_inserted_items is None:
        last_inserted_specific_id=""
    else:
        last_inserted_specific_id=getattr(last_inserted_items,'specific_id')

    addItems=[]
    for item in playerValue:
        if item['specific_id']==last_inserted_specific_id:
            break
        addItems.append(item)
    
    # addItems.reverse()

    for item in addItems:
        print("new item added!" + item['name'])
        print(item)
        GoalKeeperValue(
            specific_id=item['specific_id'],
            ranking= item['ranking'],
            player_image= item['player_image'],
            name= item['name'],
            position= item['position'],
            age= item['age'],
            nation_image= item['nation_image'],
            nation= item['nation'],
            team_image= item['team_image'],
            team= item['team'],
            value= item['value']
        ).save()
    
    return addItems

addNewItem(goalKeeper)