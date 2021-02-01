from django.db import models

# Create your models here.
########test     by      Xianyu     not       complete    ###################
class admin_account(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=32)
    telephone = models.CharField(max_length=50,null= True)
    location = models.CharField(max_length=500,null= True)
    money = models.CharField(max_length=100,null= True)