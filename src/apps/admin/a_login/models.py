from django.db import models

# Create your models here.
class admin_account(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, null=True)
    type = models.CharField(max_length=20, null=True)
    telephone = models.CharField(max_length=50, null=True)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=32)
    lat = models.CharField(max_length=50)
    lng = models.CharField(max_length=50)
