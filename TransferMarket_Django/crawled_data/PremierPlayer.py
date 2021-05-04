from django.urls import path
from . import views



urlpatterns = [
    # path('',views.player_value,name='player_value'),
    path('',views.ListPremierPlayerStatistics.as_view()),
    path('<int:pk>',views.DetailPremierPlayerStatistics.as_view()),
]