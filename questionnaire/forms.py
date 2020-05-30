from django import forms
from .models import Response
from .models import Consent
from .models import Interview
from .models import Building

#Branch

class ResponseForm(forms.ModelForm):
    NUMBERS = [('1','1'),('2','2'),('3','3'),('4','4'),('5','5')]
    question1_1 = forms.CharField(
        label='I enjoy looking at art.',
        widget=forms.RadioSelect(choices=NUMBERS))

    question1_2 = forms.CharField(
        label='In my spare time I attend art or art history events.',
        widget=forms.RadioSelect(choices=NUMBERS))
    
    question1_3 = forms.CharField(
        label='I enjoy looking at street art.',
        widget=forms.RadioSelect(choices=NUMBERS))

    question1_4 = forms.CharField(
        label='Mostly when I see street art, I am pleased.',
        widget=forms.RadioSelect(choices=NUMBERS))

    question1_5 = forms.CharField(
        label='I think that street art should be removed from the streets.',
        widget=forms.RadioSelect(choices=NUMBERS))

    class Meta:
        model = Response
        fields = ('question1_1','question1_2','question1_3','question1_4','question1_5')

class Building(forms.ModelForm):
    CHOICES = [('Y','Yes'),('N','No'),('IDK',"I don't know")]
    question6 = forms.CharField(
        label='Are you familiar with this artwork or the artist?', 
        widget=forms.RadioSelect(choices=CHOICES))
    
    question7 = forms.CharField(label='If yes what do you know about it?',
        widget=forms.Textarea(attrs={'rows':10,'cols':60}))

    question8 = forms.CharField(
        label='Describe your reaction to the artwork. What do you think it is about? How does it make you feel? Or if you prefer, write the first three words which spring to mind.',
        widget=forms.Textarea(attrs={'rows':10,'cols':60}))
        
    question9 = forms.CharField(
        label='Why did you draw the boundary here? Why did you choose this background image? Is there an element of the work you were unable to draw around that you feel should have been included within this frame?',
        widget=forms.Textarea(attrs={'rows':10,'cols':60}))

    question10= forms.CharField(
        label='How do you now feel about the artwork? Or if you prefer, write the first three words which spring to mind.',
        widget=forms.Textarea(attrs={'rows':10,'cols':60}))

    question11= forms.CharField(
        label='Would you change where you would draw the frame encompassing the artwork? Why?',
        widget=forms.Textarea(attrs={'rows':10,'cols':60}))

    class Meta:
        model = Building
        fields = ('question6','question7','question8','question9','question10','question11','drawing')
        widgets = {'drawing': forms.HiddenInput()}#

class Consent(forms.ModelForm):
    consent0 = forms.BooleanField(required = True, label='I am over 18 years old.')
    consent1 = forms.BooleanField(required = True, label='I confirm that I have read and understand the information for the above study. I have had the opportunity to consider the information, ask questions and have had these answered satisfactorily.')
    consent2 = forms.BooleanField(required = True, label='I understand that my participation is voluntary and that I am free to withdraw at any time, without giving any reason, and without any adverse consequences or academic penalty.')
    consent3 = forms.BooleanField(required = True, label='I understand that research data collected during the study may be looked at by designated individuals from the University of Oxford where it is relevant to my taking part in this study. I give permission for these individuals to access my data.')
    consent4 = forms.BooleanField(required = True, label='I understand that this project has been reviewed by, and received ethics clearance through, the University of Oxford Central University Research Ethics Committee.')
    consent5 = forms.BooleanField(required = True, label='I understand who will have access to personal data provided, how the data will be stored and what will happen to the data at the end of the project.')
    consent6 = forms.BooleanField(required = True, label='I understand how this research will be written up and published.')
    consent7 = forms.BooleanField(required = True, label='I understand how to raise a concern or make a complaint.')
    consent8 = forms.BooleanField(required = True, label='I agree to take part in the study.')
    class Meta:
        model = Consent
        fields=('consent0','consent1','consent2','consent3','consent4','consent5','consent6','consent7','consent8')

class Interview(forms.ModelForm):
    over18 = forms.BooleanField(required = True, label='I am over 18 years old.')
    email = forms.CharField(label='Email:',
        widget=forms.TextInput(attrs={'size':60}))
    class Meta:
        model = Interview
        fields=('over18','email')
        