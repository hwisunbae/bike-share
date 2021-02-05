
from django.db import models

from src.apps.admin.a_manage_bike.models import bike
from src.apps.operator.o_login.models import operator_account

# Create your models here.
class operator_port_history(models.Model):
    id = models.AutoField(primary_key=True)
    bike_id = models.ForeignKey(bike, on_delete=models.CASCADE)
    operator_id = models.ForeignKey(operator_account, on_delete=models.CASCADE)
    time = models.TimeField()
    location = models.CharField(max_length=500, null=True)
    image1 = models.CharField()
    image2 = models.CharField()
    image3 = models.CharField()
    image4 = models.CharField()
    image5 = models.CharField()