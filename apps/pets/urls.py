from django.urls import path
from .views import PetDetail, PetList
from .views import contact_view

urlpatterns = [
    path('pets/', PetList.as_view(), name='pet-list'),
    path('pets/<int:pk>/', PetDetail.as_view(), name='pet-detail'),
    path('contact/', contact_view, name='contact'),
]