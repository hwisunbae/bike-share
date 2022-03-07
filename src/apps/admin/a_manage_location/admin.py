from django.contrib import admin
from a_manage_location.models import location
# Register your models here.


class Location(admin.ModelAdmin):
    pass


admin.site.register(location, Location)