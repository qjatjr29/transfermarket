from django.urls import path
from . import views



urlpatterns = [
    # path('',views.player_value,name='player_value'),
    path('',views.ListLigue1ClubStatistics.as_view()),
    path('<int:pk>',views.DetailLigue1ClubStatistics.as_view()),
]