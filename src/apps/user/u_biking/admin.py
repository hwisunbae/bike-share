from django.contrib import admin
from u_biking.models import bike_route


class BikeRoute(admin.ModelAdmin):
    pass


admin.site.register(bike_route, BikeRoute)
