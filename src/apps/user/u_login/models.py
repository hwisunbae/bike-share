from django.db import models
from django import forms
# Create your models here.
class user_account(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50, null=True)
    password = models.CharField(max_length=32, null=True)
    telephone = models.CharField(max_length=50, null=True)
    location = models.CharField(max_length=500, null=True)
    money = models.CharField(max_length=100, null=True)