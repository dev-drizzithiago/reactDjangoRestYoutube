from django.shortcuts import render

from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import *

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializers_class = UserSerializer
