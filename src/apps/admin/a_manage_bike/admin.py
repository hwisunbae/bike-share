from django.contrib import admin
from a_manage_bike.models import bike
from a_manage_bike.models import bike_malfunction_history


# Register your models here.


class Bike(admin.ModelAdmin):
    pass


class BikeMalfunctionHistory(admin.ModelAdmin):
    pass


admin.site.register(bike, Bike)
admin.site.register(bike_malfunction_history, BikeMalfunctionHistory)
