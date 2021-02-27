
from django.db import models

from a_manage_bike.models import bike
from o_login.models import operator_account

# Create your models here.
class operator_port_history(models.Model):
    id = models.AutoField(primary_key=True)
    bike_id = models.ForeignKey(bike, on_delete=models.CASCADE)
    operator_id = models.ForeignKey(operator_account, on_delete=models.CASCADE)
    time = models.TimeField()
    location = models.CharField(max_length=500, null=True)
    image1 = models.CharField(max_length=200, null=True)
    image2 = models.CharField(max_length=200, null=True)
    image3 = models.CharField(max_length=200, null=True)
    image4 = models.CharField(max_length=200, null=True)
    image5 = models.CharField(max_length=200, null=True)