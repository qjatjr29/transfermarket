from selenium import webdriver
from pandas.io.html import read_html
from webdriver_manager.chrome import ChromeDriverManager
import time
import pandas as pd 
import numpy as np 
import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urlparse

os.environ.setdefault('DJANGO_SETTINGS_MODULE',"TransferMarket_Django.settings")
import django
django.setup()
from crawled_data.models import PremierClubStatistics
from crawled_data.models import Ligue1ClubStatistics
from crawled_data.models import LaligaClubStatistics
from crawled_data.models import SerieAClubStatistics
from crawled_data.models import BundesligaClubStatistics



headers = {
    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36 Edg/89.0.774.77"}


def extractStat(info):
    stat = info.find_all("td")
    ranking = int(stat[0].find("div").find("strong").text)
    name = stat[1].find("div").find("span").text
    play = stat[2].find("div").find("span").text
    pts = stat[3].find("div").find("span").text
    win = stat[4].find("div").find("span").text
    draw = stat[5].find("div").find("span").text
    lose = stat[6].find("div").find("span").text
    gf = stat[7].find("div").find("span").text
    ga = stat[8].find("div").find("span").text
    gd = stat[9].find("div").find("span").text
    

    return{
        "specific_id":ranking,
        "ranking": ranking,
        "name": name,
        "play": play,
        "win": win,
        "draw":draw,
        "lose": lose,
        "gf": gf,
        "ga": ga,
        "gd": gd,
        "pts": pts
    }


def extract(url):
    stats=[]
    
    r = requests.get(url, headers=headers)
    soup = BeautifulSoup(r.text, 'html.parser')
    # print(url)
    # print(soup)
    club_stat=soup.find_all('tbody')
    print(club_stat)
    # club_stat = soup.find_all('script',{'type':'text/javascript'})
    # .find('table').find('tbody').find_all('tr')
    # print(club_stat[5].find('jsonTeamRecord'))
    # for stat in club_stat:
    #     stat = extractStat(stat)
    #     stats.append(stat)
    #     print("stat : ", stat)
    #         # print("pInfo:", pInfo)
    # return stats


def getClubStats(urls):
    
    url=f"{urls}"
    clubstat = extract(url)
    # print (PlayerValueInfo)
    return clubstat

# 네이버 스포츠 
def NgetClubStatistics(url,sleep_time):
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver = webdriver.Chrome('/Users/범석/Documents/chromedriver')
    # driver=webdriver.Chrome(chrome_driver)
    driver.implicitly_wait(3)
    driver.get(url)

    # 최소 경기 뛴 선수들만
    # time.sleep(sleep_time)
    # Minimum_apps = driver.find_element_by_link_text('Minimum apps')
    # Minimum_apps.click()

    time.sleep(sleep_time)
    df_clubStatistics=pd.DataFrame(columns=[
        '순위','팀','경기수','승점','승','무','패','득점','실점','득실차'
    ])

    #crawling the table
   
    time.sleep(sleep_time)
    table = driver.find_element_by_xpath('//*[@id="wfootballTeamRecordBody"]')
    table_html= table.get_attribute('innerHTML')
    df2 = read_html(table_html)[0]
    df_clubStatistics = pd.concat([df_clubStatistics, df2], axis=0)
       
    
    # print(df_clubStatistics['순위'])
    return(df_clubStatistics)


urls=[
    'https://sports.news.naver.com/wfootball/record/index.nhn?category=epl&tab=team', 
    'https://sports.news.naver.com/wfootball/record/index.nhn?category=primera&tab=team',
    'https://sports.news.naver.com/wfootball/record/index.nhn?category=bundesliga&tab=team',
    'https://sports.news.naver.com/wfootball/record/index.nhn?category=seria&tab=team',
    'https://sports.news.naver.com/wfootball/record/index.nhn?category=ligue1&tab=team'
]

# _url=urls[0]
# print(getClubStats(_url))
# NgetClubStatistics(_url,3)
# NgetClubStatistics(_url,3)

def addPremierClub(clubstats):
    last_inserted_items=PremierClubStatistics.objects.last()
    if last_inserted_items is None:
        last_inserted_specific_id=""
    else:
        last_inserted_specific_id=getattr(last_inserted_items,'specific_id')

    addItems=[]
    for item in clubstats:
        if item['specific_id']==last_inserted_specific_id:
            break
        addItems.append(item)
    
    # addItems.reverse()
    
    for item in addItems:
        print("new item added!" + item['name'])
        print(item)
        PremierClubStatistics(
            specific_id=item['specific_id'],
            ranking= item['ranking'],
            state=item['state'],
            name= item['name'],
            play= item['play'],
            win= item['win'],
            draw= item['draw'],
            lose= item['lose'],
            gf= item['gf'],
            ga=item['ga'],
            gd= item['gd'],
            pts= item['pts']
        ).save()
    
    return addItems

def addLaLigaClub(clubstats):
    last_inserted_items=LaligaClubStatistics.objects.last()
    if last_inserted_items is None:
        last_inserted_specific_id=""
    else:
        last_inserted_specific_id=getattr(last_inserted_items,'specific_id')

    addItems=[]
    for item in clubstats:
        if item['specific_id']==last_inserted_specific_id:
            break
        addItems.append(item)
    
    # addItems.reverse()

    for item in addItems:
        print("new item added!" + item['name'])
        print(item)
        LaligaClubStatistics(
            specific_id=item['specific_id'],
            ranking= item['ranking'],
            state=item['state'],
            name= item['name'],
            play= item['play'],
            win= item['win'],
            draw= item['draw'],
            lose= item['lose'],
            gf= item['gf'],
            ga=item['ga'],
            gd= item['gd'],
            pts= item['pts']
        ).save()
    
    return addItems

def addBundesLigaClub(clubstats):
    last_inserted_items=BundesligaClubStatistics.objects.last()
    if last_inserted_items is None:
        last_inserted_specific_id=""
    else:
        last_inserted_specific_id=getattr(last_inserted_items,'specific_id')

    addItems=[]
    for item in clubstats:
        if item['specific_id']==last_inserted_specific_id:
            break
        addItems.append(item)
    
    # addItems.reverse()

    for item in addItems:
        print("new item added!" + item['name'])
        print(item)
        BundesligaClubStatistics(
            specific_id=item['specific_id'],
            ranking= item['ranking'],
            state=item['state'],
            name= item['name'],
            play= item['play'],
            win= item['win'],
            draw= item['draw'],
            lose= item['lose'],
            gf= item['gf'],
            ga=item['ga'],
            gd= item['gd'],
            pts= item['pts']
        ).save()
    
    return addItems

def addSerieAClub(clubstats):
    last_inserted_items=SerieAClubStatistics.objects.last()
    if last_inserted_items is None:
        last_inserted_specific_id=""
    else:
        last_inserted_specific_id=getattr(last_inserted_items,'specific_id')

    addItems=[]
    for item in clubstats:
        if item['specific_id']==last_inserted_specific_id:
            break
        addItems.append(item)
    
    # addItems.reverse()

    for item in addItems:
        print("new item added!" + item['name'])
        print(item)
        SerieAClubStatistics(
            specific_id=item['specific_id'],
            ranking= item['ranking'],
            state=item['state'],
            name= item['name'],
            play= item['play'],
            win= item['win'],
            draw= item['draw'],
            lose= item['lose'],
            gf= item['gf'],
            ga=item['ga'],
            gd= item['gd'],
            pts= item['pts']
        ).save()
    
    return addItems

def addLigue1Club(clubstats):
    last_inserted_items=Ligue1ClubStatistics.objects.last()
    if last_inserted_items is None:
        last_inserted_specific_id=""
    else:
        last_inserted_specific_id=getattr(last_inserted_items,'specific_id')

    addItems=[]
    for item in clubstats:
        if item['specific_id']==last_inserted_specific_id:
            break
        addItems.append(item)
    
    # addItems.reverse()

    for item in addItems:
        print("new item added!" + item['name'])
        print(item)
        Ligue1ClubStatistics(
            specific_id=item['specific_id'],
            ranking= item['ranking'],
            state=item['state'],
            name= item['name'],
            play= item['play'],
            win= item['win'],
            draw= item['draw'],
            lose= item['lose'],
            gf= item['gf'],
            ga=item['ga'],
            gd= item['gd'],
            pts= item['pts']
        ).save()
    
    return addItems

# for i in range(0,5):
#     clubstats=getClubStats(urls[i])
#     if i==0:
#         addPremierClub(clubstats)
#     elif i==1:
#         addLaLigaClub(clubstats)
#     elif i==2:
#         addBundesLigaClub(clubstats)
#     elif i==3:
#         addSerieAClub(clubstats)
#     elif i==4:
#         addLigue1Club(clubstats)


for i in range(0,5):
    url=urls[i]
    df = NgetClubStatistics(url,3)

    # df = df.reset_index()
    # df.drop(['index', 'Player'], axis=1, inplace=True)
    spl= df['순위'].str.split(' ')
    # print(spl)
    ranking=[]
    state=[]
    for j in range(len(spl)):
        if len(spl[j])>1:
            _state=""
            for z in range(1,len(spl[j])):
                _state+=spl[j][z]
            _ranking=spl[j][0]
            ranking.append(_ranking)
            state.append(_state)
        else:
            _ranking=spl[j][0]
            ranking.append(_ranking)
            state.append("")
           
    df['specific_id']=ranking
    df['ranking']=ranking
    df['state']=state
    df['name']=df['팀']
    df['play']=df['경기수']
    df['win']=df['승']
    df['draw']=df['무']
    df['lose']=df['패']
    df['gf']=df['득점']
    df['ga']=df['실점']
    df['gd']=df['득실차']
    df['pts']=df['승점']
 
    # print(len(df['specific_id']))
    
    # print(len(df['name']))
    size=len(df['specific_id'])
    stat=[]
    for j in range(0,size):
        addStat={
            'specific_id':df['specific_id'][j],
            'ranking':df['ranking'][j],
            'name':df['name'][j],
            'state':df['state'][j],
            'play':df['play'][j],
            'win':df['win'][j],
            'draw':df['draw'][j],
            'lose':df['lose'][j],
            'gf':df['gf'][j],
            'ga':df['ga'][j],
            'gd':df['gd'][j],
            'pts':df['pts'][j]
        }
        stat.append(addStat)
        # print(df['name'][i])

    # print(stat)
    time.sleep(5)
    print("i" , i)
    if i==0 :
        addPremierClub(stat)
    elif i==1 :
        addLaLigaClub(stat)
    elif i==2:
        addBundesLigaClub(stat)
    elif i==3:
        addSerieAClub(stat)
    elif i==4:
        addLigue1Club(stat)
    print(df)
