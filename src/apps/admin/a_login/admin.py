from django.contrib import admin
from a_login.models import admin_account


class AdminAccount(admin.ModelAdmin):
    pass


admin.site.register(admin_account, AdminAccount)
