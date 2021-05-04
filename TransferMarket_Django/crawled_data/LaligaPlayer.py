from django.urls import path
from . import views



urlpatterns = [
    # path('',views.player_value,name='player_value'),
    path('',views.ListLaligaPlayerStatistics.as_view()),
    path('<int:pk>',views.DetailLaligaPlayerStatistics.as_view()),
]