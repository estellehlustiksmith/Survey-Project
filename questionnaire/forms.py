from django import forms
from .models import Response
class ResponseForm(forms.ModelForm):
    class Meta:
        model = Response
        fields = ('question1','question2','question3')