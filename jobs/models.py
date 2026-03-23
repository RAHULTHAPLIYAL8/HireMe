from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

class Jobs(models.Model):
      posted_by=models.OneToOneField(User,on_delete=models.CASCADE)
      title=models.CharField(max_length=100,null=False)
      company_name=models.CharField(max_length=100,null=False)
      company_website=models.CharField(max_length=100,null=False)
      location=models.CharField(max_length=100,null=False)
      job_type_choices=(("full_time","full_time"),('part_time', 'part_time'), ('internship', 'internship'), ('contract', 'contract'),('remote','remote'))
      salary_min=models.IntegerField()
      salary_max=models.IntegerField()
      currency = models.CharField(max_length=10,choices=(("INR", "INR"), ("USD", "$")),default="INR")
      experience=models.IntegerField()
      description=models.CharField(max_length=1000)
      created_at=models.DateTimeField(auto_now_add=True)
      updated_at=models.DateTimeField(auto_now=True)


