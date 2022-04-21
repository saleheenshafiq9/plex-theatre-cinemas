from django.shortcuts import render
from django.contrib.auth.models import User

from .models import Movie
from .serializers import UserSerializer, UserCreateSerializer, MovieSerializer
from rest_framework.viewsets import ModelViewSet
from django.contrib.auth import get_user_model
User = get_user_model()
# Create your views here.

class MovieViewSet(ModelViewSet):
    queryset=Movie.objects.all()
    serializer_class=MovieSerializer
