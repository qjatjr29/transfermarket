from django.urls import path
from . import views



urlpatterns = [
    # path('',views.player_value,name='player_value'),
    # path('Value',views.PlayerValue.as_view()),
    path('Stats/<str:League>',views.Player_Statistics.as_view()),
    path('ClubStats/<str:League>',views.Club_Statistics.as_view()),
    path('Stats/Search/<str:name>',views.PlayerStatisticsSearch.as_view()),
    path('ClubStats/Search/<str:name>',views.ClubStatisticsSearch.as_view()),
    path('Son',views.SonStatistics.as_view()),
]