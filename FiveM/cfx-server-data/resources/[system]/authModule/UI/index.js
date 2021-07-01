const messages = {
    en: {
        message: {
            authTab: 'Sign In',
            registerTab: 'Sign Up',
            loginLabel: 'Login:',
            loginDanger: 'Minimum login length 4 characters',
            passwordLabel: 'Password:',
            passwordDanger: 'Minimum password length 4 characters',
            authButton: 'LogIn',
            selectLanguage: 'Select Language',
            registerEmailLabel: 'Email:',
            registerEmailDanger: 'Email is not valid',
            registerButton: 'Register account',
        }
    },
    ru: {
        message: {
            authTab: 'Вход',
            registerTab: 'Регистрация',
            loginLabel: 'Логин:',
            loginDanger: 'Минимальная длина логина 4 символа',
            passwordLabel: 'Пароль:',
            passwordDanger: 'Минимальная длина пароля 4 символа',
            authButton: 'Войти в аккаунт',
            selectLanguage: 'Выбрать язык',
            registerEmailLabel: 'Почта:',
            registerEmailDanger: 'Вы указали неверный email',
            registerButton: 'Зарегистрироваться'
        }
    }
}

const i18n = new VueI18n({
    locale: 'ru', // set locale
    messages, // set locale messages
})

const app = new Vue({
    el: '#app',
    i18n,
    data() {
        return {
            isLogin: true,
            authLogin: '',
            authPassword: '',
            registerLogin: '',
            registerEmail: '',
            registerPassword: '',
            isActiveLoginTab: true,
            isActiveRegisterTab: false,
        }
    },
    computed: {
        checkEmail() {
            const regExp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            return regExp.test(String(this.registerEmail).toLowerCase());
        }
    },
    methods: {
        showLoginTab() {
            this.isLogin = true;
            this.isActiveLoginTab = true;
            this.isActiveRegisterTab = false;
        },
        showRegisterTab() {
            this.isLogin = false;
            this.isActiveLoginTab = false;
            this.isActiveRegisterTab = true;
        },
        logIn() {
            if (this.authLogin.length > 3 && this.authPassword.length > 3) {
                console.log('authSuccess');
            }
        },
        signIn() {
            if ((this.authLogin.length > 3 && this.authPassword.length > 3) && this.checkEmail) {
                console.log('registerSuccess');
            }
        }
    },
});