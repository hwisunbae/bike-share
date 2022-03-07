from django.contrib import admin
from o_login.models import operator_account


class OperatorAccount(admin.ModelAdmin):
    pass


admin.site.register(operator_account, OperatorAccount)
