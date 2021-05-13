from django.contrib import admin

# Register your models here.

# 앱을 admin에서 관리 하도록 하기 위해서 admin.py를 수정해줘야한다.
from crawled_data.models import PlayerValue
from crawled_data.models import ClubValue
from crawled_data.models import PlayerStatistics
from crawled_data.models import ClubStatistics


admin.site.register(PlayerValue)
admin.site.register(ClubValue)
admin.site.register(PlayerStatistics)
admin.site.register(ClubStatistics)
