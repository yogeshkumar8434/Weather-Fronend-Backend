from django.http import JsonResponse
from django.shortcuts import render
import requests
import json

def get_weather(request, city):
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid=a0e19756e45cc9f67d75d7bff1fa654b"
    response = requests.get(url)
    print("Weather",JsonResponse(json.loads(response.text)))
    return JsonResponse(json.loads(response.text))

def index(request):
    return render(request, 'index.html')