import requests
from bs4 import BeautifulSoup
import pandas as pd
import time
import os
from urllib.parse import urlparse

os.environ.setdefault('DJANGO_SETTINGS_MODULE',"TransferMarket_Django.settings")
import django
django.setup()
from crawled_data.models import PlayerValue



headers = {
    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36 Edg/89.0.774.77"}


def extractInfo(info,_info):
    player = info.find_all("td")
    _position=_info
    ranking = int(player[0].text)
    player_img = player[2].find("a").find("img")['src']
    name = player[3].text
    position = player[4].text
    age = player[5].text
    player_value = player[8].find("b").text

    return{
        "specific_id":ranking,
        "_position":_position,
        "ranking": ranking,
        "player_image": player_img,
        "name": name,
        "position": position,
        "age": age,
        "value": player_value
    }


def extract(lastPage, url,_info):
    PlayerInfo = []
    print(lastPage)
    for page in range(1, lastPage+1):
        URL = f"{url}{page}"
        r = requests.get(URL, headers=headers)
        soup = BeautifulSoup(r.text, 'html.parser')
        player_info = soup.find_all('tr', {'class': ['odd', 'even']})
        for info in player_info:
            pInfo = extractInfo(info,_info)
            PlayerInfo.append(pInfo)
            # print("pInfo:", pInfo)
    return PlayerInfo

# all - forward - mid - defend - goalkeeper
urls=[
    "https://www.transfermarkt.com/marktwertetop/wertvollstespieler?page=",
    "https://www.transfermarkt.com/spieler-statistik/wertvollstespieler/marktwertetop/plus/ajax/yw1/ausrichtung/Sturm/spielerposition_id/alle/altersklasse/alle/jahrgang/0/land_id/0/kontinent_id/0/yt0/Show/0//page/",
    "https://www.transfermarkt.com/spieler-statistik/wertvollstespieler/marktwertetop/plus/ausrichtung/Mittelfeld/spielerposition_id/alle/altersklasse/alle/jahrgang/0/land_id/0/kontinent_id/0/yt0/Show/0//page/",
    "https://www.transfermarkt.com/spieler-statistik/wertvollstespieler/marktwertetop/plus/ausrichtung/Abwehr/spielerposition_id/alle/altersklasse/alle/jahrgang/0/land_id/0/kontinent_id/0/yt0/Show/0//page/",
    "https://www.transfermarkt.com/spieler-statistik/wertvollstespieler/marktwertetop/plus/ausrichtung/Torwart/spielerposition_id/alle/altersklasse/alle/jahrgang/0/land_id/0/kontinent_id/0/yt0/Show/0//page/",
]

def getPlayerValue(url,info):
    # url="https://www.transfermarkt.com/marktwertetop/wertvollstespieler?page="
   
    lastPages = 4
    PlayerValueInfo = extract(lastPages, url,info)
    # ranking = []
    # player_image = []
    # name = []
    # position = []
    # age = []
    # nation_image = []
    # nation = []
    # team_image = []
    # team = []
    # value = []
    # # print(PlayerValueInfo[0]['ranking'])
    # for i in range(0, len(PlayerValueInfo)):
    #     ranking.append(PlayerValueInfo[i]['ranking'])
    #     player_image.append(PlayerValueInfo[i]['player_image'])
    #     name.append(PlayerValueInfo[i]['name'])
    #     position.append(PlayerValueInfo[i]['position'])
    #     age.append(PlayerValueInfo[i]['age'])
    #     nation_image.append(PlayerValueInfo[i]['nation_image'])
    #     nation.append(PlayerValueInfo[i]['nation'])
    #     team_image.append(PlayerValueInfo[i]['team_image'])
    #     team.append(PlayerValueInfo[i]['team'])
    #     value.append(PlayerValueInfo[i]['value'])

    # df = pd.DataFrame({
    #     "ranking": ranking,
    #     "player_image": player_image,
    #     "name": name,
    #     "position": position,
    #     "age": age,
    #     "nation_image": nation_image,
    #     "nation": nation,
    #     "team_image": team_image,
    #     "team": team,
    #     "value": value
    # })
    # df.to_csv('trasfermarket.csv', index=False)
    # print (PlayerValueInfo)
    return PlayerValueInfo




def addNewItem(playerValue):
    last_inserted_items=PlayerValue.objects.last()
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
        PlayerValue(
            specific_id=item['specific_id'],
            _position=item['_position'],
            ranking= item['ranking'],
            player_image= item['player_image'],
            name= item['name'],
            position= item['position'],
            age= item['age'],
            value= item['value']
        ).save()
    
    return addItems

for i in range(0,5):
    url=urls[i]
    info=""
    if i==0:
        info="all"
    elif i==1:
        info="forward"
    elif i==2:
        info="midfielder"
    elif i==3:
        info="defender"
    elif i==4:
        info="goalkeeper"    
    player=getPlayerValue(url,info)
    addNewItem(player)

# addNewItem(player)