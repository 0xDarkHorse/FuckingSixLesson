from rest_framework import mixins
from rest_framework import viewsets
from rest_framework import generics

from .models import User
from .serializers import UsersModelSerializer


class UsersModelViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.UpdateModelMixin):
    queryset = User.objects.all()
    serializer_class = UsersModelSerializer

