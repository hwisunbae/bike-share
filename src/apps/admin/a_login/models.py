from django.db import models

# Create your models here.
class Admin_login(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=32)
    telephone = models.CharField(max_length=50, null=True)
    location = models.CharField(max_length=500, null=True)


# Table users {
#   id int [pk, increment] // auto-increment
#   first_name varchar
#   last_name varchar
#   email varchar [not null]
#   password char // use Umd5 encrption
#   mobile varchar
#   postcode varchar [not null]
#   created_at timestamp [default: `now()`]
# }