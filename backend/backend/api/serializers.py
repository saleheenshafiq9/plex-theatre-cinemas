from dataclasses import field
from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer, UserSerializer as BaseUserSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Movie

User = get_user_model()

class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        model=User
        fields = [ 'id', 
        'username', 'password',
                  'email', 'first_name', 'last_name',
                  ]

class UserSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        fields= ['id', 'username', 'email', 'first_name', 'last_name',]

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model=Movie
        fields=['id', 'title', 'description']
