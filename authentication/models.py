from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    USER_TYPE_CHOICES = (('normal', 'Normal User'),('hirer', 'Hirer'))
    user_type=models.CharField(max_length=10, choices=USER_TYPE_CHOICES, default='normal')