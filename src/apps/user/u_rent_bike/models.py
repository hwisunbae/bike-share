from django.db import models
from django.utils import timezone
import os


# Create your models here.
def get_image_path(instance, filename):
    return os.path.join('src/img/bike', str(instance.id), filename)

class User_rented_bike(models.Model):
    id = models.AutoField(primary_key=True)
    type = models.CharField(max_length=50)
    image = models.ImageField(upload_to=get_image_path, blank=True, null=True)
    location_origin = models.IntegerField()
    location_now = models.IntegerField()
    is_in_use = models.BooleanField(default=False)
    when_used = models.DateTimeField(auto_now_add=True)
    when_stopped = models.DateTimeField(default=timezone.now)

# Table bike {
#   bike_id int [pk]
#   type varchar
#   image image
#   location_origin int [ref: - location.id] //foreign
#   location_now int [ref: - location.id] //foreign
#   is_in_use bool
# }
