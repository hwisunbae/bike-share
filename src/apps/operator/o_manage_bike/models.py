
from django.db import models

from a_manage_bike.models import bike
from u_login.models import user_account

# Create your models here.
class operator_route(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(user_account, on_delete=models.CASCADE)
    bike_id = models.ForeignKey(bike, on_delete=models.CASCADE)
    lat = models.CharField(max_length=50, null=True)
    lng = models.CharField(max_length=50, null=True)
    start_time = models.TimeField(auto_now_add=True)
    end_time = models.TimeField()