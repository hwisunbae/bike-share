from django.db import models

from u_rent_bike.models import user_route
from u_login.models import user_account
from a_manage_bike.models import bike
# Create your models here.
class bike_route(models.Model):
    id = models.AutoField(primary_key=True)
    user_rent_id = models.ForeignKey(user_route, on_delete=models.CASCADE)
    user_id = models.ForeignKey(user_account, on_delete=models.CASCADE)
    bike_id = models.ForeignKey(bike, on_delete=models.CASCADE)
    lat = models.CharField(max_length=50, null=True)
    lng = models.CharField(max_length=50, null=True)
    time = models.DateTimeField(null=True)