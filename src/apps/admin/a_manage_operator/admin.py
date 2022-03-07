from django.contrib import admin
from a_manage_operator.models import admin_account


# Register your models here.

class ManageAccount(admin.ModelAdmin):
    pass


admin.site.register(admin_account, ManageAccount)
