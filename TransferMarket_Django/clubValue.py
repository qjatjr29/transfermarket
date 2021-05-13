import requests
from bs4 import BeautifulSoup
import pandas as pd
import time
import os
from urllib.parse import urlparse

os.environ.setdefault('DJANGO_SETTINGS_MODULE',"TransferMarket_Django.settings")
import django
django.setup()
from crawled_data.models import ClubValue


headers = {
    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36 Edg/89.0.774.77"}





def extractInfo(info):
    # ClubInfo = []
    club = info.find_all("td")
    ranking = int(club[0].text)
    specific_id= ranking
    club_img = club[1].find("a").find("img")['src']
    name = club[2].find("a").text
    Competition = club[3].find("a")['title']
    club_value = club[4].find("b").text
    
  
    return{
        "specific_id":specific_id,
        "ranking": ranking,
        "club_image":club_img,
        "name": name,
        "Competition": Competition,
        "club_value": club_value
    }


def extract(lastPage, url):
    clubs=[]
    # ClubInfo = []
    print(lastPage)
    for page in range(1, lastPage+1):
        URL = f"{url}{page}"
        r = requests.get(URL, headers=headers)
        soup = BeautifulSoup(r.text, 'html.parser')
        club_info = soup.find_all('tr', {'class': ['odd', 'even']})
        for info in club_info:
            CInfo = extractInfo(info)
            # ClubInfo.append(CInfo)
            clubs.append(CInfo)
    # return ClubInfo
    return clubs


def getClubValue():
    url = "https://www.transfermarkt.com/spieler-statistik/wertvollstemannschaften/marktwertetop?page="
    
    lastPages = 2
 
    ClubValue = extract(lastPages, url)
    # ranking = []
    # club_image=[]
    # name = []
    # Competition = []
    # club_value = []
    # for i in range(0, len(ClubValue)):
    #     ranking.append(ClubValue[i]['ranking'])
    #     name.append(ClubValue[i]['name'])
    #     club_image.append(ClubValue[i]['club_image'])
    #     Competition.append(ClubValue[i]['Competition'])
    #     club_value.append(ClubValue[i]['club_value'])

    # df = pd.DataFrame({
    #     "ranking": ranking,
    #     "club_image": club_image,
    #     "name": name,
    #     "Competition": Competition,
    #     "club_value": club_value
    # })


    # # df = pd.DataFrame(ClubValue, columns=[
    # #                   'ranking', 'club image', 'club', 'league image', 'league', 'value(억)'])
    # df.to_csv('club_trasfermarket.csv', index=False, encoding='utf-8')


    return ClubValue


club = getClubValue()
# print("dididi ",club)
def addNewItems(clubValues):
    last_inserted_items=ClubValue.objects.last()
    if last_inserted_items is None:
        last_inserted_specific_id=""
    else:
        last_inserted_specific_id=getattr(last_inserted_items,'specific_id')
        # last_inserted_ranking=last_inserted_items[0]

    addItems=[]
    print(ClubValue)
    for item in clubValues:
      
        if item['specific_id']==last_inserted_specific_id:
            break
        addItems.append(item)
    
    # addItems.reverse()
    print(addItems)

    for item in addItems:
        print("new item added!" + item['name'])
        print(item)
        ClubValue(
            specific_id=item['specific_id'],
            ranking= item['ranking'],
            club_image= item['club_image'],
            name= item['name'],
            Competition= item['Competition'],
            value= item['club_value']
        ).save()
    
    return addItems

addNewItems(club)