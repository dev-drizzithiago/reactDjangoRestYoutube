
from django.urls import path, include

from rest_framework import routers

from django.conf import settings
from rest_framework.routers import DefaultRouter
from .views import *


# # responsável pelo login
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),

    # Criar um token quando faz login
    path('api/token/', TokenObtainPairView.as_view()),
    path('apt/token/refresh', TokenRefreshView.as_view()),
]
