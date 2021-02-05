<<<<<<< HEAD
from django.db import models

from src.apps.admin.a_manage_bike.models import bike
from src.apps.user.u_login.models import user_account

# Create your models here.
class operator_route(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(user_account, on_delete=models.CASCADE)
    bike_id = models.ForeignKey(bike, on_delete=models.CASCADE)
    lat = models.CharField(max_length=50)
    lng = models.CharField(max_length=50)
    start_time = models.TimeField(auto_now_add=True)
    end_time = models.TimeField()
=======
from django.db import models

# Create your models here.
>>>>>>> 75a4e83582d870a2abd73c318918ebb990421c13
