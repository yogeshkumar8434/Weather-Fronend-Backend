# from django.contrib import admin
from django.urls import path
from weather.views import get_weather
from weather.views import index

urlpatterns = [
    path('weather/<str:city>/', get_weather, name='get_weather'),
    path('',index, name='index')
]
