import requests
from bs4 import BeautifulSoup
import pandas as pd
import time

headers = {
    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36 Edg/89.0.774.77"}


clubs = []


def extractInfo(info):
    ClubInfo = []
    club = info.find_all("td")

    ranking = club[0].text
    club_img = club[1].find("a").find("img")['src']
    name = club[2].find("a").text
    Competition_image = club[3].find("img")['src']
    Competition = club[3].find("a")['title']
    club_value = club[4].find("b").text[1:-1]
    if club_value[-1] == 'b':
        club_value = club_value[:-1]
        club_value = float(club_value)*13*1000
    else:
        club_value = float(club_value)*13
    ClubInfo.append(ranking)
    ClubInfo.append(club_img)
    ClubInfo.append(name)
    ClubInfo.append(Competition_image)
    ClubInfo.append(Competition)
    ClubInfo.append(club_value)

    return ClubInfo


def extract(lastPage, url):
    global clubs
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
    # url = "https://www.transfermarkt.com/spieler-statistik/wertvollstespieler/marktwertetop"
    # lastPages = getLastPage(url)
    lastPages = 4

    ClubValue = extract(lastPages, url)
    df = pd.DataFrame(ClubValue, columns=[
                      'ranking', 'club image', 'club', 'league image', 'league', 'value(억)'])
    df.to_csv('club_trasfermarket.csv', index=False, encoding='utf-8')
    # newdf = pd.read_csv(
    #     'c:/Users/범석/Desktop/transfermarket/club_trasfermarket.csv')
    # newdf['value'] = newdf['value'].str.replace('€', '')
    # newdf['value'] = newdf['value'].str.replace('m', '').astype('float')
    # newdf['시장가치(억)'] = newdf['value']*13
    # newdf.drop(columns=['value'], inplace=True)

    return ClubValue


getClubValue()
