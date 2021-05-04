from django.urls import path
from . import views



urlpatterns = [
    # path('',views.player_value,name='player_value'),
    path('',views.ListGoalKeeperValue.as_view()),
    path('<int:pk>',views.DetailGoalKeeperValue.as_view()),
]