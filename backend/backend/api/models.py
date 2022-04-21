from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    pass


class Movie(models.Model):
    title=models.CharField(max_length=255)
    description=models.TextField()