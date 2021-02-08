from django.db import models

from o_login.models import operator_account
from u_login.models import user_account
# from u_history.models import user_repair_history

# Create your models here.
class bike(models.Model):
    id = models.AutoField(primary_key=True)
    type = models.CharField(max_length=20, null=True)
    rent_money = models.FloatField()
    image = models.CharField(max_length=200, null=True)
    open_password = models.CharField(max_length=10, null=True)
    original_lat = models.CharField(max_length=50, null=True)
    original_lng = models.CharField(max_length=50, null=True)
    new_lat = models.CharField(max_length=50, null=True)
    new_lng = models.CharField(max_length=50, null=True)
    is_use = models.BooleanField(default=False)

class bike_malfunction_history(models.Model):
    id = models.AutoField(primary_key=True)
    bike_id = models.ForeignKey(bike, on_delete=models.CASCADE)
    # user_repair_history_id = models.ForeignKey(user_repair_history, on_delete=models.CASCADE)
    operator_id = models.ForeignKey(operator_account, on_delete=models.CASCADE)
    start_time = models.TimeField(auto_now_add=True)
    end_time = models.TimeField()
    is_repaired = models.BooleanField(default=False)

class bike_route(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(user_account, on_delete=models.CASCADE)
    bike_id = models.ForeignKey(bike, on_delete=models.CASCADE)
    lat = models.CharField(max_length=50, null=True)
    lng = models.CharField(max_length=50, null=True)
    start_time = models.TimeField(auto_now_add=True)
    end_time = models.TimeField()
