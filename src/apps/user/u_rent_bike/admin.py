from django.contrib import admin
from u_rent_bike.models import user_route


class UserRoute(admin.ModelAdmin):
    pass


admin.site.register(user_route, UserRoute)
