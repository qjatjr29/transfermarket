from django.urls import path
from . import views



urlpatterns = [
    # path('',views.player_value,name='player_value'),
    path('',views.ListLaligaClubStatistics.as_view()),
    path('<int:pk>',views.DetailLaligaClubStatistics.as_view()),
]