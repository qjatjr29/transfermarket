from django.urls import path
from . import views



urlpatterns = [
    # path('',views.player_value,name='player_value'),
    path('',views.ListLigue1PlayerStatistics.as_view()),
    path('<int:pk>',views.DetailLigue1PlayerStatistics.as_view()),
]