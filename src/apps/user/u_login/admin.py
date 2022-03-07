from django.contrib import admin
from u_login.models import user_account

class UserAccount(admin.ModelAdmin):
    pass


admin.site.register(user_account, UserAccount)
