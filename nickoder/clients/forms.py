from django import forms


class EmailForm(forms.Form):
    name = forms.CharField(
        required=False,
        label='Your name',
        widget=forms.TextInput(attrs={'placeholder': 'Enter your name'})
    )
    email = forms.EmailField(
        required=True,
        label='Your mail*',
        widget=forms.EmailInput(attrs={'placeholder': 'Enter your email'})
    )
    message = forms.CharField(
        required=False,
        label='Your message',
        widget=forms.Textarea(attrs={'placeholder': 'Enter message'})
    )
