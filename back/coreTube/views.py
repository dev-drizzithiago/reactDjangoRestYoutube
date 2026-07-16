from django.shortcuts import render

from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import *

# Create your views here.

class DadosYoutubeViewSet(viewsets.ModelViewSet):
    queryset = DadosYoutube.objects.all()
    serializer_class = DadosYoutubeSerializer
