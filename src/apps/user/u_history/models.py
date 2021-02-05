from django.db import models

from src.apps.admin.a_manage_bike.models import bike
from src.apps.user.u_login.models import user_account

# Create your models here.
class user_history(models.Model):
    user_id = models.ForeignKey(user_account, on_delete=models.CASCADE)
    bike_id = models.ForeignKey(bike, on_delete=models.CASCADE)
    # rented_lat = models.ForeignKey(bike, on_delete=models.CASCADE)
    # return_location_id =
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
    question_type = models.CharField(max_length=50)
    question_place = models.CharField(max_length=50)
    question_in_detail = models.TextField()
    image1 = models.CharField()
    image2 = models.CharField()
    image3 = models.CharField()
    image4 = models.CharField()
    image5 = models.CharField()
    is_finished = models.BooleanField()