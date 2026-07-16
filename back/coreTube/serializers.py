from rest_framework import serializers
from .models import *

class DadosYoutubeSerializer(serializers.ModelSerializer):
    class Meta:
        model = DadosYoutube
        fields = '__all__'

class MoviesSalvasServidorSerializer(serializers.ModelSerializer):
    class Meta:
        model = MoviesSalvasServidor
        fields = '__all__'

class MusicsSalvasServidorSerializer(serializers.ModelSerializer):
    class Meta:
        model = MoviesSalvasServidor
        fields = '__all__'

