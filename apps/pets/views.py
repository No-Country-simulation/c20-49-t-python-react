from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Pets
from .serializers import PetSerializer

from django.core.mail import send_mail
from django.shortcuts import render
from django.conf import settings
from .forms import ContactForm


class PetList(generics.ListCreateAPIView):
    queryset = Pets.objects.filter(available=True)
    serializer_class = PetSerializer

class PetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pets.objects.all()
    serializer_class = PetSerializer



def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Obtener datos del formulario
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']

            # Construir el correo
            subject = f"Nuevo mensaje de contacto de {name}"
            message = f"Nombre: {name}\nCorreo: {email}\n\nMensaje:\n{message}"
            recipient_list = ['contact@tu-dominio.com']

            # Enviar el correo
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,  # Remitente
                recipient_list,
            )

            return render(request, 'contact_success.html')  # Redirigir a una página de éxito
    else:
        form = ContactForm()

    return render(request, 'contact.html', {'form': form})