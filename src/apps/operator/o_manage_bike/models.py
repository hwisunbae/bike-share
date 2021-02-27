
from django.db import models

from a_manage_bike.models import bike
from a_manage_location.models import location
from u_login.models import user_account
from o_login.models import operator_account

# Create your models here.

class operator_repair_history(models.Model):
    id = models.AutoField(primary_key=True)
    operator_id = models.ForeignKey(operator_account, on_delete=models.CASCADE)
    bike_id = models.ForeignKey(bike, on_delete=models.CASCADE)
    location = models.CharField(max_length=500, null=True)
    start_time = models.DateTimeField(null=True)
    end_time = models.DateTimeField(null=True)
    image1 = models.CharField(max_length=200, null=True)
    image2 = models.CharField(max_length=200, null=True)
    image3 = models.CharField(max_length=200, null=True)
    image4 = models.CharField(max_length=200, null=True)
    image5 = models.CharField(max_length=200, null=True)


class operator_transport_history(models.Model):
    id = models.AutoField(primary_key=True)
    operator_id = models.ForeignKey(operator_account, on_delete=models.CASCADE)
    bike_id = models.ForeignKey(bike, on_delete=models.CASCADE)
    location_id = models.ForeignKey(location, on_delete=models.CASCADE)
    time = models.DateTimeField(null=True)

