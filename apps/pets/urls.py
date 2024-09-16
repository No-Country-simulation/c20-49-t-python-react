from django.urls import path
from .views import PetDetail, PetList

urlpatterns = [
    path('pets/', PetList.as_view(), name='pet-list'),
    path('pets/<int:pk>/', PetDetail.as_view(), name='pet-detail'),
]