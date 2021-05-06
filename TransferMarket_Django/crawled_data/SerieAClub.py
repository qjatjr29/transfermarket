from django.urls import path
from . import views



urlpatterns = [
    # path('',views.player_value,name='player_value'),
    path('',views.ListSerieAClubStatistics.as_view()),
    path('<int:pk>',views.DetailSerieAClubStatistics.as_view()),
]