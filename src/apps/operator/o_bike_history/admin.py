from django.contrib import admin
from o_bike_history.models import operator_port_history


class OperatorPortHistory(admin.ModelAdmin):
    pass


admin.site.register(operator_port_history, OperatorPortHistory)
