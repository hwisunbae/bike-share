from django.db import models


# Create your models here.
class User_history(models.Model):
    id = models.AutoField(primary_key=True)
    # user_id = models.ForeignKey(, )

# Table user_history {
#   id int [pk]
#   user_id int [ref: > users.id] //foreign
#   bike_id int [ref: > bike.bike_id] //foreign
#   fee float8
#   is_finished bool
#   // remarks
#   is_repair_needed bool
# }

