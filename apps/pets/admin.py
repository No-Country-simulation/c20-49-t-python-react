from django.contrib import admin
from .models import Pets

# Register your models here.
@admin.register(Pets)
class PetAdmin(admin.ModelAdmin):
    list_display = ('name', 'species', 'breed', 'age', 'available')
    list_filter = ('species', 'available')
    search_fields = ('name', 'breed')