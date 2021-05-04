from django.urls import path
from . import views



urlpatterns = [
    # path('',views.player_value,name='player_value'),
    path('',views.ListSerieAPlayerStatistics.as_view()),
    path('<int:pk>',views.DetailSerieAPlayerStatistics.as_view()),
]