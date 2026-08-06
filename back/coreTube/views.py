from django.contrib.admin import actions
from django.shortcuts import render

from rest_framework.decorators import action
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.views.generic import detail
from rest_framework import viewsets
from .serializers import *
from .modulo_tube.app_tube import YouTubeDownload

# Create your views here.

class DadosYoutubeViewSet(viewsets.ModelViewSet):
    queryset = DadosYoutube.objects.all()
    serializer_class = DadosYoutubeSerializer
    obj_tube = YouTubeDownload()

    @action(detail=False, methods=['POST'])
    def link(self, request):
        msg_processo = None
        err_processo = None
        ret_processo = None

        link_front = request.data
        print(link_front)
        link = link_front['link']

        retorno_validate = self.obj_tube.validar_link_youtube(link)
        print(retorno_validate)

        if retorno_validate:
            retorno = self.obj_tube.registrando_link_base_dados(link, request.user)
            print(retorno)

        return Response({
            "msg_processo": msg_processo,
            "err_processo": err_processo,
            "ret_processo": ret_processo,
        }, status=err_processo)

