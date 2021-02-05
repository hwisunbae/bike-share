from django.db import models

from src.apps.operator.o_login.models import operator_account
from src.apps.user.u_login.models import user_account

# Create your models here.
class bike(models.Model):
    bike_id = models.AutoField(primary_key=True)
    type = models.TextField()
    rent_money = models.FloatField()
    image = models.CharField()
    open_password = models.CharField()
    original_lat = models.CharField(max_length=50)
    original_lng = models.CharField(max_length=50)
    new_lat = models.CharField(max_length=50)
    new_lng = models.CharField(max_length=50)
    is_use = models.BooleanField(default=False)

class bike_mulfunction_history(models.Model):
    id = models.AutoField(primary_key=True)
    bike_id = models.ForeignKey(bike, on_delete=models.CASCADE)
    # user_repair_history_id = models.
    operator_id = models.ForeignKey(operator_account, on_delete=models.CASCADE)
    start_time = models.TimeField(auto_now_add=True)
    end_time = models.TimeField()
    is_repaired = models.BooleanField(default=False)

class bike_route(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(user_account, on_delete=models.CASCADE)
    bike_id = models.ForeignKey(bike, on_delete=models.CASCADE)
    lat = models.CharField(max_length=50)
    lng = models.CharField(max_length=50)
    start_time = models.TimeField(auto_now_add=True)
    end_time = models.TimeField()
