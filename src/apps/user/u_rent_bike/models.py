from django.db import models

from a_manage_bike.models import bike
from u_login.models import user_account

# Create your models here.
class user_route(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(user_account, on_delete=models.CASCADE)
    bike_id = models.ForeignKey(bike, on_delete=models.CASCADE)
    latitude = models.CharField(max_length=50, default="latitude")
    longitude = models.CharField(max_length=50, default="longitude")
    start_time = models.TimeField(auto_now_add=True)
    end_time = models.TimeField()

