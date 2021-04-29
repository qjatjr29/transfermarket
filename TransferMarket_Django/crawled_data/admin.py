from django.contrib import admin

# Register your models here.

# 앱을 admin에서 관리 하도록 하기 위해서 admin.py를 수정해줘야한다.
from crawled_data.models import PlayerData
from crawled_data.models import ClubData

admin.site.register(PlayerData)
admin.site.register(ClubData)