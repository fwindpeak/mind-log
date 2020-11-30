from django.contrib import admin

# Register your models here.

from .models import Mindlog # add this

class MindlogAdmin(admin.ModelAdmin):  # add this
  list_display = ('content','createdTime') # add this

# Register your models here.
admin.site.register(Mindlog, MindlogAdmin) # add this