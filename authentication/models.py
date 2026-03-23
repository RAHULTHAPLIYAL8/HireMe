from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    USER_TYPE_CHOICES = (('normal', 'Normal User'),('hirer', 'Hirer'))
    user_type=models.CharField(max_length=10, choices=USER_TYPE_CHOICES, default='normal')

class JobSeekerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=100)
    bio = models.TextField(blank=True)
    skills = models.TextField(help_text="Comma separated skills")
    experience = models.IntegerField(default=0)  # in years
    resume = models.FileField(upload_to='resumes/', null=True, blank=True)
    location = models.CharField(max_length=100)
    expected_salary = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username

class HirerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    company_name = models.CharField(max_length=150)
    company_description = models.TextField()
    website = models.URLField(blank=True)
    location = models.CharField(max_length=100)
    company_logo = models.ImageField(upload_to='company_logos/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.company_name