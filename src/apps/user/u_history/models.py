from django.db import models

from a_manage_bike.models import bike
from a_manage_location.models import location
from u_login.models import user_account

# Create your models here.
class user_history(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(user_account, on_delete=models.CASCADE)
    bike_id = models.ForeignKey(bike, on_delete=models.CASCADE)
    # rent_location_id = models.ForeignKey(location, on_delete=models.CASCADE)
    # return_location_id = models.ForeignKey(location, on_delete=models.CASCADE)
    fee = models.FloatField()
    start_time = models.TimeField(auto_now_add=True)
    end_time = models.TimeField()
    ratings = models.TextField()
    is_finished = models.BooleanField()
    reason_not_finished = models.TextField()

class user_repair_history(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(user_account, on_delete=models.CASCADE)
    bike_id = models.ForeignKey(bike, on_delete=models.CASCADE)
    question_type = models.CharField(max_length=50, null=True)
    question_place = models.CharField(max_length=50, null=True)
    question_in_detail = models.TextField()
    image1 = models.CharField(max_length=200, null=True)
    image2 = models.CharField(max_length=200, null=True)
    image3 = models.CharField(max_length=200, null=True)
    image4 = models.CharField(max_length=200, null=True)
    image5 = models.CharField(max_length=200, null=True)
    is_finished = models.BooleanField()