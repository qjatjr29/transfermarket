from django.urls import path
from . import views



urlpatterns = [
    # path('',views.player_value,name='player_value'),
    path('',views.ListBundesligaPlayerStatistics.as_view()),
    path('<int:pk>',views.DetailBundesligaPlayerStatistics.as_view()),
]