from django.contrib import admin
from o_manage_bike.models import operator_repair_history
from o_manage_bike.models import operator_transport_history


class OperatorRepairHistory(admin.ModelAdmin):
    pass


class OperatorTransportHistory(admin.ModelAdmin):
    pass


admin.site.register(operator_repair_history, OperatorRepairHistory)
admin.site.register(operator_transport_history, OperatorTransportHistory)
