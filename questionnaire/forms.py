from django import forms
from .models import Response
from .models import Consent

class ResponseForm(forms.ModelForm):
    class Meta:
        model = Response
        fields = ('question1','question2','question3', 'drawing')
        widgets = {'drawing': forms.HiddenInput()}#

class Consent(forms.ModelForm):
    consent1 = forms.BooleanField(required = True)
    consent2 = forms.BooleanField(required = True)
    consent3 = forms.BooleanField(required = True)
    consent4 = forms.BooleanField(required = True)
    consent5 = forms.BooleanField(required = True)
    consent6 = forms.BooleanField(required = True)
    consent7 = forms.BooleanField(required = True)
    consent8 = forms.BooleanField(required = True)
    class Meta:
        model = Consent
        fields=('consent1','consent2','consent3','consent4','consent5','consent6','consent7','consent8')