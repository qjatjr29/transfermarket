from django.urls import path
from . import views



urlpatterns = [
    # path('',views.player_value,name='player_value'),
    # path('Value',views.PlayerValue.as_view()),
    path('Value/<str:_position>',views.Player_Value.as_view()),
    path('ClubValue',views.Club_Value.as_view()),
]