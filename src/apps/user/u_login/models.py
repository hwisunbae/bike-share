from django.db import models
from django.utils import timezone

# Create your models here.
class User_account(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField()
    last_name = models.CharField()
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=32)
    mobile = models.CharField(max_length=50)
    postcode = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    money = models.CharField(max_length=100, null=True)

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
