from django.urls import path
from . import views



urlpatterns = [
    # path('',views.player_value,name='player_value'),
    path('',views.ListForwardValue.as_view()),
    path('<int:pk>',views.DetailForwardValue.as_view()),
]