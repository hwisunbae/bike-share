from django.db import models

from o_login.models import operator_account
from u_login.models import user_account
from a_manage_location.models import location

# from u_history.models import user_repair_history

# Create your models here.
class bike(models.Model):
    id = models.AutoField(primary_key=True)
    type = models.CharField(max_length=20, null=True)
    location_id =models.ForeignKey(location, on_delete=models.CASCADE)
    rent_money = models.FloatField()
    image = models.CharField(max_length=200, null=True)
    open_password = models.CharField(max_length=10, null=True)
    original_lat = models.CharField(max_length=50, null=True)
    original_lng = models.CharField(max_length=50, null=True)
    new_lat = models.CharField(max_length=50, null=True)
    new_lng = models.CharField(max_length=50, null=True)
    is_use = models.CharField(max_length=20,default=False)

class bike_malfunction_history(models.Model):
    id = models.AutoField(primary_key=True)
    bike_id = models.ForeignKey(bike, on_delete=models.CASCADE)
    operator_id = models.ForeignKey(operator_account, on_delete=models.CASCADE,null=True)
    start_time = models.DateTimeField(null=True)
    end_time = models.DateTimeField(null=True)
    question_type = models.CharField(max_length=50, null=True)
    detail = models.CharField(max_length=200, null=True)
    latitude = models.CharField(max_length=50, null=True)
    longitude = models.CharField(max_length=50, null=True)
    image1 = models.CharField(max_length=200, null=True)
    image2 = models.CharField(max_length=200, null=True)
    image3 = models.CharField(max_length=200, null=True)
    image4 = models.CharField(max_length=200, null=True)
    image5 = models.CharField(max_length=200, null=True)
    is_repaired = models.BooleanField(default=False)


