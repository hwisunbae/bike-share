
from django.db import models


# id
# name
# type(real admin/ manage_user/ manage_oprater/manage/bike)
# telephone
# username  (emain)
# password
# location = models.CharField(max_length=500,null= True)

# Create your models here.
class admin_account(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=32)
    name = models.CharField(max_length=50, null=True)
    type = models.CharField(max_length=20,null= True)
    telephone = models.CharField(max_length=50,null= True)
    location = models.CharField(max_length=500,null= True)

