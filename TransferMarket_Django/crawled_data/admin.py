from django.contrib import admin

# Register your models here.

# 앱을 admin에서 관리 하도록 하기 위해서 admin.py를 수정해줘야한다.
from crawled_data.models import PlayerData
from crawled_data.models import ClubData
from crawled_data.models import ForwardValue
from crawled_data.models import MidFieldValue
from crawled_data.models import DefenderValue
from crawled_data.models import GoalKeeperValue
from crawled_data.models import PremierPlayerStatistics
from crawled_data.models import Ligue1PlayerStatistics
from crawled_data.models import LaligaPlayerStatistics
from crawled_data.models import SerieAPlayerStatistics
from crawled_data.models import BundesligaPlayerStatistics


admin.site.register(PlayerData)
admin.site.register(ClubData)
admin.site.register(ForwardValue)
admin.site.register(MidFieldValue)
admin.site.register(DefenderValue)
admin.site.register(GoalKeeperValue)
admin.site.register(PremierPlayerStatistics)
admin.site.register(Ligue1PlayerStatistics)
admin.site.register(LaligaPlayerStatistics)
admin.site.register(SerieAPlayerStatistics)
admin.site.register(BundesligaPlayerStatistics)