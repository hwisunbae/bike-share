from django.db import models


# Create your models here.
class operator_account(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=32)
    type = models.TextField()
    telephone = models.CharField(max_length=50, null=True)
    location = models.CharField(max_length=500, null=True)
